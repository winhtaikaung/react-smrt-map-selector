import React, { Component } from 'react';

import './App.css';
import SGMrt from './SgMrt';

class App extends Component {
  render() {
    return (
      <div className="App">
      <SGMrt 
      selectedStations={["ew1", "ew2", "ew3", "ew4", "ew5", "ew6", "ew7", "ew8", "ew9", "ew10", "ew11", "ew12", "ew13", "ew14", "ew15", "ew16", "ew17", "ew18", "ew19", 
      "ew20", "ew21", "ew22", "ew23", "ew24", "ew25", "ew26", "ew27", "ew28", "ew29", "ew30"]} 
      onStationsCheckChange={(id,item)=>console.log(id,item)}
      />
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
