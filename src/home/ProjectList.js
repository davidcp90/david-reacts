import React, { Component } from 'react';
class ProjectList extends Component {
  render() {
    return (
      <section className="section">
      <div className="container has-text-centered columns">
      <nav className="panel column is-half-desktop is-offset-one-quarter-desktop is-12-mobile">
      <p className="panel-heading title is-2">
      Projects
      </p>
      <a className="panel-block is-active" href="#">
      <span className="panel-icon">
      <i className="fa fa-book"></i>
      </span>
      bulma-website
      </a>
      </nav>
      </div>
      </section>
      );
  }
}
export default ProjectList;