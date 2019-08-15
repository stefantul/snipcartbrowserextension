import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Iframe = '<iframe src="https://master.dq349pyvytnjv.amplifyapp.com/pricing" width="400" height="600"/>'
const El = () => (
  <div dangerouslySetInnerHTML={{ __html: Iframe}}>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <El />
      </div>
    );
  }
}

export default App;
