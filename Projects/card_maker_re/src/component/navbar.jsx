import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
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
