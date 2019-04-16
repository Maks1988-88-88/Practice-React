import React from "react";
// import PropTypes from "prop-types";

export default class Toggler extends React.Component {
  // static PropTypes = {};

  state = {
    isVisible: true
  };
  _handlClick = () => {
    this.setState(prevState => ({
              isVisible: !prevState.isVisible
            }));
  }

  render() {
    return (
      <div>
        <button onClick={this._handlClick}>toggler</button>
        {this.state.isVisible && <h3>Now you can see me</h3>}
      </div>
    );
  }
}
