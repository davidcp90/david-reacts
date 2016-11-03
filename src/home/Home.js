import React, { Component } from 'react';
import logo from '../home/logo.svg';
import ProjectList from './ProjectList';
class Home extends Component {
  render() {
    return (
      <div>
      <section className="hero is-primary is-bold">
      <div className="hero-body">
      <div className="container has-text-centered">
      <img src={logo} width="100" alt="logo" />
      <h1 className="title">David Reacts</h1>
      <h2 className="subtitle">My personal react playground</h2>
      </div>
      </div>
      </section>
      <ProjectList />
      </div>
      );
    }
  }
  export default Home;
