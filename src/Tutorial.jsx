import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { FaDownload, FaMap, FaRoad } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TutorialPage = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Geoserver Road Construction Tutorial</h1>
      
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>
                <FaDownload className="me-2" /> Step 1: Download Geoserver
              </Card.Title>
              <Card.Text>
                <Link to="https://geoserver.org/">Download Geoserver</Link> from the official website and <Link to="https://www.e-education.psu.edu/geog585/node/686">configure</Link> it on your system.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>
                <FaMap className="me-2" /> Step 2: Publish Your TIF Maps
              </Card.Title>
              <Card.Text>
                Create a project in our portal and upload your TIF maps to portal.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>
                <FaRoad className="me-2" /> Step 3: Mark Road and Points
              </Card.Title>
              <Card.Text>
                Go to Start Project, Select your project and Mark road points, restricted points, and the main points between which the road is to be built.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="mt-4">
        <Card.Body>
          <Card.Title className="text-center">Final Output</Card.Title>
          <Card.Text className="text-center">
            Within seconds, get the best route for your road along with the estimated price.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TutorialPage;
