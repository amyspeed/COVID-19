import React from 'react';

import './navBar.css';

import header from '../images/covid-square.png';

class NavBar extends React.Component {

    getWorldClass() {
        let cssClass = "tab";
        if(window.location.pathname === '/world') {
            cssClass = "tab selected";
        }
        return cssClass;
    }

    getUsClass() {
        let cssClass = "tab";
        if(window.location.pathname === '/usa') {
            cssClass = "tab selected";
        }
        return cssClass;
    }

    render() {
        return(
            <div className='bar'>
                <h1 onClick={() => this.props.goHome() || null}>COVID-19 Analytics</h1>
                <img className="header" src={header} alt='virus header' onClick={() => this.props.goHome() || null} />
                <div className="tab-container">
                    <div className={this.getWorldClass()} onClick={() => this.props.goWorld() || null}>
                        <p className="tab-text">World</p>
                    </div>
                    <div className={this.getUsClass()} onClick={() => this.props.goUsa() || null}>
                        <p className="tab-text">USA</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default NavBar;