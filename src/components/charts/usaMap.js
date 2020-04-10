import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { VectorMap } from "react-jvectormap"
import './chart.css';

const states_hash =
{
  'Alabama': 'AL',
  'Alaska': 'AK',
  'American Samoa': 'AS',
  'Arizona': 'AZ',
  'Arkansas': 'AR',
  'California': 'CA',
  'Colorado': 'CO',
  'Connecticut': 'CT',
  'Delaware': 'DE',
  'District Of Columbia': 'DC',
  'Federated States Of Micronesia': 'FM',
  'Florida': 'FL',
  'Georgia': 'GA',
  'Guam': 'GU',
  'Hawaii': 'HI',
  'Idaho': 'ID',
  'Illinois': 'IL',
  'Indiana': 'IN',
  'Iowa': 'IA',
  'Kansas': 'KS',
  'Kentucky': 'KY',
  'Louisiana': 'LA',
  'Maine': 'ME',
  'Marshall Islands': 'MH',
  'Maryland': 'MD',
  'Massachusetts': 'MA',
  'Michigan': 'MI',
  'Minnesota': 'MN',
  'Mississippi': 'MS',
  'Missouri': 'MO',
  'Montana': 'MT',
  'Nebraska': 'NE',
  'Nevada': 'NV',
  'New Hampshire': 'NH',
  'New Jersey': 'NJ',
  'New Mexico': 'NM',
  'New York': 'NY',
  'North Carolina': 'NC',
  'North Dakota': 'ND',
  'Northern Mariana Islands': 'MP',
  'Ohio': 'OH',
  'Oklahoma': 'OK',
  'Oregon': 'OR',
  'Palau': 'PW',
  'Pennsylvania': 'PA',
  'Puerto Rico': 'PR',
  'Rhode Island': 'RI',
  'South Carolina': 'SC',
  'South Dakota': 'SD',
  'Tennessee': 'TN',
  'Texas': 'TX',
  'Utah': 'UT',
  'Vermont': 'VT',
  'Virgin Islands': 'VI',
  'Virginia': 'VA',
  'Washington': 'WA',
  'West Virginia': 'WV',
  'Wisconsin': 'WI',
  'Wyoming': 'WY'
}

class UsaMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mapData: {
                TX: 0
            },
            updated: false
        }
    }

    componentDidUpdate() {
        if (!this.state.updated && this.props.states && this.props.states.data) {
            // let's create an object for our map 
            let dataObj = {};
            for (let i = 0; i < this.props.states.data.length; i++) {

                const newObj = {};
                // Find the state code
                const stateName = this.props.states.data[i].state;
                // Assign the state code as the key of the new object
                const newObjKey = 'US-' + states_hash[stateName]
                // The value becomes the number of cases in the state
                newObj[newObjKey] = this.props.states.data[i].cases;
                // Add the new object into our larger data object
                dataObj = Object.assign(dataObj, newObj);
            }
            console.log(dataObj);
            this.setState({
                mapData: dataObj,
                updated: true
            })
        }
    }

    customToolTip = (e, el, code) => {
        if (this.state.mapData[code]) {
            el.html(el.html()+ ': ' + this.state.mapData[code].toLocaleString());
        }
    }
    

    render() {
        const states = this.props.states;
        return (
            <div className='chart-card'>
                { !states.data && !states.error  ?
                        <div className='load-container'>
                            <ScaleLoader />
                        </div> : null
                }
                {  states.data ?
                    <div style={{width: "100%"}}>
                        <VectorMap
                            map={"us_aea"}
                            backgroundColor="#FFFFFF"
                            zoomOnScroll={false}
                            containerStyle={{
                                width: "100%",
                                height: "520px"
                            }}
                            // onRegionClick={handleClick} //gets the country code
                            containerClassName="map"
                            regionStyle={{
                                initial: {
                                    fill: "#e4e4e4",
                                    "fill-opacity": 0.9,
                                    stroke: "none",
                                    "stroke-width": 0,
                                    "stroke-opacity": 0
                                },
                                hover: {
                                    "fill-opacity": 0.8,
                                    cursor: "pointer"
                                },
                                selected: {
                                    fill: "#2938bc" //color for the clicked country
                                },
                                selectedHover: {},
                                }}
                            regionsSelectable={false}
                            onRegionTipShow={(e, el, code) => this.customToolTip(e, el, code) }
                            mapUrlByCode = {function(code, multiMap){
                                return '/js/us-counties/jquery-jvectormap-data-'+
                                       code.toLowerCase()+'-'+
                                       multiMap.defaultProjection+'-en.js';
                              }}
                            series={{
                                regions: [
                                    {
                                        values: this.state.mapData, //this is your data
                                        scale: ["#c6c6c6c", "#a70101"], //your color game's here
                                        normalizeFunction: "polynomial"
                                    }
                                ]
                            }}
                            />
                    </div>
                    : null
                }

            </div>
        )
    }

}

export default UsaMap;