import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import '../chart.css';

class CountriesChart extends React.Component {

    sortData(data) {
        const sortedArr = [...data].sort((a, b) => {
            if (a.cases < b.cases) return 1;
            if (a.cases > b.cases) return -1;
            return 0
        });
        return sortedArr.map((country, index) => (
            <div key={index}>
                <p><span className='important-text'>{country.cases.toLocaleString()}</span> {country.country}</p>
            </div>
        ))
    }

    render() {
        const countries = this.props.countries;
        return (
            <div className='list-card'>
                { !countries.data && !countries.error  ?
                        <div className='load-container'>
                            <ScaleLoader />
                        </div> : null
                }
                {  countries.data ?
                    <div>
                        <div style={{ position: "absolute", backgroundColor: 'white', width: '80%', top: 0, left: 20}}>
                            <h3>Confirmed Cases</h3>
                        </div>
                        <div style={{ marginTop: 50,}}>
                            {this.sortData(countries.data)}
                        </div>
                    </div>
                    : null
                }

            </div>
        )
    }

}

export default CountriesChart;