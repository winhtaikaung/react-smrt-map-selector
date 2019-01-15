
# react-smrt-selector
> Singapore SMRT map integration React component



## Installation
```
npm install --save react-smrt-selector
```


## Usage & Configuration
````javascript
import  SmrtSelector  from  './SmrtSelector';

<SmrtSelector
selectedStations={[]}
onStationsCheckChange={(item,selectedStn)=>{}}
config={{backgroundColor:'#FFF',textColor:'#000000',title:{textColor:"#000000"}}}
isDisplayFutureStation={true}
displayTagSelector={true}
/>
````

## Props & methods
| PropName | Description|PropType | value | required
|--|--|--|--|--|
|**width** | Width of the map component  |	string(default 100vw)	| number + em,px,%,	|false
|**height** | Height of the map component  |	string(default 100vh)	| number + em,px,%,	|false
|**title** | Title of the map component  |	string(default Singapore SMRT Map)	| 	|false
|**selectedStations** | Array of selected stations  |	array	| []	|false
|**onStationsCheckChange** | Function to receive stations check changes from map  |	function| |True
|**displayStations** | List of  stations that can display by passing as an array |	array| |True
|**displayFutureStation** | List of future stations that can display by passing as an array |	array| |true
|**displayTagSelector** | Tags selector view which shows selected stations below the stations map view|	array| |false
|**config** | configurations for map ```backgroundColor``` and ```textColor```|	object| |false

 ## list of available stations arrays
 ```javascript
 const  currentStation  = ["EW_LINE_STN","NS_LINE_STN","NE_LINE_STN","CC_LINE_STN","DTL_LINE_STN","BP_LRT_LINE_STN","NS_SK_LRT_LINE_STN","NS_PG_LRT_LINE_STN"]

const  newStations  = ["ECL_TEL_LINE_STN","JRL_LINE_STN","RTS_JB_LINE_STN","CC_LINE_NEW_STN","DTL_LINE_NEW_STN","NE_LINE_NEW_STN"]
 ```
 
## Demo App && demo-app-url

* [Demo](https://winhtaikaung.github.io/sg-mrt-stations-selector/)
* [SourceCode](https://winhtaikaung.github.io/sg-mrt-stations-selector/)


## License
 
The MIT License (MIT)

Copyright (c) 2019 Win Htaik Aung

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.