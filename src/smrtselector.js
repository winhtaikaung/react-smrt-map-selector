import React from 'react';
import PropTypes from 'prop-types';
import { withState, compose } from 'recompose';
import {
  EW_LINE_STN,
  NS_LINE_STN,
  BP_LRT_LINE_STN,
  CC_LINE_STN,
  NE_LINE_STN,
  CC_LINE_NEW_STN,
  NE_LINE_NEW_STN,
  DTL_LINE_STN,
  DTL_LINE_NEW_STN,
  ECL_TEL_LINE_STN,
  JRL_LINE_STN,
  NS_PG_LRT_LINE_STN,
  NS_SK_LRT_LINE_STN,
  RTS_JB_LINE_STN,
  INTS_STNS,
  CRLEX_NEW_STN,
} from './stations';

const generateStationsCheckBoxes = (
  stationObj,
  key,
  selectedStations,
  setSelectedStations,
  removeSelectedStation,
) => {
  return (
    <g key={key} id={stationObj['g']['id']} stroke={stationObj['g']['-stroke']}>
      {stationObj['g']['circle'].map((stn, index) => {
        return (
          <CircleIcon
            key={index}
            stn={stn}
            selectedStations={selectedStations}
            setSelectedStations={setSelectedStations}
            removeSelectedStation={removeSelectedStation}
          />
        );
      })}
    </g>
  );
};
const CircleIcon = ({
  stn,
  selectedStations,
  setSelectedStations,
  removeSelectedStation,
}) => {
  return (
    <>
      <circle
        id={stn['id']}
        cx={stn['cx']}
        cy={stn['cy']}
        r={stn['r']}
        style={{ cursor: `pointer` }}
        onClick={() => {
          setSelectedStations(stn['id'], stn);
        }}
      />
      {selectedStations.filter(item => item['id'] === stn['id']).length > 0 && (
        <>
          <circle
            id={stn['id']}
            cx={stn['cx']}
            cy={stn['cy']}
            r={stn['r']}
            style={{ cursor: `pointer` }}
            fill="#0093ef"
            onClick={() => {
              removeSelectedStation(stn['id'], stn);
            }}
          />
          <g
            style={{ cursor: `pointer` }}
            transform={`rotate(230 ${parseFloat(stn['cx'])} ${parseFloat(
              stn['cy'],
            ) + 3})`}
            stroke="none"
            fill="#FFFFFF"
            onClick={() => {
              removeSelectedStation(stn['id'], stn);
            }}
          >
            {/* Drawing Tick icon here by overlapping two rectangle and rotating */}
            <rect
              x={stn['cx']}
              y={stn['cy']}
              rx="15"
              ry="15"
              height="2.5"
              width="5"
              onClick={() => {
                removeSelectedStation(stn['id'], stn);
              }}
            />
            <rect
              x={stn['cx']}
              y={stn['cy']}
              rx="15"
              ry="15"
              height="10"
              width="2.5"
              onClick={() => {
                removeSelectedStation(stn['id'], stn);
              }}
            />
          </g>
        </>
      )}
    </>
  );
};
const genImage = (
  { displayStations },
  selectedStations,
  setSelectedStations,
  removeSelectedStation,
  title,
  config,
) => {
  const stationDict = {
    EW_LINE_STN: EW_LINE_STN,
    NS_LINE_STN: NS_LINE_STN,
    NE_LINE_STN: NE_LINE_STN,
    NE_LINE_NEW_STN: NE_LINE_NEW_STN,
    CC_LINE_STN: CC_LINE_STN,
    CC_LINE_NEW_STN: CC_LINE_NEW_STN,
    CRLEX_NEW_STN:CRLEX_NEW_STN,
    DTL_LINE_STN: DTL_LINE_STN,
    DTL_LINE_NEW_STN: DTL_LINE_NEW_STN,
    ECL_TEL_LINE_STN: ECL_TEL_LINE_STN,
    JRL_LINE_STN: JRL_LINE_STN,
    BP_LRT_LINE_STN: BP_LRT_LINE_STN,
    NS_SK_LRT_LINE_STN: NS_SK_LRT_LINE_STN,
    NS_PG_LRT_LINE_STN: NS_PG_LRT_LINE_STN,
    RTS_JB_LINE_STN: RTS_JB_LINE_STN,
  };

  const isDisplay = stnName =>
    displayStations.filter(item => item === stnName).length > 0;

  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: `auto`, width: `1410px`, height: `auto` }}
      height="1007"
      width="1410"
      preserveAspectRatio="meet"
    >
      <title>Singapore MRT/LRT system map</title>
      <rect
        id="bg"
        height="1007"
        width="1410"
        y="0"
        x="0"
        fill={config['backgroundColor'] || '#ffffff'}
      />
      <g id="title">
        <text
          id="tttitle"
          x="7.1"
          y="19"
          fontSize="20"
          fontWeight="bold"
          fill={config['title']['textColor'] || '#ffffff'}
          fontFamily="Arial"
        >
          {title || 'Singapore MRT MAP'}
        </text>
        {/* <text id="ttupd" x="7.4" y="30" fontSize="8" fill="#001e0d" fontFamily="Arial">Updated on 9 May 2018</text> */}
      </g>

      <g id="legend">
        <rect
          id="lgbox"
          height="295"
          width="333"
          x="0"
          y="712"
          fill="#f2f2f2"
        />
        <g id="lgcolorbox">
          <rect height="11.5" width="313" x="10" y="722" fill="#009645" />
          <rect height="11.5" width="313" x="10" y="734.5" fill="#d42e12" />
          <rect height="11.5" width="313" x="10" y="757.5" fill="#9900aa" />
          <rect height="11.5" width="313" x="10" y="780.5" fill="#fa9e0d" />
          <rect height="11.5" width="313" x="10" y="803.5" fill="#005ec4" />
          <rect height="11.5" width="313" x="10" y="826.5" fill="#784008" />
          <rect height="11.5" width="313" x="10" y="894.5" fill="#0099aa" />
          <rect height="11.5" width="313" x="10" y="944.5" fill="#f266b5" />
          <rect height="11.5" width="313" x="10" y="967.5" fill="#999999" />
          <rect height="11.5" width="313" x="10" y="980" fill="#87cefa" />
        </g>
        <g id="lglabels" fontFamily="Arial" line-height="100%" fill="#ffffff">
          <text id="lglewl" x="20" y="732" fontSize="11" fontWeight="bold">
            East West Line (EWL)
          </text>
          <text id="lglnsl" x="20" y="744.5" fontSize="11" fontWeight="bold">
            North South Line (NSL)
          </text>
          <text id="lglnel" x="20" y="767.5" fontSize="11" fontWeight="bold">
            North East Line (NEL)
          </text>
          <text
            id="lglccl"
            x="20"
            y="790.5"
            fontSize="11"
            fontWeight="bold"
            fill="#000000"
          >
            Circle Line (CCL)
          </text>
          <text id="lgldtl" x="20" y="813.5" fontSize="11" fontWeight="bold">
            Downtown Line (DTL)
          </text>
          <text id="lgltel" x="20" y="836.5" fontSize="11" fontWeight="bold">
            Thomson-East Coast Line (TEL)
          </text>
          <text id="lgljrl" x="20" y="904.5" fontSize="11" fontWeight="bold">
            Jurong Region Line (JRL)
          </text>
          <text id="lglcrl" x="20" y="954.5" fontSize="11" fontWeight="bold">
            Cross Island Line (CRL)
          </text>
          <text id="lgllrt" x="20" y="977.5" fontSize="11" fontWeight="bold">
            Light Rapid Transit (LRT) Lines
          </text>
          <text
            id="lglrtsl"
            x="20"
            y="990"
            fontSize="11"
            fontWeight="bold"
            fill="#000000"
          >
            Johor Bahru-Singapore RTS-Link
          </text>
        </g>
        <g id="lgstrip">
          <rect
            id="lgsnsl"
            height="11"
            width="3"
            x="14"
            y="745.5"
            fill="#d42e12"
          />
          <rect
            id="lgsnel"
            height="11"
            width="3"
            x="14"
            y="768.5"
            fill="#9900aa"
          />
          <rect
            id="lgsccl"
            height="11"
            width="3"
            x="14"
            y="791.5"
            fill="#fa9e0d"
          />
          <rect
            id="lgsdtl"
            height="11"
            width="3"
            x="14"
            y="814.5"
            fill="#005ec4"
          />
          <rect
            id="lgstel"
            height="56"
            width="3"
            x="14"
            y="837.5"
            fill="#784008"
          />
          <rect
            id="lgsjrl"
            height="38"
            width="3"
            x="14"
            y="905.5"
            fill="#0099aa"
          />
          <rect
            id="lgscrl"
            height="11"
            width="3"
            x="14"
            y="955.5"
            fill="#f266b5"
          />
          <rect
            id="lgsrtsl"
            height="11"
            width="3"
            x="14"
            y="991"
            fill="#87cefa"
          />
        </g>

        <g
          id="lgtexts"
          fill="#000000"
          fontFamily="Arial"
          line-height="100%"
          fontSize="9"
        >
          <text id="lgtnsle" x="20" y="754.5">
            <tspan fontWeight="bold">Canberra Station</tspan> (2019){' '}
          </text>
          <text id="lgtnele" x="20" y="777.5">
            <tspan fontWeight="bold">NELe</tspan>: Punggol - Punggol Coast
            (2023){' '}
          </text>
          <text id="lgtccl6" x="20" y="800.5">
            <tspan fontWeight="bold">CCL6</tspan>: Marina Bay - Harbourfront
            (2025){' '}
          </text>
          <text id="lgtdtl3e" x="20" y="823.5">
            <tspan fontWeight="bold">DTL3e</tspan>: Expo - Sungei Bedok (2024){' '}
          </text>
          <text id="lgttel1" x="20" y="846.5">
            <tspan fontWeight="bold">TEL1</tspan>: Woodlands North - Woodlands
            South (2019){' '}
          </text>
          <text id="lgttel2" x="20" y="855.5">
            <tspan fontWeight="bold">TEL2</tspan>: Woodlands South - Caldecott
            (2020){' '}
          </text>
          <text id="lgttel3" x="20" y="864.5">
            <tspan fontWeight="bold">TEL3</tspan>: Caldecott - Gardens by the
            Bay (2021){' '}
          </text>
          <text id="lgttel4" x="20" y="873.5">
            <tspan fontWeight="bold">TEL4</tspan>: Gardens by the Bay - Bayshore
            (2023){' '}
          </text>
          <text id="lgttel5" x="20" y="882.5">
            <tspan fontWeight="bold">TEL5</tspan>: Bayshore - Sungei Bedok
            (2024){' '}
          </text>
          <text id="lgttele" x="20" y="891.5">
            <tspan fontWeight="bold">TELe</tspan>: Sungei Bedok - ? (Under
            studies){' '}
          </text>
          <text id="lgtjrl1" x="20" y="914.5">
            <tspan fontWeight="bold">JRL1</tspan>: Choa Chu Kang - Tawas, Boon
            Lay (2026){' '}
          </text>
          <text id="lgtjrl2" x="20" y="923.5">
            <tspan fontWeight="bold">JRL2</tspan>: Tengah - Pandan Reservoir
            (2027){' '}
          </text>
          <text id="lgtjrl3" x="20" y="932.5">
            <tspan fontWeight="bold">JRL3</tspan>: Tawas - Peng Kang Hill, Boon
            Lay - Jurong Pier (2028){' '}
          </text>
          <text id="lgtwce" x="20" y="941.5">
            <tspan fontWeight="bold">WCE</tspan>: Pandan Gardens - ? (Under
            studies){' '}
          </text>
          <text id="lgtcrl" x="20" y="964.5">
            <tspan fontWeight="bold">CRL</tspan>: ? - ? (2030){' '}
          </text>
          <text id="lgtrtsl" x="20" y="999">
            <tspan fontWeight="bold">RTS-Link</tspan>: Bukit Chagar (JB) -
            Woodlands North (2024){' '}
          </text>
        </g>
      </g>

      <g id="lines" fill="none" strokeWidth="4">
        {isDisplay('EW_LINE_STN') && (
          <g id="ewl" stroke="#009645">
            <path d="m1227 658v16q0 20 20 20h84" />
            <path d="m1284 523-25 25 q-14.14 14.14-14.14 34.14 v57 q0 20 -20 20 h-239 q-20 0 -34.14 14.14 l-177 177 q-14.14 14.14-34.14 14.14 h-15 q-20 0 -34.14 -14.14 l-21-21 q-14.14-14.14-14.14-34.14 q0-20-14.14-34.14 l-232.4-232.4 q-14.14-14.14-34.14-14.14 h-280.6 q-20 0-20 20 v146" />
          </g>
        )}
        {isDisplay('NS_LINE_STN') && (
          <g xmlns="http://www.w3.org/2000/svg" id="nsl" stroke="#d42e12">
            <path d="m286 514v-407q0-20 20-20h391.5 q20 0 34.4 14.4 l40 40 q14.4 14.14 14.14 34.14v255 q0 20-14.14 34.14 l-104 104 q-14.14 14.14 0 28.28 l162 162 q14.14 14.14 0 28.28 l-29.7 29.7 q-14.14 14.14 -14.14 20 v125" />
          </g>
        )}
        <g id="nel" stroke="#9900aa">
          {isDisplay('NE_LINE_STN') && (
            <path d="m582 866 l173.2-173.2 q14.14-14.14 14.14-28.28 v-28 q0 -20 14.14 -34.34 l390 -390" />
          )}

          {isDisplay('NE_LINE_NEW_STN') && (
            <path id="nelex" d="m1254 132.46-92 91.3" strokeDasharray="8, 8" />
          )}
        </g>
        <g id="ccl" stroke="#fa9e0d">
          {isDisplay('CC_LINE_STN') && (
            <path d="m754 689q20 0 34.14 14.14 l124 124 q14.14 14.14 28.28 0" />
          )}
          {isDisplay('CC_LINE_STN') && (
            <path d="m582 867 A 265 265 0 1 1 793 914" />
          )}

          {isDisplay('CC_LINE_NEW_STN') && (
            <path
              id="cclex"
              d="m582 867 A 265 265 0 0 0 793 914"
              strokeWidth="4.5"
              strokeDasharray="10, 10"
            />
          )}
        </g>
        {isDisplay('DTL_LINE_STN') && (
          <g id="dtl" stroke="#005ec4">
            <path d="m479 225 v157 q0 20 14.14 34.14 l48.5 48.5 q14.14 14.14 34.14 14.14 h56 q20 0 34.14 14.14 l284 284 q13 14.14 0 30 c-16.1 22.6-47.3 54.9-93.9 80 q-20.34 9-41.1-10 l-121-121" />
            <path d="m698 760q-14.14 -14.14 0 -28.28 l10-10 q14.14-14.14 28.28-14.14 h61 q20 0 34.14 -14.14 l79-79 q14.14-14.14 34.14-14.14 h321.5 q20 0 20 20 v69" />
          </g>
        )}
        <g
          xmlns="http://www.w3.org/2000/svg"
          id="dtlex"
          stroke="#005ec4"
          strokeDasharray="8, 8"
        >
          <path d="m1286 695v70" />
          <path d="m479 225 v-13 q0-14.14-14.14-34.14 l-40-40 q-14.14-14.14-34.14-14.14 h-105" />
        </g>
        
        {isDisplay('DTL_LINE_NEW_STN') && (
          <><g id="dtlex" stroke="#005ec4" strokeDasharray="8, 8">
            <path d="m1286 695v90" />
          </g>
           <g xmlns="http://www.w3.org/2000/svg" id="tel" stroke="#784008">
           <path d="m496 34 l97.8 97.8"/>
          </g></>
        )}
       
        {isDisplay('ECL_TEL_LINE_STN') && (
          <g id="telex" stroke="#784008" strokeDasharray="8, 8">
            <path d="m496 34 l147.8 147.8 q14.14 14.14 14.14 34.14 v562 q0 20 14.14 34.14 l87 87 q14.14 14.14 34.14 14.14 h134 q20 0 34.14 -14.14 l99 -99 q14.14 -14.14 28.28 -14.14 h283 q20 0 20 -20 v-52 q0 -20 -20 -20 h-35" />
          </g>
        )}
        {isDisplay('JRL_LINE_STN') && (
          <g id="jrlex" stroke="#0099aa" strokeDasharray="8, 8">
            <path d="m292 220 l-123.5 123.5 q-14.14 14.14 -14.14 34.14 v142 q0 20 14.14 34.14 l62 62" />
            <path d="m151 480 h-56 q-20 0 -20 -20 v-140" />
            <path d="m179 332 q-14.14 14.14 -14.14 34.14 v6 q0 20 14.14 34.14 l305 305" />
          </g>
        )}
        {isDisplay('CRLEX_NEW_STN') && (
          <g id="crlex" stroke="#78BE20" strokeDasharray="8, 8">
          <path d="m77 544 l59.5 59.5 q14.14 14.14 34.14 14.14 h192.86 q21.79 0 25.5 -22.13 A356 356 0 0 1 1059.45 497 q10.31 20.92 46.47 20.92 h153 q20 0 34.14 14.14 l83.8 83.8 q14.14 14.14 14.14 34.14 v78" />
          <path d="m1177 209.5 l67 67 q14.14 14.14 14.14 34.14 v167.4 q0 20 14.14 34.14 l10 10" />
        </g>
        )}
       

        {isDisplay('CRL_LINE_STN') && (
          <g id="crlex" stroke="#f266b5" strokeDasharray="8, 8">
            <path d="m77 597 l5.5 5.5 q14.14 14.14 20 14.14 h257.3s12.1 0.149 17.6-5.27c5.54-5.42 8.9-21.8 8.9-21.8" />
            <path d="m385 595 A 355 355 0 0 1 1050 494" />
            <path d="m1391 698 v-48 q0 -20 -14.14 -34.14 l-83.8-83.8 q-14.14-14.14-34.14-14.14 h-161 s-14.8-0.0184-30.2-0.0486 c-7.76-0-17.1-21-17.1-21" />
            <path d="m1177 209.5 l67 67 q14.14 14.14 14.14 34.14 v167.4 q0 20 14.14 34.14" />
          </g>
        )}

        <g id="lrt" stroke="#999999">
          {isDisplay('BP_LRT_LINE_STN') && (
            <path d="m284.4 225.6h207 q10 0 17.07-7.07 l19.2-19.2 q7.07-7.07 17.07-7.07 h10 q10 0 10 10 v46.6 q0 10-10 10 h-10 q-10 0-17.07-7.07 l-19.2-19.2 q-7.07-7.07-17.07-7.07" />
          )}
          {isDisplay('BP_LRT_LINE_STN') && <path d="m445.5 224.9v-35.2" />}
          {isDisplay('NS_SK_LRT_LINE_STN') && (
            <path d="m1081 306 l-7.76-7.76 q-7.07-7.07-7.07-17.07 v-20 q0-10-7.07-17.07 l-19-19 q-7.07-7.07-14.14 0 l-26 26 q-7.07 7.07 0 14.14 l 19 19 q 7.07 7.07 17.07 7.07 h 20 q 10 0 17.07 7.07" />
          )}
          {isDisplay('NS_SK_LRT_LINE_STN') && (
            <path d="m1081 306 l 7.76 7.76 q 7.07 7.07 7.07 17.07 v 20 q0 10 7.07 17.07 l 19 19 q 7.07 7.07 14.14 0 l 26-26 q 7.07-7.07 0-14.14 l-19-19 q-7.07-7.07-17.07-7.07 h-20 q-10 0-17.07-7.07" />
          )}
          {isDisplay('NS_PG_LRT_LINE_STN') && (
            <path d="m1176 209.5 l-7.76-7.76 q-7.07-7.07-7.07-17.07 v-20 q0-10-7.07-17.07 l-19-19 q-7.07-7.07-14.14 0 l-26 26 q-7.07 7.07 0 14.14 l 19 19 q 7.07 7.07 17.07 7.07 h 20 q 10 0 17.07 7.07" />
          )}
          {isDisplay('NS_PG_LRT_LINE_STN') && (
            <path d="m1177 209.5 l 7.76 7.76 q 7.07 7.07 7.07 17.07 v 20 q0 10 7.07 17.07 l 19 19 q 7.07 7.07 14.14 0 l 26-26 q 7.07-7.07 0-14.14 l-19-19 q-7.07-7.07-17.07-7.07 h-20 q-10 0-17.07-7.07" />
          )}
        </g>
        {isDisplay('RTS_JB_LINE_STN') && (
          <g id="rtslink" stroke="#87cefa" strokeDasharray="8, 8">
            <path d="m496 34h-60" />
          </g>
        )}
      </g>
      <g id="stns_icons" fill="#FFFFFF" strokeWidth="2">
        {displayStations.map((line, index) => {
          return generateStationsCheckBoxes(
            stationDict[line],
            index,
            selectedStations,
            setSelectedStations,
            removeSelectedStation,
          );
        })}
        {generateStationsCheckBoxes(
          INTS_STNS,
          0,
          selectedStations,
          setSelectedStations,
          removeSelectedStation,
        )}
      </g>

      <g id="stns_labels" fontFamily="Arial" line-height="100%">
        {isDisplay('EW_LINE_STN') && (
          <g id="lbewl" fill={config['textColor'] || '#000000'}>
            <text id="lbcg1" x="1255" y="707" fontSize="12">
              Expo
            </text>
            <text id="lbcg2a" x="1310" y="707" fontSize="12">
              Changi
            </text>
            <text id="lbcg2b" x="1312" y="719" fontSize="12">
              Airport
            </text>
            <text id="lbew1" x="1289" y="522" fontSize="12">
              Pasir Ris
            </text>
            <text id="lbew2" x="1250" y="594" fontSize="12">
              Tampines
            </text>
            <text id="lbew3" x="1209" y="637" fontSize="12">
              Simei
            </text>
            <text id="lbew5" x="1171" y="672" fontSize="12">
              Bedok
            </text>
            <text id="lbew6" x="1092" y="653" fontSize="12">
              Kembangan
            </text>
            <text id="lbew7" x="1050" y="672" fontSize="12">
              Eunos
            </text>
            <text id="lbew9" x="945" y="653" fontSize="12">
              Aljunied
            </text>
            <text id="lbew10" x="906" y="673" fontSize="12">
              Kallang
            </text>
            <text id="lbew11" x="932" y="707" fontSize="12">
              Lavender
            </text>
            <text id="lbew15a" x="650" y="864" fontSize="12">
              Tanjong
            </text>
            <text id="lbew15b" x="660" y="876" fontSize="12">
              Pagar
            </text>
            <text id="lbew17a" x="595" y="753" fontSize="12">
              Tiong
            </text>
            <text id="lbew17b" x="593" y="765" fontSize="12">
              Bahru
            </text>
            <text id="lbew18" x="554" y="721" fontSize="12">
              Redhill
            </text>
            <text id="lbew19" x="561" y="672.5" fontSize="12">
              Queenstown
            </text>
            <text id="lbew20" x="525" y="636" fontSize="12">
              Commonwealth
            </text>
            <text id="lbew22" x="418" y="581" fontSize="12">
              Dover
            </text>
            <text id="lbew23" x="411" y="526" fontSize="12">
              Clementi
            </text>
            <text id="lbew25a" x="224" y="527" fontSize="12">
              Chinese
            </text>
            <text id="lbew25b" x="226" y="539" fontSize="12">
              Garden
            </text>
            <text id="lbew26" x="178" y="508" fontSize="12">
              Lakeside
            </text>
            <text id="lbew27" x="100" y="508" fontSize="12">
              Boon Lay
            </text>
            <text id="lbew28" x="25" y="544" fontSize="12">
              Pioneer
            </text>
            <text id="lbew29a" x="47" y="568" fontSize="12">
              Joo{' '}
            </text>
            <text id="lbew29b" x="39" y="580" fontSize="12">
              Koon{' '}
            </text>
            <text id="lbew30" x="15" y="600" fontSize="12">
              Gul Circle
            </text>
            <text id="lbew31a" x="41" y="620" fontSize="12">
              Tuas
            </text>
            <text id="lbew31b" x="19" y="632" fontSize="12">
              Crescent
            </text>
            <text id="lbew32a" x="10" y="652" fontSize="12">
              Tuas West
            </text>
            <text id="lbew32a" x="39" y="664" fontSize="12">
              Road
            </text>
            <text id="lbew33" x="15" y="684" fontSize="12">
              Tuas Link
            </text>
          </g>
        )}
        {isDisplay('NS_LINE_STN') && (
          <g id="lbnsl" fill={config['textColor'] || '#000000'}>
            <text id="lbns2a" x="292" y="411" fontSize="12">
              <tspan id="trsvg94">Bukit</tspan>
            </text>

            <text id="lbns2b" x="292" y="423" fontSize="12">
              <tspan id="trsvg95">Batok</tspan>
            </text>

            <text id="lbns3a" x="292" y="350" fontSize="12">
              <tspan id="trsvg96">Bukit</tspan>
            </text>

            <text id="lbns3b" x="292" y="362" fontSize="12">
              <tspan id="trsvg97">Gombak</tspan>
            </text>

            <text id="lbns3x" x="292" y="295" fill="#aaaaaa" fontSize="12">
              <tspan id="trsvg98">Brickland</tspan>
            </text>

            <text id="lbns6" x="292" y="175" fontSize="12">
              <tspan id="trsvg99">Yew Tee</tspan>
            </text>

            <text id="lbns5" x="204" y="125" fill="#aaaaaa" fontSize="12">
              <tspan id="trsvg100">Sungei Kadut</tspan>
            </text>

            <text id="lbns7" x="335.5" y="80" fontSize="12">
              <tspan id="trsvg101">Kranji</tspan>
            </text>

            <text id="lbns8" x="410" y="80" fontSize="12">
              <tspan id="trsvg102">Marsiling</tspan>
            </text>

            <text id="lbns10" x="586" y="80" fontSize="12">
              <tspan id="trsvg104">Admiralty</tspan>
            </text>

            <text id="lbns11" x="650" y="80" fontSize="12">
              <tspan id="trsvg105">Sembawang</tspan>
            </text>

            <text id="lbns12" x="742" y="108" fontSize="12">
              <tspan id="trsvg106">Canberra</tspan>
            </text>

            <text id="lbns13" x="730" y="151" fontSize="12">
              <tspan id="trsvg107">Yishun</tspan>
            </text>

            <text id="lbns14" x="746" y="205" fontSize="12">
              <tspan id="trsvg108">Khatib</tspan>
            </text>

            <text id="lbns15a" x="763" y="246" fontSize="12">
              <tspan id="trsvg109">Yio</tspan>
            </text>

            <text id="lbns15b" x="727" y="258" fontSize="12">
              <tspan id="trsvg110">Chu Kang</tspan>
            </text>

            <text id="lbns16a" x="758" y="317" fontSize="12">
              <tspan id="trsvg111">Ang</tspan>
            </text>

            <text id="lbns16b" x="742" y="329" fontSize="12">
              <tspan id="trsvg112">Mo Kio</tspan>
            </text>

            <text id="lbns18" x="734" y="432" fontSize="12">
              <tspan id="trsvg113">Braddell</tspan>
            </text>

            <text id="lbns19a" x="779" y="473" fontSize="12">
              <tspan id="trsvg114">Toa</tspan>
            </text>

            <text id="lbns19b" x="779" y="485" fontSize="12">
              <tspan id="trsvg115">Payoh</tspan>
            </text>

            <text id="lbns20" x="748" y="504" fontSize="12">
              <tspan id="trsvg116">Novena</tspan>
            </text>

            <text id="lbns22" x="609" y="590" fontSize="12">
              <tspan id="trsvg117">Orchard</tspan>
            </text>

            <text id="lbns23" x="709" y="634" fontSize="12">
              <tspan id="trsvg118">Somerset</tspan>
            </text>

            <text id="lbns28a" x="745" y="972" fontSize="12">
              <tspan id="trsvg119">Marina</tspan>
            </text>

            <text id="lbns28b" x="724" y="984" fontSize="12">
              <tspan id="trsvg120">South Pier</tspan>
            </text>
          </g>
        )}
        {isDisplay('NE_LINE_STN') && (
          <g id="lbnel" fill={config['textColor'] || '#000000'}>
            <text id="lbne5a" x="730" y="729" fontSize="12">
              Clarke
            </text>
            <text id="lbne5b" x="730" y="741" fontSize="12">
              Quay
            </text>
            <text id="lbne8" x="813" y="588" fontSize="12">
              Farrer Park
            </text>
            <text id="lbne9" x="840" y="559" fontSize="12">
              Boon Keng
            </text>
            <text id="lbne10" x="867" y="532" fontSize="12">
              Potong Pasir
            </text>
            <text id="lbne11" x="893" y="509" fontSize="12">
              Woodleigh
            </text>
            <text id="lbne13" x="921" y="426" fontSize="12">
              Kovan
            </text>
            <text id="lbne14" x="992" y="408" fontSize="12">
              Hougang
            </text>
            <text id="lbne15" x="962" y="365" fontSize="12">
              Buangkok
            </text>
          </g>
        )}
        {isDisplay('NE_LINE_NEW_STN') && (
          <g id="lbnelex" fill={config['textColor'] || '#000000'}>
            <text id="lbne18" x="1264" y="132" fontSize="12" fill="#aaaaaa">
              Punggol Coast
            </text>
          </g>
        )}
        {isDisplay('CC_LINE_STN') && (
          <g id="lbccl" fill={config['textColor'] || '#000000'}>
            <text id="lbcc2a" x="830" y="727" fontSize="12">
              Bras
            </text>
            <text id="lbcc2b" x="830" y="739" fontSize="12">
              Basah
            </text>
            <text id="lbcc3" x="885" y="793" fontSize="12">
              Esplanade
            </text>
            <text id="lbcc5a" x="976" y="790" fontSize="12">
              Nicoll
            </text>
            <text id="lbcc5b" x="976" y="802" fontSize="12">
              Highway
            </text>
            <text id="lbcc6" x="990" y="760" fontSize="12">
              Stadium
            </text>
            <text id="lbcc7" x="1001" y="725" fontSize="12">
              Mountbatten
            </text>
            <text id="lbcc8" x="1008" y="691" fontSize="12">
              Dakota
            </text>
            <text id="lbcc10" x="1001" y="592" fontSize="12">
              MacPherson
            </text>
            <text id="lbcc11" x="989" y="556" fontSize="12">
              Tai Seng
            </text>
            <text id="lbcc12" x="968" y="514" fontSize="12">
              Bartley
            </text>
            <text id="lbcc14a" x="879" y="411" fontSize="12">
              Lorong
            </text>
            <text id="lbcc14b" x="879" y="424" fontSize="12">
              Chuan
            </text>
            <text id="lbcc16" x="690" y="383" fontSize="12">
              Marymount
            </text>
            <text id="lbcc17" x="605" y="399" fontSize="12">
              Caldecott
            </text>
            <text id="lbcc20" x="522" y="520" fontSize="12">
              Farrer Road
            </text>
            <text id="lbcc21a" x="504" y="556" fontSize="12">
              Holland
            </text>
            <text id="lbcc21b" x="504" y="568" fontSize="12">
              Village
            </text>
            <text id="lbcc23a" x="444" y="635" fontSize="12">
              one-
            </text>
            <text id="lbcc23b" x="441" y="645" fontSize="12">
              north
            </text>
            <text id="lbcc24a" x="483" y="674" fontSize="12">
              Kent
            </text>
            <text id="lbcc24b" x="483" y="686" fontSize="12">
              Ridge
            </text>
            <text id="lbcc25a" x="490" y="713" fontSize="12">
              Haw Par
            </text>
            <text id="lbcc25b" x="490" y="725" fontSize="12">
              Villa
            </text>
            <text id="lbcc26a" x="458" y="758" fontSize="12">
              Pasir
            </text>
            <text id="lbcc26b" x="442" y="770" fontSize="12">
              Panjang
            </text>
            <text id="lbcc27a" x="458" y="798" fontSize="12">
              Labrador
            </text>
            <text id="lbcc27b" x="483" y="810" fontSize="12">
              Park
            </text>
            <text id="lbcc28a" x="504" y="834" fontSize="12">
              Telok
            </text>
            <text id="lbcc28b" x="488" y="846" fontSize="12">
              Blangah
            </text>
          </g>
        )}
        {isDisplay('CC_LINE_NEW_STN') && (
          <g id="lbcclex" fill={config['textColor'] || '#aaaaaa'}>
            <text id="lbcc18a" x="571" y="414" fontSize="12">
              Bukit
            </text>
            <text id="lbcc18b" x="566" y="426" fontSize="12">
              Brown
            </text>
            <text id="lbcc30" x="599" y="911" fontSize="12">
              Keppel
            </text>
            <text id="lbcc31" x="636" y="928" fontSize="12">
              Cantonment
            </text>
            <text id="lbcc32a" x="717" y="934" fontSize="12">
              Prince
            </text>
            <text id="lbcc32b" x="713" y="946" fontSize="12">
              Edward
            </text>
          </g>
        )}
        {/* CRLEX labels */}
        {isDisplay('CRLEX_NEW_STN') && ( <g
          xmlns="http://www.w3.org/2000/svg"
          id="lbcrlex"
          font-size="12"
          fill="#aaaaaa"
        >
          <text id="lbcr2a" x="1344" y="650">
            <tspan id="trsvg281">Aviation</tspan>
          </text>
          <text id="lbcr2b" x="1360" y="661">
            <tspan id="trsvg282">Park</tspan>
          </text>
          <text id="lbcr3a" x="1361" y="594">
            <tspan id="trsvg283">Loyang</tspan>
          </text>
          <text id="lbcr4a" x="1321" y="554">
            <tspan id="trsvg284">Pasir Ris East</tspan>
          </text>
          <text id="lbcr6a" x="1183" y="501">
            <tspan id="trsvg285">Tampines</tspan>
          </text>
          <text id="lbcr6b" x="1194" y="512">
            <tspan id="trsvg286">North</tspan>
          </text>
          <text id="lbcr7a" x="1055" y="478">
            <tspan id="trsvg287">Defu</tspan>
          </text>
          <text id="lbcr9a" x="924" y="334">
            <tspan id="trsvg288">Serangoon</tspan>
          </text>
          <text id="lbcr9b" x="924" y="345">
            <tspan id="trsvg289">North</tspan>
          </text>
          <text id="lbcr10" x="856" y="313">
            <tspan id="trsvg290">Tavistock</tspan>
          </text>
          <text id="lbcr12" x="696" y="293">
            <tspan id="trsvg291">Teck Ghee</tspan>
          </text>
          <text id="lbcpe1" x="1264" y="424">
            <tspan id="trsvg375">Elias</tspan>
          </text>
        </g>)}
        {isDisplay('DTL_LINE_STN') && (
          <g id="lbdtl" fill={config['textColor'] || '#000000'}>
            <text id="lbdt2" x="430.5" y="272" fontSize="12">
              Cashew
            </text>
            <text id="lbdt3" x="433" y="312" fontSize="12">
              Hillview
            </text>
            <text id="lbdt5a" x="436" y="352" fontSize="12">
              Beauty
            </text>
            <text id="lbdt5b" x="442" y="364" fontSize="12">
              World
            </text>
            <text id="lbdt6a" x="415" y="396" fontSize="12">
              King Albert
            </text>
            <text id="lbdt6b" x="450" y="408" fontSize="12">
              Park
            </text>
            <text id="lbdt7a" x="503" y="407" fontSize="12">
              Sixth
            </text>
            <text id="lbdt7b" x="503" y="419" fontSize="12">
              Avenue
            </text>
            <text id="lbdt8a" x="529" y="434" fontSize="12">
              Tan
            </text>
            <text id="lbdt8b" x="529" y="446" fontSize="12">
              Kah Kee
            </text>
            <text id="lbdt10" x="664" y="484" fontSize="12">
              Stevens
            </text>
            <text id="lbdt13" x="825" y="647" fontSize="12">
              Rochor
            </text>
            <text id="lbdt17" x="809" y="865" fontSize="12">
              Downtown
            </text>
            <text id="lbdt18a" x="747" y="789" fontSize="12">
              Telok
            </text>
            <text id="lbdt18b" x="747" y="801" fontSize="12">
              Ayer
            </text>
            <text id="lbdt20a" x="685" y="708" fontSize="12">
              Fort
            </text>
            <text id="lbdt20b" x="662" y="720" fontSize="12">
              Canning
            </text>
            <text id="lbdt21" x="780" y="686" fontSize="12">
              Bencoolen
            </text>
            <text id="lbdt22a" x="868" y="672" fontSize="12">
              Jalan
            </text>
            <text id="lbdt22b" x="868" y="684" fontSize="12">
              Besar
            </text>
            <text id="lbdt23" x="829" y="625" fontSize="12">
              Bendeemer
            </text>
            <text id="lbdt24a" x="906" y="582" fontSize="12">
              Geylang
            </text>
            <text id="lbdt24b" x="912" y="594" fontSize="12">
              Bahru
            </text>
            <text id="lbdt25" x="951.5" y="615" fontSize="12">
              Mattar
            </text>
            <text id="lbdt27" x="1036" y="615" fontSize="12">
              Ubi
            </text>
            <text id="lbdt28a" x="1077" y="615" fontSize="12">
              Kaki
            </text>
            <text id="lbdt28b" x="1075" y="627" fontSize="12">
              Bukit
            </text>
            <text id="lbdt29a" x="1110" y="582" fontSize="12">
              Bedok
            </text>
            <text id="lbdt29b" x="1112" y="594" fontSize="12">
              North
            </text>
            <text id="lbdt30a" x="1157" y="615" fontSize="12">
              Bedok
            </text>
            <text id="lbdt30b" x="1149" y="627" fontSize="12">
              Reservoir
            </text>
            <text id="lbdt31a" x="1184" y="582" fontSize="12">
              Tampines
            </text>
            <text id="lbdt31b" x="1196" y="594" fontSize="12">
              West
            </text>
            <text id="lbdt33a" x="1292" y="629" fontSize="12">
              Tampines
            </text>
            <text id="lbdt33b" x="1292" y="641" fontSize="12">
              East
            </text>
            <text id="lbdt34a" x="1292" y="663" fontSize="12">
              Upper
            </text>
            <text id="lbdt34b" x="1292" y="675" fontSize="12">
              Changi
            </text>
          </g>
        )}
        {isDisplay('DTL_LINE_NEW_STN') && (
          <g id="lbdtlex" fill={config['textColor'] || '#aaaaaa'}>
            <text id="lbdt36" x="1292" y="741" fontSize="12">
              Xilin
            </text>
            <text id="lbdt37a" x="1269" y="802" fontSize="12">
              Sungei
            </text>
            <text id="lbdt37b" x="1271" y="814" fontSize="12">
              Bedok
            </text>
          </g>
        )}
        {isDisplay('ECL_TEL_LINE_STN') && (
          <g id="lbtelex" fill={config['textColor'] || '#aaaaaa'}>
            <text id="lbte1a" x="506" y="29" fontSize="12">
              Woodlands
            </text>
            <text id="lbte1b" x="506" y="41" fontSize="12">
              North
            </text>
            <text id="lbte3a" x="586" y="109" fontSize="12">
              Woodlands
            </text>
            <text id="lbte3b" x="586" y="121" fontSize="12">
              South
            </text>
            <text id="lbte4" x="632" y="163" fontSize="12">
              Springleaf
            </text>
            <text id="lbte5" x="665" y="212" fontSize="12">
              Lentor
            </text>
            <text id="lbte6" x="665" y="250" fontSize="12">
              Mayflower
            </text>
            <text id="lbte7a" x="622" y="292" fontSize="12">
              Bright
            </text>
            <text id="lbte7b" x="637" y="304" fontSize="12">
              Hill
            </text>
            <text id="lbte8a" x="621" y="354" fontSize="12">
              Upper
            </text>
            <text id="lbte8b" x="604" y="366" fontSize="12">
              Thomson
            </text>
            <text id="lbte10a" x="665" y="442" fontSize="12">
              Mount
            </text>
            <text id="lbte10b" x="665" y="454" fontSize="12">
              Pleasant
            </text>
            <text id="lbte12" x="617" y="520" fontSize="12">
              Napier
            </text>
            <text id="lbte13a" x="610" y="546" fontSize="12">
              Orchard
            </text>
            <text id="lbte13b" x="599" y="558" fontSize="12">
              Boulevard
            </text>
            <text id="lbte15a" x="622" y="647" fontSize="12">
              Great
            </text>
            <text id="lbte15b" x="621" y="659" fontSize="12">
              World
            </text>
            <text id="lbte16" x="603" y="697" fontSize="12">
              Havelock
            </text>
            <text id="lbte18" x="694" y="827" fontSize="12">
              Maxwell
            </text>
            <text id="lbte19a" x="694" y="890" fontSize="12">
              Shenton
            </text>
            <text id="lbte19b" x="716" y="902" fontSize="12">
              Way
            </text>
            <text id="lbte21a" x="828" y="928" fontSize="12">
              Marina
            </text>
            <text id="lbte21b" x="830" y="940" fontSize="12">
              South
            </text>
            <text id="lbte22a" x="889" y="928" fontSize="12">
              Gardens
            </text>
            <text id="lbte22b" x="883" y="940" fontSize="12">
              by the Bay
            </text>
            <text id="lbte23a" x="965" y="911" fontSize="12">
              Tanjong
            </text>
            <text id="lbte23b" x="965" y="923" fontSize="12">
              Rhu
            </text>
            <text id="lbte24" x="995" y="882" fontSize="12">
              Katong Park
            </text>
            <text id="lbte25a" x="1030" y="846" fontSize="12">
              Tanjong
            </text>
            <text id="lbte25b" x="1030" y="858" fontSize="12">
              Katong
            </text>
            <text id="lbte26a" x="1062" y="813" fontSize="12">
              Marine
            </text>
            <text id="lbte26b" x="1062" y="825" fontSize="12">
              Parade
            </text>
            <text id="lbte27a" x="1086" y="766" fontSize="12">
              Marine
            </text>
            <text id="lbte27b" x="1084" y="778" fontSize="12">
              Terrace
            </text>
            <text id="lbte28" x="1132" y="802" fontSize="12">
              Siglap
            </text>
            <text id="lbte29" x="1168" y="778" fontSize="12">
              Bayshore
            </text>
            <text id="lbte30a" x="1219" y="802" fontSize="12">
              Bedok
            </text>
            <text id="lbte30b" x="1220" y="814" fontSize="12">
              South
            </text>
          </g>
        )}
        {isDisplay('JRL_LINE_STN') && (
          <g id="lbjrlex" fill={config['textColor'] || '#aaaaaa'}>
            <text id="lbjs2a" x="163" y="274" fontSize="12">
              Choa Chu
            </text>
            <text id="lbjs2b" x="158" y="286" fontSize="12">
              Kang West
            </text>
            <text id="lbjs3" x="132" y="332" fontSize="12">
              Tengah
            </text>
            <text id="lbjs4" x="94" y="384" fontSize="12">
              Hong Kah
            </text>
            <text id="lbjs5" x="84" y="418" fontSize="12">
              Corporation
            </text>
            <text id="lbjs6a" x="112" y="448" fontSize="12">
              Jurong
            </text>
            <text id="lbjs6b" x="121" y="460" fontSize="12">
              West
            </text>
            <text id="lbjs7a" x="160" y="478" fontSize="12">
              Bahar
            </text>
            <text id="lbjs7b" x="160" y="490" fontSize="12">
              Junction
            </text>
            <text id="lbjs9" x="163" y="540" fontSize="12">
              Enterprise
            </text>
            <text id="lbjs10" x="186" y="566" fontSize="12">
              Tukang
            </text>
            <text id="lbjs11" x="211" y="591" fontSize="12">
              Jurong Hill
            </text>
            <text id="lbjs12a" x="202" y="631" fontSize="12">
              Jurong Pier
            </text>
            <text id="lbje1a" x="175" y="380" fontSize="12">
              Tengah
            </text>
            <text id="lbje1b" x="175" y="392" fontSize="12">
              Plantation
            </text>
            <text id="lbje2a" x="198" y="411" fontSize="12" />
            <text id="lbje2b" x="192" y="413" fontSize="12">
              Tengah Park
            </text>
            <text id="lbje3a" x="221" y="431" fontSize="12">
              Bukit Batok
            </text>
            <text id="lbje3b" x="221" y="443" fontSize="12">
              West
            </text>
            <text id="lbje4a" x="253" y="462" fontSize="12">
              Toh
            </text>
            <text id="lbje4b" x="253" y="475" fontSize="12">
              Guan
            </text>
            <text id="lbje6a" x="321" y="532" fontSize="12">
              Jurong
            </text>
            <text id="lbje6b" x="321" y="544" fontSize="12">
              Town Hall
            </text>
            <text id="lbje7a" x="297" y="582" fontSize="12">
              Pandan
            </text>
            <text id="lbje7b" x="288" y="594" fontSize="12">
              Reservoir
            </text>
            <text id="lbjw1" x="22" y="469" fontSize="12">
              Gek Poh
            </text>
            <text id="lbjw2" x="33" y="434" fontSize="12">
              Tawas
            </text>
            <text id="lbjw3a" x="20" y="393" fontSize="12">
              Nanyang
            </text>
            <text id="lbjw3b" x="22" y="404" fontSize="12">
              Gateway
            </text>
            <text id="lbjw4a" x="20" y="358" fontSize="12">
              Nanyang
            </text>
            <text id="lbjw4b" x="18" y="370" fontSize="12">
              Crescent
            </text>
            <text id="lbjw5a" x="8" y="323" fontSize="12">
              Peng Kang
            </text>
            <text id="lbjw5b" x="51" y="335" fontSize="12">
              Hill
            </text>
          </g>
        )}
        {/* Circle Line ints first for ease of reference. */}
        <g id="lbintdup" fill={config['textColor'] || '#000000'}>
          <text id="lbcg1" x="1255" y="707" fontSize="12" fontWeight="unset">
            Expo
          </text>
          <text id="lbew2" x="1250" y="594" fontSize="12" fontWeight="unset">
            Tampines
          </text>
          <text id="lbcc10" x="1001" y="592" fontSize="12" fontWeight="unset">
            MacPherson
          </text>
        </g>
        <g id="lbint" fill={config['textColor'] || '#000000'} fontWeight="bold">
          <text id="lbcc1a" x="708" y="686" fontSize="12">
            Dhoby
          </text>
          <text id="lbcc1b" x="709" y="698" fontSize="12">
            Ghaut
          </text>
          <text id="lbce2a" x="797" y="931" fontSize="12">
            Marina
          </text>
          <text id="lbce2b" x="798" y="943" fontSize="12">
            Bay
          </text>
          <text id="lbce1" x="885" y="888" fontSize="12">
            Bayfront
          </text>
          <text id="lbcc4" x="951" y="827" fontSize="12">
            Promenade
          </text>
          <text id="lbcc9a" x="1010" y="641" fontSize="12">
            Paya
          </text>
          <text id="lbcc9b" x="1010" y="653" fontSize="12">
            Lebar
          </text>
          <text id="lbcc13" x="933" y="468" fontSize="12">
            Serangoon
          </text>
          <text id="lbcc15" x="793" y="390" fontSize="12">
            Bishan
          </text>
          <text id="lbcc19a" x="491" y="470" fontSize="12">
            Botanic
          </text>
          <text id="lbcc19b" x="486" y="482" fontSize="12">
            Gardens
          </text>
          <text id="lbcc22" x="489" y="600" fontSize="12">
            Buona Vista
          </text>
          <text id="lbcc29" x="495" y="875" fontSize="12">
            HarbourFront
          </text>
          <text id="lbew4a" x="1235" y="670" fontSize="12">
            Tanah
          </text>
          <text id="lbew4b" x="1235" y="682" fontSize="12">
            Merah
          </text>
          <text id="lbew12" x="908" y="730" fontSize="12">
            Bugis
          </text>
          <text id="lbew13a" x="840" y="799" fontSize="12">
            City
          </text>
          <text id="lbew13b" x="840" y="811" fontSize="12">
            Hall
          </text>
          <text id="lbew14a" x="808" y="831" fontSize="12">
            Raffles
          </text>
          <text id="lbew14b" x="808" y="843" fontSize="12">
            Place
          </text>
          <text id="lbns9" x="480" y="100" fontSize="12">Woodlands</text>
          <text id="lbew16a" x="605" y="782" fontSize="12">
            Outram
          </text>
          <text id="lbew16b" x="621" y="794" fontSize="12">
            Park
          </text>
          <text id="lbew24a" x="292" y="495" fontSize="12">
            Jurong
          </text>
          <text id="lbew24b" x="292" y="508" fontSize="12">
            East
          </text>
          <text id="lbns4a" x="247" y="213" fontSize="12">
            Choa
          </text>
          <text id="lbns4b" x="221" y="225" fontSize="12">
            Chu Kang
          </text>
          <text id="lbns21" x="714" y="536" fontSize="12">
            Newton
          </text>
          <text id="lbne4" x="702" y="758" fontSize="12">
            Chinatown
          </text>
          <text id="lbne7a" x="739" y="605" fontSize="12">
            Little
          </text>
          <text id="lbne7b" x="738" y="617" fontSize="12">
            India
          </text>
          <text id="lbne16" x="1013" y="309" fontSize="12">
            Sengkang
          </text>
          <text id="lbne17" x="1117" y="215" fontSize="12">
            Punggol
          </text>
          <text id="lbdt1a" x="465" y="204" fontSize="12">
            Bukit
          </text>
          <text id="lbdt1b" x="456" y="215" fontSize="12">
            Panjang
          </text>
        </g>
        {isDisplay('BP_LRT_LINE_STN') && (
          <g id="lbbpl" fill={config['textColor'] || '#000000'}>
            <text id="lbbp2a" x="307" y="211" fontSize="10">
              South
            </text>
            <text id="lbbp2b" x="309" y="221" fontSize="10">
              View
            </text>
            <text id="lbbp3a" x="345" y="239" fontSize="10">
              Keat
            </text>
            <text id="lbbp3b" x="344" y="249" fontSize="10">
              Hong
            </text>
            <text id="lbbp4a" x="380" y="211" fontSize="10">
              Teck
            </text>
            <text id="lbbp4b" x="378" y="221" fontSize="10">
              Whye
            </text>
            <text id="lbbp5" x="407" y="239" fontSize="10">
              Phoenix
            </text>
            <text id="lbbp14a" x="425" y="176" fontSize="10">
              Ten Mile
            </text>
            <text id="lbbp14b" x="425" y="186" fontSize="10">
              Junction
            </text>
            <text id="lbbp7" x="525" y="242" fontSize="10">
              Petir
            </text>
            <text id="lbbp8" x="525" y="272" fontSize="10">
              Pending
            </text>
            <text id="lbbp9" x="569" y="251" fontSize="10">
              Bangkit
            </text>
            <text id="lbbp10" x="569" y="229" fontSize="10">
              Fajar
            </text>
            <text id="lbbp11" x="569" y="207" fontSize="10">
              Segar
            </text>
            <text id="lbbp12" x="525" y="186" fontSize="10">
              Jelapang
            </text>
            <text id="lbbp13" x="525" y="215" fontSize="10">
              Senja
            </text>
          </g>
        )}
        {isDisplay('NS_SK_LRT_LINE_STN') && (
          <g id="lbskl" fill={config['textColor'] || '#000000'}>
            <text id="lbse1" x="1096" y="315" fontSize="10">
              Compassvale
            </text>
            <text id="lbse2" x="1155" y="335" fontSize="10">
              Rumbia
            </text>
            <text id="lbse3" x="1157" y="379" fontSize="10">
              Bakau
            </text>
            <text id="lbse4" x="1071" y="384" fontSize="10">
              Kangkar
            </text>
            <text id="lbse5" x="1045" y="354" fontSize="10">
              Ranggung
            </text>
            <text id="lbsw1a" x="1071" y="273" fontSize="10">
              Cheng
            </text>
            <text id="lbsw1b" x="1071" y="283" fontSize="10">
              Lim
            </text>
            <text id="lbsw2" x="1065" y="246" fontSize="10">
              Farmway
            </text>
            <text id="lbsw3" x="1048" y="228" fontSize="10">
              Kupang
            </text>
            <text id="lbsw4" x="970" y="226" fontSize="10">
              Thanggam
            </text>
            <text id="lbsw5" x="961" y="246" fontSize="10">
              Fernvale
            </text>
            <text id="lbsw6" x="974" y="277" fontSize="10">
              Layar
            </text>
            <text id="lbsw7" x="973" y="293" fontSize="10">
              Tongkang
            </text>
            <text id="lbsw8" x="1025" y="286" fontSize="10">
              Renjong
            </text>
          </g>
        )}
        {isDisplay('NS_PG_LRT_LINE_STN') && (
          <g id="lbpgl" fill={config['textColor'] || '#000000'}>
            <text id="lbpe1" x="1164" y="250" fontSize="10">
              Cove
            </text>
            <text id="lbpe2" x="1154" y="275" fontSize="10">
              Meridian
            </text>
            <text id="lbpe3" x="1160" y="293" fontSize="10">
              Coral Edge
            </text>
            <text id="lbpe4" x="1252" y="282" fontSize="10">
              Riviera
            </text>
            <text id="lbpe5" x="1259" y="245" fontSize="10">
              Kadaloor
            </text>
            <text id="lbpe6" x="1243" y="229" fontSize="10">
              Oasis
            </text>
            <text id="lbpe7" x="1198" y="219" fontSize="10">
              Damai
            </text>
            <text id="lbpw1" x="1166" y="177" fontSize="10">
              Sam Kee
            </text>
            <text id="lbpw2" x="1162" y="150" fontSize="10" fill="#aaaaaa">
              Teck Lee
            </text>
            <text id="lbpw3" x="1145" y="131" fontSize="10">
              Punggol Point
            </text>
            <text id="lbpw4" x="1056" y="142" fontSize="10">
              Samudera
            </text>
            <text id="lbpw5" x="1063" y="181" fontSize="10">
              Nibong
            </text>
            <text id="lbpw6" x="1075" y="198" fontSize="10">
              Sumang
            </text>
            <text id="lbpw7a" x="1131" y="182" fontSize="10">
              Soo
            </text>
            <text id="lbpw7b" x="1130" y="191" fontSize="10">
              Teck
            </text>
          </g>
        )}
        {isDisplay('RTS_JB_LINE_STN') && (
          <g id="rtsl" fill={config['textColor'] || '#aaaaaa'}>
            <text id="jb2" x="360" y="29" fontSize="12">
              Bukit Chagar
            </text>
            <text id="jb2" x="356" y="41" fontSize="12">
              (Johor Bahru)
            </text>
          </g>
        )}
      </g>
    </svg>
  );
};

