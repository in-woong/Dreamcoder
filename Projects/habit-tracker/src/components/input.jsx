import React, { Component } from 'react';

class input extends Component {
  render() {
    return (
      <form name='actForm'>
        <input type='text' name='actName' placeholder='what do you do?' />
        <input
          type='button'
          onClick={this.props.submitt}
          value='submit'
        />
      </form>
    );
  }
}

export default input;
