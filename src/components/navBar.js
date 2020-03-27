import React from 'react';

import './navBar.css';

import header from '../images/covid-square.png';

class NavBar extends React.Component {

    render() {
        return(
            <div className='bar'>
                <h1 onClick={() => this.props.goHome() || null}>COVID-19 Analytics</h1>
                <img className="header" src={header} alt='virus header' onClick={() => this.props.goHome() || null} />
                <div className="tab-container">
                    <div className="tab" onClick={() => this.props.goWorld() || null}>
                        <p className="tab-text">World</p>
                    </div>
                    <div className="tab" onClick={() => this.props.goUsa() || null}>
                        <p className="tab-text">USA</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default NavBar;