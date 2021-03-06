import React from 'react';
import './chart.css';
import ScaleLoader from 'react-spinners/ScaleLoader';

class SummeryChart extends React.Component {

    render() {
        const summery = this.props.summery;
        return (
            <div className='row'>
                <div className='col-4'>
                    <div className='chart-card'>
                        { !summery.data && !summery.error  ?
                            <div className='load-container'>
                                <ScaleLoader color={'#757575'} />
                            </div> : null
                        }
                        { summery.data ? <p><span className='important-text'>{summery.data.cases.toLocaleString()}</span> Confirmed Cases</p> : null }
                    </div>
                </div>
                <div className='col-4'>
                    <div className='chart-card'>
                        { !summery.data && !summery.error  ?
                            <div className='load-container'>
                                <ScaleLoader color={'#757575'} />
                            </div> : null
                        }
                        { summery.data ? <p><span className='important-text'>{summery.data.deaths.toLocaleString()}</span> Total Deaths</p> : null }
                    </div>
                </div>
                <div className='col-4'>
                    <div className='chart-card'>
                        { !summery.data && !summery.error  ?
                            <div className='load-container'>
                                <ScaleLoader color={'#757575'} />
                            </div> : null
                        }
                        { summery.data ? <p><span className='important-text'>{summery.data.todayCases.toLocaleString()}</span> New Cases Today</p> : null }
                    </div>
                </div>
            </div>
        )
    }

}

export default SummeryChart;