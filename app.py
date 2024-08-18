from flask import Flask, request, jsonify
import requests
import json
from flask_cors import CORS
from geo.Geoserver import Geoserver
geo = Geoserver('http://127.0.0.1:8080/geoserver', username='admin', password='geoserver')

app = Flask(__name__)
CORS(app)
GEOSERVER_URL = 'http://localhost:8080/geoserver/rest'
GEOSERVER_USER = 'admin'
GEOSERVER_PASSWORD = 'geoserver'

def create_workspace(workspace_name):
    url = f'{GEOSERVER_URL}/workspaces'
    headers = {'Content-Type': 'application/json'}
    data = {'workspace': {'name': workspace_name}}
    response = requests.post(url, auth=(GEOSERVER_USER, GEOSERVER_PASSWORD), headers=headers, data=json.dumps(data))
    return response.status_code, response.text

def create_datastor(workspace_name, datastore_name, data_path):
    url = f'{GEOSERVER_URL}/workspaces/{workspace_name}/datastores'
    headers = {'Content-Type': 'application/json'}
    data = {
        'dataStore': {
            'name': datastore_name,
            'connectionParameters': {
                'url': f'file:{data_path}'
            }
        }
    }
    response = requests.post(url, auth=(GEOSERVER_USER, GEOSERVER_PASSWORD), headers=headers, data=json.dumps(data))
    return response.status_code, response.text

def publish_layer(workspace_name, datastore_name, layer_name):
    url = f'{GEOSERVER_URL}/workspaces/{workspace_name}/datastores/{datastore_name}/featuretypes'
    headers = {'Content-Type': 'application/json'}
    data = {
        'featureType': {
            'name': layer_name
        }
    }
    response = requests.post(url, auth=(GEOSERVER_USER, GEOSERVER_PASSWORD), headers=headers, data=json.dumps(data))
    return response.status_code, response.text

@app.route('/publish', methods=['POST'])
def publish():
    data = request.json
    workspace_name = data['workspace_name']
    datastore_name = data['datastore_name']
    data_path = data['data_path']
    layer_name = data['layer_name']

    ws_status, ws_response = create_workspace(workspace_name)
    if ws_status not in [200, 201]:
        return jsonify({'status': 'error', 'message': 'Failed to create workspace', 'details': ws_response}), ws_status

    ds_status, ds_response = create_datastore(workspace_name, datastore_name, data_path)
    if ds_status not in [200, 201]:
        return jsonify({'status': 'error', 'message': 'Failed to create datastore', 'details': ds_response}), ds_status

    layer_status, layer_response = publish_layer(workspace_name, datastore_name, layer_name)
    if layer_status not in [200, 201]:
        return jsonify({'status': 'error', 'message': 'Failed to publish layer', 'details': layer_response}), layer_status

    return jsonify({'status': 'success', 'message': 'Layer published successfully'}), 200

@app.route('/create-workspace', methods=['GET'])
def create():
    
    response = geo.create_workspace(workspace='new_workspace9')

    return jsonify({'response': response})
@app.route('/create-datastore', methods=['POST'])
def create_datastore():
    print(request.json)
    name = request.json['layerName']
    data_path = request.json['filePath'][1:-1]
    print(name, data_path)
    response= geo.create_coveragestore(layer_name=name, path=r"{}".format(data_path), workspace='new_workspace9')
    print(response)
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)
