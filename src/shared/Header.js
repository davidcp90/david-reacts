import React from 'react';
import logo from './logo.svg';
export default React.createClass({
  render() {
      return (
        <section className="hero is-primary is-bold">
      <div className="hero-body">
      <div className="container has-text-centered">
      <img src={logo} width="100" alt="logo" />
      <h1 className="title">David Reacts</h1>
      <h2 className="subtitle">My personal react playground</h2>
      </div>
      </div>
      </section>
      );
  }
});