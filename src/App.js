import React, { Component } from "react";

import SmrtSelector from "./SmrtSelector";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmrtSelector
          selectedStations={
            [
              {
                id: "cc17",
                cx: "658",
                cy: "402.8",
                r: "5",
                name: "Caldecott",
                strokeColor: "#fa9e0d"
              },
              {
                id: "cc19",
                cx: "548",
                cy: "471.5",
                r: "7.7",
                name: "BotanicGardens",
                strokeColor: "#000000"
              },
              {
                id: "dt10",
                cx: "658",
                cy: "486",
                r: "5",
                name: "Stevens",
                strokeColor: "#005ec4"
              },
              {
                id: "dt5",
                cx: "479",
                cy: "353",
                r: "5",
                name: "BeautyWorld",
                strokeColor: "#005ec4"
              },
              {
                id: "dt3",
                cx: "479",
                cy: "309",
                r: "5",
                name: "Hillview",
                strokeColor: "#005ec4"
              }
            ]
          }
          onStationsCheckChange={(item, selectedStn) => {
            console.log(item, selectedStn);
          }}
          config={{
            backgroundColor: "#FFF",
            textColor: "#000000",
            title: { textColor: "#000000" }
          }}
          // displayStations={["EW_LINE_STN","NS_LINE_STN","NE_LINE_STN","CC_LINE_STN","DTL_LINE_STN","BP_LRT_LINE_STN","NS_SK_LRT_LINE_STN","NS_PG_LRT_LINE_STN"]}
          isDisplayFutureStation={false}
          displayTagSelector={true}
        />
      </div>
    );
  }
}

export default App;
