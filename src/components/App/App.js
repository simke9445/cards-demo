import React, { Component } from 'react';
import { FormattedMessage } from "react-intl";

import logo from './logo.svg';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            <FormattedMessage id="init.title"/>
          </h1>
        </header>
        <p className="App-intro">
          <FormattedMessage id="init.message" />
        </p>
      </div>
    );
  }
}
