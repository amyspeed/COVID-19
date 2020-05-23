import React from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../actions/news';
import { fetchAllWorldData } from '../actions/worldData';
import { fetchAllUsaData } from '../actions/usaData';
import NavBar from './navBar';
import SummeryChart from './charts/summeryChart';
import ClosedCasesChart from './charts/closedCasesChart';
import ActiveCasesChart from './charts/activeCasesChart';
import RegionListChart from './charts/regionListChart';
import WorldMap from './charts/worldMap';

class World extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        }
        this.goHome = this.goHome.bind(this);
        this.goWorld = this.goWorld.bind(this);
        this.goUsa = this.goUsa.bind(this);
    }

    // componentDidMount() {
    //     if (!this.props.summery.data || !this.props.summery.error) {
    //         this.props.dispatch(fetchAllWorldData());
    //     } else {
    //         console.log(this.props.summery);
    //     }
    // }

    goHome = () => {
        this.props.dispatch(fetchNews());
        this.props.history.push('/');
    }

    goWorld = () => {
        // Already there! Refresh data
        this.props.dispatch(fetchAllWorldData());
    }

    goUsa = () => {
        this.props.dispatch(fetchAllUsaData());
        this.props.history.push('/usa');
    }

    render() {
        if (!this.props.summery.data || !this.props.summery.error) {
            this.props.dispatch(fetchAllWorldData());
        } else {
            // console.log(this.props.summery);
        }
        
        return(
            <div>
                <NavBar pathName={this.props.match.path} goHome={()=> this.goHome()} goWorld={() => this.goWorld()} goUsa={()=> this.goUsa()} />
                <div className='content'>
                    <div className='row header-row'>
                        <h2>World</h2>
                        <SummeryChart summery={this.props.summery} />
                        <div className='row'>
                            <div className='col-3' style={{ position: "relative"}}>
                                <RegionListChart regions={this.props.countries} />
                            </div>
                            <div className='col-8'>
                                <WorldMap countries={this.props.countries} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <ActiveCasesChart summery={this.props.summery} />
                            </div>
                            <div className='col-6'>
                                <ClosedCasesChart summery={this.props.summery} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    summery: state.summery,
    countries: state.countries
});

export default connect(mapStateToProps)(World);