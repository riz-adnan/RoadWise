import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const UploadMap = () => {
    const Navigate = useNavigate();
  const [layerName, setLayerName] = useState('');
  const [filePath, setFilePath] = useState('');
  const [corners, setCorners] = useState({
    lat1: '',
    lon1: '',
    lat2: '',
    lon2: '',
    lat3: '',
    lon3: '',
    lat4: '',
    lon4: ''
  });
  useEffect(() => {
    try{
        fetch(`http://localhost:5000/create-workspace`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }
    )
}
catch (error)
{
    console.error('Error:', error);
}
    }, []);

  const handleCornerChange = (event) => {
    const { name, value } = event.target;
    setCorners({
      ...corners,
      [name]: value
    });
  };

  const handleSave = () => {
    const { lat1, lon1, lat2, lon2, lat3, lon3, lat4, lon4 } = corners;
    if (layerName && filePath && lat1 && lon1 && lat2 && lon2 && lat3 && lon3 && lat4 && lon4) {
      const mapData = {
        layerName,
        filePath,
        corners
      };

      try{

        fetch(`http://localhost:5000/create-datastore`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                layerName: layerName,
                filePath: filePath,
                
            }),
        })
        var maps = [];
        if(localStorage.getItem('maps') === null){
            maps = [];
        }
        else{
      maps=JSON.parse(localStorage.getItem('maps')) || [];
        }
      maps.push(layerName);
      localStorage.setItem('maps', JSON.stringify(maps));
      localStorage.setItem(layerName, JSON.stringify(mapData));
      localStorage.setItem('activeMap', layerName);
      alert('Map saved successfully!');
      Navigate('/');
    }  
    catch (error)
    {
        console.error('Error:', error);
        alert('Error saving map. Please try again.');
        alert('Please provide all required information.');
    }
}

  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-center">Upload New Map</h2>
      <Form>
        <Form.Group controlId="layerName" className="mb-3">
          <Form.Label>Layer Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Layer Name"
            value={layerName}
            onChange={(e) => setLayerName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="filePath" className="mb-3">
          <Form.Label>File Path</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter File Path (use '\' instead of '/')"
            value={filePath}
            onChange={(e) => setFilePath(e.target.value)}
          />
        </Form.Group>
        <h4 className="mb-3">Enter Coordinates of the Four Corners</h4>
        <Row>
          <Col md={6}>
            <Form.Group controlId="lat1" className="mb-3">
              <Form.Label>Latitude 1</Form.Label>
              <Form.Control
                type="text"
                placeholder="Latitude 1"
                name="lat1"
                value={corners.lat1}
                onChange={handleCornerChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="lon1" className="mb-3">
              <Form.Label>Longitude 1</Form.Label>
              <Form.Control
                type="text"
                placeholder="Longitude 1"
                name="lon1"
                value={corners.lon1}
                onChange={handleCornerChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="lat2" className="mb-3">
              <Form.Label>Latitude 2</Form.Label>
              <Form.Control
                type="text"
                placeholder="Latitude 2"
                name="lat2"
                value={corners.lat2}
                onChange={handleCornerChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="lon2" className="mb-3">
              <Form.Label>Longitude 2</Form.Label>
              <Form.Control
                type="text"
                placeholder="Longitude 2"
                name="lon2"
                value={corners.lon2}
                onChange={handleCornerChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="lat3" className="mb-3">
              <Form.Label>Latitude 3</Form.Label>
              <Form.Control
                type="text"
                placeholder="Latitude 3"
                name="lat3"
                value={corners.lat3}
                onChange={handleCornerChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="lon3" className="mb-3">
              <Form.Label>Longitude 3</Form.Label>
              <Form.Control
                type="text"
                placeholder="Longitude 3"
                name="lon3"
                value={corners.lon3}
                onChange={handleCornerChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="lat4" className="mb-3">
              <Form.Label>Latitude 4</Form.Label>
              <Form.Control
                type="text"
                placeholder="Latitude 4"
                name="lat4"
                value={corners.lat4}
                onChange={handleCornerChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="lon4" className="mb-3">
              <Form.Label>Longitude 4</Form.Label>
              <Form.Control
                type="text"
                placeholder="Longitude 4"
                name="lon4"
                value={corners.lon4}
                onChange={handleCornerChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default UploadMap;
