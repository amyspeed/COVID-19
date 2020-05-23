import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { VectorMap } from "react-jvectormap"
import './chart.css';

class WorldMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mapData: {
                US: 0
            },
            updated: false
        }
    }

    componentDidUpdate() {
        if (!this.state.updated && this.props.countries && this.props.countries.data) {
            // let's create an object for our map 
            let dataObj = {};
            for (let i = 0; i < this.props.countries.data.length; i++) {
                const newObj = {};
                const key = this.props.countries.data[i].countryInfo.iso2;
                newObj[key] = this.props.countries.data[i].cases;
                dataObj = Object.assign(dataObj, newObj);
            }
            // console.log(dataObj);
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
        const countries = this.props.countries;
        return (
            <div className='chart-card'>
                { !countries.data && !countries.error  ?
                        <div className='load-container'>
                            <ScaleLoader color={'#757575'} />
                        </div> : null
                }
                {  countries.data ?
                    <div style={{width: "100%"}}>
                        <VectorMap
                            map={"world_mill"}
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

export default WorldMap;