import React, { Component } from 'react';
import { Link } from 'react-router'
class ProjectList extends Component {
  render() {
    return (
      <nav className="panel column is-half-desktop is-offset-one-quarter-desktop is-12-mobile is-paddingless ">
      <p className="panel-heading title is-2 has-text-centered">
      Projects
      </p>
      <Link to="/tictactoe" className="panel-block is-active">
      <span className="panel-icon">
      <i className="fa fa-table"></i>
      </span>
      Tic tac toe
      </Link>
      </nav>
      );
  }
}
export default ProjectList;