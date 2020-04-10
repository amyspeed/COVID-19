import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navBar';
import { fetchAllWorldData } from '../actions/worldData';
import { fetchAllUsaData } from '../actions/usaData';

class Landing extends React.Component {

    componentDidMount() {
    }

    goHome() {
        // Already home! Refresh
        window.location.reload();
    }

    goWorld = () => {
        this.props.dispatch(fetchAllWorldData());
        this.props.history.push('/world');
    }

    goUsa = () => {
        this.props.dispatch(fetchAllUsaData());
        this.props.history.push('/usa');
    }

    render() {
        if (this.props.showNavTwo) {
            console.log('show nav 2')
        }
        return(
            <div>
                <NavBar goHome={this.goHome} goWorld={() => this.goWorld()} goUsa={() => this.goUsa()} />
                <div className='content'>
                    <div className='row header-row'>
                        <h2>Welcome and stuff</h2>
                        <h3>Maybe some news and links here... </h3>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Landing);