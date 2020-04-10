import React from 'react';

import './navBar.css';

import header from '../images/covid-square.png';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showNavTwo: false
        }
    }

    componentDidMount() {
        // activating a scroll listener to send to the nav bar
        window.onscroll = () => this._handleScroll();
    }

    _handleScroll() {
        // If not at the top of the page, begin showing the hidden nav bar
        if (this.state.showNavTwo && window.pageYOffset < 90) {
            console.log('dont show nav 2!!')
            this.setState({
                showNavTwo: false
            })
        }
        else if (!this.state.showNavTwo && window.pageYOffset >= 90) {
            console.log('NOW!!')
            this.setState({
                showNavTwo: true
            })
        }
    };
      
    componentWillUnmount() {
        window.onscroll = null;
    }

    getCSSClass(direction, worldOrUSa) {
        let cssClass = "tab"
        if (direction === 'up') {
            cssClass = "tab up";
            if (
                (window.location.pathname === '/world' && worldOrUSa === 'world') || 
                (window.location.pathname === '/usa' && worldOrUSa === 'usa')
                ) {
                cssClass = "tab up selected";
            }
        }
        else {
            cssClass = "tab down";
            if (
                (window.location.pathname === '/world' && worldOrUSa === 'world') || 
                (window.location.pathname === '/usa' && worldOrUSa === 'usa')
                ) {
                cssClass = "tab down selected";
            }
            
        }
        return cssClass;
    }

    render() {
        return(
            <div>
                <div className='bar-1'>
                    <h1 className='home-text' onClick={() => this.props.goHome() || null}>COVID-19 Analytics</h1>
                    <img className="header-img" src={header} alt='virus header' onClick={() => this.props.goHome() || null} />
                    <div className="tab-container bottom">
                        <div className={this.getCSSClass('up', 'world')} onClick={() => this.props.goWorld() || null}>
                            <p className="tab-text">World</p>
                        </div>
                        <div className={this.getCSSClass('up', 'usa')} onClick={() => this.props.goUsa() || null}>
                            <p className="tab-text">USA</p>
                        </div>
                    </div>
                </div>

                <div className={ this.state.showNavTwo ? 'bar-2' : 'hidden' }>
                    <h1 className='home-text' onClick={() => this.props.goHome() || null}>COVID-19 Analytics</h1>
                    <div className="tab-container top">
                        <div className={this.getCSSClass('down', 'world')} onClick={() => this.props.goWorld() || null}>
                            <p className="tab-text">World</p>
                        </div>
                        <div className={this.getCSSClass('down', 'usa')} onClick={() => this.props.goUsa() || null}>
                            <p className="tab-text">USA</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;