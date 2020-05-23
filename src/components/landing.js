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
            // console.log('show nav 2')
        }
        if (!this.props.news) {
            this.props.dispatch(fetchNews());
        }
        else {
            // console.log(this.props.news);
        }
        return(
            <div>
                <NavBar pathName={this.props.match.path} goHome={this.goHome} goWorld={() => this.goWorld()} goUsa={() => this.goUsa()} />
                <div className='content'>
                    <div className='row header-row'>
                        <h2>Welcome</h2>
                        <div className='row'>
                            { 
                                this.props.news && this.props.news.articles && this.props.news.articles.length > 0 ?
                                this.props.news.articles.map((article, i) => <div className='col-4-b' key={i}>
                                    <a href={article.url} target='_blank' rel='noopener noreferrer'>
                                        <div className='news-card'>
                                            <img className='news-img' src={article.urlToImage} alt='news' />
                                            <h3>{article.title}</h3>
                                            <p>{article.source.name}</p>
                                            <p>{article && article.publishedAt ? new Date(article.publishedAt).toLocaleString() : null}</p>
                                    </div>
                                    </a>
                                </div>)
                                : null
                            }

                        </div>
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