import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import {ReactTyped} from 'react-typed';

const HomePage = () => {
  const navigate = useNavigate();
  const [maps, setMaps] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const storedMaps = JSON.parse(localStorage.getItem('maps')) || [];
    setMaps(storedMaps);
  }, []);

  const handleSelectMap = (map) => {
    console.log("map 2:",map);
    if(map != null)
    localStorage.setItem('activeMap', JSON.stringify(map));
    console.log("activeMap 2:",localStorage.getItem('activeMap'));
    navigate('/map');
  };
  const handletut = () => {
    navigate('/tutorial');
  };

  const handleStartTopography = () => {
    console.log("maps :",maps);
    setShowDropdown(!showDropdown);
    console.log("showDropdown :",showDropdown);
  };

  return (
    <Container className="text-center mt-5">
      <h1 className="mb-4">RoadWise</h1>
      <h3>
        <ReactTyped 
          strings={["Welcome to RoadWise! Get started by uploading a new map, starting topography, or viewing the tutorial. This app lets you find out the best route upon you map for a road. This also finds the total cost of the road for you. Thanks for using RoadWise!"]}
          typeSpeed={40}
        />
      </h3>
      <Row className="justify-content-center">
        <Col md={4}>
          <Button variant="primary" className="w-100 mb-3" onClick={() => navigate('/upload-map')}>
            Create New Project
          </Button>
        </Col>
        <Col md={4}>
          <div className="position-relative">
            <Button variant="secondary" className="w-100 mb-3" onClick={handleStartTopography}>
              Start Topography
            </Button>
            {showDropdown && (
              <DropdownButton
                id="dropdown-basic-button"
                title="Select Project"
                className="position-absolute w-100"
                onSelect={handleSelectMap}
              >
                {maps.map((map, index) => (
                  <Dropdown.Item key={index} onClick={() => handleSelectMap(map)}>
                    {map}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            )}
          </div>
        </Col>
        <Col md={4}>
          <Button variant="info" className="w-100 mb-3" onClick={() => handletut()}>
            Start Tutorial
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
