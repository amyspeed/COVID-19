import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navBar';
import { fetchAllWorldData } from '../actions/worldData';

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
        this.props.history.push('/usa');
    }

    render() {
        return(
            <div>
                <NavBar goHome={this.goHome} goWorld={() => this.goWorld()} goUsa={() => this.goUsa()} />
                <div className='content'>
                    <div className='row header-row'>
                        <h2>Welcome and stuff</h2>
                        <h3>Maybe some news and links here... tbd</h3>
                        <div>
                            <p>jfskdjflskd</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Landing);