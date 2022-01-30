import React, { Component } from 'react';

class Navbar extends Component {
  render() {
      console.log("navbar Render")
    return (
      <nav>
          <i className="navbar-logo fas fa-leaf"></i>
          <span>Habit Tracker</span>
        <span>{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;