const colorFilter = str => {
  switch (str['id'].slice(0, 2)) {
    case 'ew':
    case 'cg':
      return '#009645';
    case 'cc':
    case 'ce':
      return '#fa9e0d';
    case 'ns':
      return '#d42e12';
    case 'ne':
      return '#9900aa';
    case 'dt':
      return '#005ec4';
    case 'te':
      return '#784008';
    case 'js':
      return '#0099aa';
    case 'bp':
    case 'se':
    case 'pe':
    case 'pw':
      return '#999999';
    case 'je':
      return '#0099aa';
    case 'jb':
      return '#87cefa';
    default:
      return 'rgba(0,0,0,0)';
  }
};

const renderStationTags = (stnTags, removeSelectedStation) => {
  return stnTags.map((stn, index) => (
    <li
      style={{
        background: `${colorFilter(stn)}`,
        padding: `5px`,
        margin: `10px`,
        width: `auto`,
        height: `20px`,
        color: `white`,
        fontWeight: `bold`,
        borderRadius: `5px`,
        fontSize: `auto`,
      }}
      key={index}
      onClick={() => removeSelectedStation(stn['id'], stn)}
    >
      {stn['name']}{' '}
      <svg
        viewBox="0 0 896 896"
        data-icon="close"
        width="0.7em"
        height="0.7em"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
      </svg>
    </li>
  ));
};

