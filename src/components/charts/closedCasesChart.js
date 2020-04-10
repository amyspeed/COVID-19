import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import {
    PieChart, Pie, Label, Tooltip, ResponsiveContainer, Cell
  } from 'recharts';
import './chart.css';

class ClosedCasesChart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            updated: false,
            data: [{ name: 'Deaths', value: 0}, { name: 'Recoveries', value: 0 }]
        }
    }

    componentDidUpdate() {
        if (!this.state.updated && this.props.summery.data && this.props.summery.data.deaths && this.props.summery.data.recovered) {
            this.setState({
                data: [{ name: 'Deaths', value: this.props.summery.data.deaths}, { name: 'Recoveries', value: this.props.summery.data.recovered}],
                updated: true
            })
            console.log(this.state.data);
        }
    }

    totalClosed(deaths, recovered) {
        let total = Number(deaths) + Number(recovered);
        total = total.toLocaleString();
        return total;
    }

    renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x  = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy  + radius * Math.sin(-midAngle * RADIAN);
    
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
   };

    render() {
        const summery = this.props.summery;
        const COLORS = ["#a70101", "#c6c6c6"];

        return (
            <div className='chart-card'>
                { !summery.data && !summery.error  ?
                        <div className='load-container'>
                            <ScaleLoader color={'#757575'} />
                        </div> : null
                }
                {  summery.data ?
                    <div>
                        <h3>
                            Closed Cases <span className='important-text'>{ summery.data.deaths && summery.data.recovered ? this.totalClosed(summery.data.deaths, summery.data.recovered) : null }</span>
                        </h3>
                        <div className='data-details'>
                            { summery.data.deaths ? <p>Total Deaths: {summery.data.deaths.toLocaleString()}</p> : null }
                            { summery.data.recovered ? <p>Total Recovered: {summery.data.recovered.toLocaleString()}</p> : null }
                        </div>
                        <ResponsiveContainer width="100%" minWidth={300} height={300}>
                            <PieChart>
                                <Tooltip />
                                <Pie 
                                    data={this.state.data} 
                                    startAngle={360}
                                    endAngle={0}
                                    dataKey='value' 
                                    nameKey='name'
                                    fill="#8b1414"
                                    labelLine={false}
                                    label={this.renderCustomizedLabel}
                                >
                                    <Label dataKey='value' />
                                    {
          	                            this.state.data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} key={index}/>)
                                    }
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    : null
                }

            </div>
        )
    }

}

export default ClosedCasesChart;