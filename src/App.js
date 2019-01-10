import React, { Component } from 'react';

import './App.css';
import SGMrtSelector from './SgMrtSelector';

class App extends Component {
  render() {
    return (
      <div className="App">
      <SGMrtSelector 
      selectedStations={[]} 
      onStationsCheckChange={(item,selectedStn)=>{
        console.log(item,selectedStn)
      }}
      displayStations={["EW_LINE_STN","NS_LINE_STN","NE_LINE_STN","CC_LINE_STN","DTL_LINE_STN","BP_LRT_LINE_STN","NS_SK_LRT_LINE_STN","NS_PG_LRT_LINE_STN"]}
      isDisplayFutureStation={false}
      
      />
        <header className="App-header">
          
          
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Singapore SMRT Map Selector
          </a>
        </header>
      </div>
    );
  }
}

export default App;
