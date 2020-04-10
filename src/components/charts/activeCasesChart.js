import React from 'react';
import {
    PieChart, Pie, Label, Tooltip, ResponsiveContainer, Cell
  } from 'recharts';
import ScaleLoader from 'react-spinners/ScaleLoader';
import './chart.css';

class ActiveCasesChart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            updated: false,
            data: [{ name: 'Critical/Serious', value: 0}, { name: 'Mild Infections', value: 0 }]
        }
    }

    componentDidUpdate() {
        if (!this.state.updated && this.props.summery.data && this.props.summery.data.active && this.props.summery.data.critical) {
            const mild = Number(this.props.summery.data.active) -  Number(this.props.summery.data.critical);
            this.setState({
                data: [{ name: 'Critical/Serious', value: this.props.summery.data.critical}, { name: 'Mild Infections', value: mild}],
                updated: true
            })
            console.log(this.state.data);
        }
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
                        <h3>Active Cases <span className='important-text'>{summery.data.active ? summery.data.active.toLocaleString() : null}</span></h3>
                        <div className='data-details'>
                            { summery.data.critical ? <p>Critical/Serious Cases: {summery.data.critical.toLocaleString()}</p> : null }
                            { this.state.data ? <p>Mild Infections: {this.state.data[1].value.toLocaleString()}</p> : null }
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

export default ActiveCasesChart;