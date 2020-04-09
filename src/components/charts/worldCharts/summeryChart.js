import React from 'react';
import '../chart.css';
import ScaleLoader from 'react-spinners/ScaleLoader';

class SummeryChart extends React.Component {

    render() {
        const summery = this.props.summery;
        return (
            <div className='chart-card'>
                { !summery.data && !summery.error  ?
                        <div className='load-container'>
                            <ScaleLoader />
                        </div> : null
                }
                {  summery.data ?
                    <div>
                        <h3>Summery</h3>
                        <div>
                            { summery.data.cases ? <p>Total Confirmed Cases: {summery.data.cases.toLocaleString()}</p> : null }
                            { summery.data.deaths ? <p>Total Deaths: {summery.data.deaths.toLocaleString()}</p> : null }
                            { summery.data.todayCases ? <p>New Cases Today: {summery.data.todayCases.toLocaleString()}</p> : null }
                            { summery.data.affectedCountries ? <p>Affected Countries: {summery.data.affectedCountries.toLocaleString()}</p> : null }
                        </div>
                    </div>
                    : null
                }

            </div>
        )
    }

}

export default SummeryChart;