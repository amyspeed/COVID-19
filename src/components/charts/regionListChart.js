import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import './chart.css';

class RegionListChart extends React.Component {

    sortData(data) {
        const sortedArr = [...data].sort((a, b) => {
            if (a.cases < b.cases) return 1;
            if (a.cases > b.cases) return -1;
            return 0
        });
        return sortedArr.map((region, index) => (
            <div key={index}>
                <p><span className='important-text'>{region.cases.toLocaleString()}</span> {region.country ? region.country : region.state ? region.state : null}</p>
            </div>
        ))
    }

    render() {
        const regions = this.props.regions;
        return (
            <div className='list-card'>
                { !regions.data && !regions.error  ?
                        <div className='load-container'>
                            <ScaleLoader />
                        </div> : null
                }
                {  regions.data ?
                    <div>
                        <div style={{ position: "absolute", backgroundColor: 'white', width: '80%', top: 0, left: 20}}>
                            <h3>Confirmed Cases</h3>
                        </div>
                        <div style={{ marginTop: 50,}}>
                            {this.sortData(regions.data)}
                        </div>
                    </div>
                    : null
                }

            </div>
        )
    }

}

export default RegionListChart;