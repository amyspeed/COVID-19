import React from 'react';
import { connect } from 'react-redux';
import { fetchAllWorldData } from '../actions/worldData';
import NavBar from './navBar';
import SummeryChart from './charts/worldCharts/summeryChart';
import ClosedCasesChart from './charts/worldCharts/closedCasesChart';
import ActiveCasesChart from './charts/worldCharts/activeCasesChart';

class World extends React.Component {

    componentDidMount() {
        if (!this.props.summery.data || !this.props.summery.error) {
            this.props.dispatch(fetchAllWorldData());
        } else {
            console.log(this.props.summery);
        }
    }

    goHome = () => {
        this.props.history.push('/');
    }

    goWorld = () => {
        // Already there! Refresh page and load data on componentDidMount
        window.location.reload();
    }

    goUsa = () => {
        this.props.history.push('/usa');
    }

    render() {
        if (this.props.summery) {
            console.log(this.props.summery);
        }
        return(
            <div>
                <NavBar goHome={()=> this.goHome()} goWorld={() => this.goWorld()} goUsa={()=> this.goUsa()} />
                <div className='content'>
                    <div className='row header-row'>
                        <h2>World</h2>
                        <div className='row'>
                            <div className='col-6'>
                                <SummeryChart summery={this.props.summery} />
                            </div>
                            <div className='col-6'>
                                <ClosedCasesChart summery={this.props.summery} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <ActiveCasesChart summery={this.props.summery} />
                            </div>
                            <div className='col-6'>
                                <SummeryChart summery={this.props.summery} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    summery: state.summery
});

export default connect(mapStateToProps)(World);