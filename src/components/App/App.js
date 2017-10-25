import React from 'react';
import { PropTypes } from 'prop-types';

import { FirstPage, SecondPage, ThirdPage, FourthPage } from '../../views';

import './App.css'; 

const App = ({ page }) => 
  <div className="App">
    {(() => {
      switch (page) {
        case 1:
          return <FirstPage></FirstPage>;
        case 2:
          return <SecondPage></SecondPage>;
        case 3:
          return <ThirdPage></ThirdPage>;
        case 4:
          return <FourthPage></FourthPage>;
        default:
          return null;
      }
    })()}
  </div>


App.propTypes = {
  page: PropTypes.number.isRequired,
}

export default App;