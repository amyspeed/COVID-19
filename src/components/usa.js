import React from 'react';
import { connect } from 'react-redux';
import { fetchAllWorldData } from '../actions/worldData';
import NavBar from './navBar';

class USA extends React.Component {

    componentDidMount() {
    }

    goHome = () => {
        this.props.history.push('/');
    }

    goWorld = () => {
        this.props.dispatch(fetchAllWorldData());
        this.props.history.push('/world');
    }

    goUsa() {
        // Already there! Refresh
        window.location.reload();
    }

    render() {
        return(
            <div>
                <NavBar goHome={()=> this.goHome()} goWorld={()=>this.goWorld()} goUsa={this.goUsa} />
                <div className='content'>
                    <div className='row header-row'>
                        <h2>United States</h2>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(USA);