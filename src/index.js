import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home/Home';
import Tictactoe from './tictactoe/Tictactoe';
import Header from './shared/Header'
import { Router, Route, hashHistory } from 'react-router';

ReactDOM.render(
  <div>
  <Header/>
  <div>
  <section className="section">
  <div className="columns">
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/tictactoe" component={Tictactoe}/>
  </Router>
  </div>
  </section>
  </div>
  </div>,
  document.getElementById('root')
);
