import React from "react";
import PropTypes from "prop-types";

export default class delTo extends React.Component {
  static PropTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
  };
  static dafaultProps = {
    onClick: () => {}
  };
  render() {
    const { text, onClick } = this.props;
    return (
      <div>
        <p>{text}</p>
        <button onClick={onClick}>-</button>
      </div>
    );
  }
}
