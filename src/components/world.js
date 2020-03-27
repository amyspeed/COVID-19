import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navBar';

class World extends React.Component {

    componentDidMount() {
    }

    goHome = () => {
        this.props.history.push('/');
    }

    goWorld() {
        //do Nothing
    }

    goUsa = () => {
        this.props.history.push('/usa');
    }

    render() {
        return(
            <div>
                <NavBar goHome={()=> this.goHome()} goWorld={this.goWorld} goUsa={()=> this.goUsa()} />
                <div className='row header-row'>
                    <h2>World</h2>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(World);