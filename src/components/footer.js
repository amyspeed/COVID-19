import React from 'react';
import './footer.css'

class Footer extends React.Component {

    render() {
        return(
            <div className='footer-bar'>
                    <p className='footer-text'>created by <a className='footer-link' href='https://www.amyspeed.dev' target='_blank' rel='noopener noreferrer'>Amy Speed</a></p>
                    <p className='footer-text'>data source <a className='footer-link' href='https://github.com/NovelCOVID/API' target='_blank' rel='noopener noreferrer'>NovelCOVID API</a></p>
            </div>
        )
    }
}

export default Footer;