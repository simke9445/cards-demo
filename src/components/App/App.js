import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { FirstPage, SecondPage, ThirdPage, FourthPage } from '../../views';

import './App.css'; 

export class App extends Component {
  static propTypes = {
    page: PropTypes.number.isRequired,
  }

  render() {
    return (
      <div className="App">
        {(() => {
          switch (this.props.page) {
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
    );
  }
}
