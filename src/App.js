import React, { Component } from 'react';

import './App.css';
import SGMrt from './SgMrt';

class App extends Component {
  render() {
    return (
      <div className="App">
      <SGMrt 
      selectedStations={["ew30", "je7", "je6", "js10", "cc19", "cc16", "cc17", "te8", "ne7", "ne8", "ne9", "ne10", "ns21"]} 
      onStationsCheckChange={()=>{}}
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
