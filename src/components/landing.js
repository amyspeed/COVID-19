import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navBar';

class Landing extends React.Component {

    componentDidMount() {
    }

    goHome() {
        // Do nothing. Already home!
    }

    goWorld = () => {
        this.props.history.push('/world');
    }

    goUsa = () => {
        this.props.history.push('/usa');
    }

    render() {
        return(
            <div>
                <NavBar goHome={this.goHome} goWorld={() => this.goWorld()} goUsa={() => this.goUsa()} />
                <div className='row header-row'>
                    <h2>Welcome and stuff</h2>
                    <h3>Maybe some news and links here... tbd</h3>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Landing);