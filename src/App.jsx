import React from 'react';
import MapComponent from './MapComponent';
import PointsGenerator from './PointsGenerator';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './HomePage';
import UploadMap from './UploadMap';
import './App.css'
import TutorialPage from './Tutorial';
const App = () => {
  
  
  const distance = 0.000089748; // 10 cm = 0.000089748 degrees use kiya hai
  
  return (
    <div>
      
      <Router>
        <Routes>
        
          <Route exact path='/' element = {<HomePage/>}></Route>
          <Route exact path='/upload-map' element = {<UploadMap />}></Route>

          <Route exact path='/map' element = {<MapComponent />}></Route>
          <Route exact path= '/tutorial' element = {<TutorialPage/>}></Route>
        </Routes>
      </Router>
      
      
      
    </div>
  );
};

export default App;