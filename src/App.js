import React, { Component } from 'react';

import SmrtSelector from './smrtselector';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmrtSelector
          // displayStations={["EW_LINE_STN","NS_LINE_STN","NE_LINE_STN","CC_LINE_STN","DTL_LINE_STN","BP_LRT_LINE_STN","NS_SK_LRT_LINE_STN","NS_PG_LRT_LINE_STN"]}
          isDisplayFutureStation={false}
          displayTagSelector
        />
      </div>
    );
  }
}

export default App;
