import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './landing';
import World from './world';
import USA from './usa';
import Footer from './footer';

import './App.css';
import './float-grid.css';

class App extends React.Component {


  render() {
    return(
      <BrowserRouter>
        <div className="App">
          <main role="main">
            <Route exact path="/" component= { Landing } />
            <Route exact path="/world" component= { World } />
            <Route exact path="/usa" component= { USA } />
          </main>
         <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