const withStatefutureStation = withState(
  'showFutureStations',
  'setShowFutureStations',
  props => props.isDisplayFutureStation || false,
);
const withStateselectedStations = withState(
  'selectedStn',
  'setSelectedStn',
  props => props.selectedStations || [],
);

const SmrtSelector = ({
  width,
  height,
  selectedStations,
  setShowFutureStations,
  selectedStn,
  setSelectedStn,
  showFutureStations,
  onStationsCheckChange,
  displayStations,
  isDisplayFutureStation,
  title,
  displayTagSelector,
  config,
}) => {
  const currentStation = [
    'EW_LINE_STN',
    'NS_LINE_STN',
    'NE_LINE_STN',
    'CC_LINE_STN',
    'DTL_LINE_STN',
    'BP_LRT_LINE_STN',
    'NS_SK_LRT_LINE_STN',
    'NS_PG_LRT_LINE_STN',
  ];
  const newStations = [
    'ECL_TEL_LINE_STN',
    'JRL_LINE_STN',
    'RTS_JB_LINE_STN',
    'CC_LINE_NEW_STN',
    'DTL_LINE_NEW_STN',
    'NE_LINE_NEW_STN',
    'CRLEX_NEW_STN',
  ];

  const stns = displayStations
    ? {
        displayStations:
          Array.isArray(displayStations) && displayStations.length > 0
            ? displayStations
            : [...currentStation],
      }
    : {
        displayStations: showFutureStations
          ? [...currentStation, ...newStations]
          : [...currentStation],
      };

  const addSelectedStation = (id, stn) => {
    selectedStn.push(stn);
    onStationsCheckChange(stn, selectedStn);
    setSelectedStn(selectedStn);
  };

  const removeSelectedStation = (id, stn) => {
    if (selectedStn.filter(item => item['id'] === stn['id']).length > 0) {
      if (selectedStn.findIndex(item => item['id'] === stn['id']) > -1) {
        selectedStn.splice(
          selectedStn.findIndex(item => item['id'] === stn['id']),
          1,
        );
        setSelectedStn(selectedStn);
        onStationsCheckChange(stn, selectedStn);
      }
    }
  };

  return (
    <>
      <div
        style={{
          width: `${width ? width : `100vw`}`,
          height: `${height ? height : `100vh`}`,
          overflow: `scroll`,
          margin: `0 auto`,
        }}
      >
        {genImage(
          stns,
          selectedStn,
          addSelectedStation,
          removeSelectedStation,
          title,
          config || {
            textColor: '#2bf96ae8',
            title: { textColor: '#fd4141f5' },
            backgroundColor: '#171717e8',
          },
        )}
      </div>
      {displayTagSelector && (
        <ul
          style={{
            background: `rgba(72, 71, 71, 0.91)`,
            flexDirection: `row `,
            justifyContent: `flex-start space-around`,
            flexWrap: `wrap`,
            listStyle: `none`,
            minHeight: `8vh`,
            cursor: `pointer`,
            padding: `0`,
            display: `flex`,
            WebkitFlexFlow: `row wrap`,
            margin: `0 auto`,
          }}
        >
          {selectedStn && renderStationTags(selectedStn, removeSelectedStation)}
        </ul>
      )}
    </>
  );
};
export default compose(
  withStateselectedStations,
  withStatefutureStation,
)(SmrtSelector);
SmrtSelector.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  title: PropTypes.string,
  selectedStations: PropTypes.array,
  onStationsCheckChange: PropTypes.func.isRequired,
  displayStations: PropTypes.array,
  displayFutureStation: PropTypes.bool,
  displayTagSelector: PropTypes.bool,
  config: PropTypes.object,
};

SmrtSelector.defaultProps = {
  config: {
    backgroundColor: '#FFF',
    textColor: '#000000',
    title: { textColor: '#000000' },
  },
  onStationsCheckChange: (item, selectedStn) => {},
};
