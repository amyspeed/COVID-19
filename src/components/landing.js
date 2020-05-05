import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navBar';
import { fetchNews } from '../actions/news';
import { fetchAllWorldData } from '../actions/worldData';
import { fetchAllUsaData } from '../actions/usaData';

class Landing extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
        }
        this.goHome = this.goHome.bind(this);
        this.goWorld = this.goWorld.bind(this);
        this.goUsa = this.goUsa.bind(this);
    }

    goHome() {
        // Already home! Refresh Data
        // window.location.reload();
        this.props.dispatch(fetchNews());
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
        if (!this.props.news) {
            this.props.dispatch(fetchNews());
        }
        else {
            console.log(this.props.news);
        }
        return(
            <div>
                <NavBar pathName={this.props.match.path} goHome={this.goHome} goWorld={() => this.goWorld()} goUsa={() => this.goUsa()} />
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
    news: state.news.data
});

export default connect(mapStateToProps)(Landing);