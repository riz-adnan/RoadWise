import os
import subprocess

def build():
    os.system("pip install -r requirements.txt")
    os.system("pipwin refresh")
    os.system("pipwin install gdal")
    os.system("pip install geoserver-rest")

def test():
    os.system("pytest")

def deploy():
    os.system("gcloud app deploy")

if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1:
        command = sys.argv[1]
        if command == "build":
            build()
        elif command == "test":
            test()
        elif command == "deploy":
            deploy()
        else:
            print("Unknown command")
    else:
        print("Please provide a command: build, test, deploy")
