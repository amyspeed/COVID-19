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
import UsaMap from './charts/usaMap';

class USA extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        }
        this.goHome = this.goHome.bind(this);
        this.goWorld = this.goWorld.bind(this);
        this.goUsa = this.goUsa.bind(this);
    }

    componentDidMount() {
        // console.log(this.props.usaSummery);
        // if (!this.props.usaSummery.data || !this.props.usaSummery.error) {
        //     this.props.dispatch(fetchAllUsaData());
        // } else {
        //     console.log(this.props.usaSummery);
        // }
    }

    goHome = () => {
        this.props.dispatch(fetchNews());
        this.props.history.push('/');
    }

    goWorld = () => {
        this.props.dispatch(fetchAllWorldData());
        this.props.history.push('/world');
    }

    goUsa() {
        // Already there! Refresh data
        this.props.dispatch(fetchAllUsaData());
    }

    render() {
        if (!this.props.usaSummery.data && !this.props.usaSummery.error) {
            this.props.dispatch(fetchAllUsaData());
        } else {
            // console.log(this.props.usaSummery);
        }

        return(
            <div>
                <NavBar pathName={this.props.match.path} goHome={()=> this.goHome()} goWorld={()=>this.goWorld()} goUsa={this.goUsa} />
                <div className='content'>
                    <div className='row header-row'>
                        <h2>United States of America</h2>
                        <SummeryChart summery={this.props.usaSummery} />
                        <div className='row'>
                            <div className='col-3' style={{ position: "relative"}}>
                                <RegionListChart regions={this.props.states} />
                            </div>
                            <div className='col-8'>
                                <UsaMap states={this.props.states} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <ActiveCasesChart summery={this.props.usaSummery} />
                            </div>
                            <div className='col-6'>
                                <ClosedCasesChart summery={this.props.usaSummery} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    states: state.states,
    usaSummery: state.usaSummery
});

export default connect(mapStateToProps)(USA);