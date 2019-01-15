import React, { Component } from "react";

import SmrtSelector from "./SmrtSelector";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmrtSelector
          onStationsCheckChange={(item, selectedStn) => {
            
          }}
          config={{
            backgroundColor: "#FFF",
            textColor: "#000000",
            title: { textColor: "#000000" }
          }}
          // displayStations={["EW_LINE_STN","NS_LINE_STN","NE_LINE_STN","CC_LINE_STN","DTL_LINE_STN","BP_LRT_LINE_STN","NS_SK_LRT_LINE_STN","NS_PG_LRT_LINE_STN"]}
          isDisplayFutureStation={true}
          
        />
      </div>
    );
  }
}

export default App;
