import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export default class Todo extends React.Component {
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
      <div className = 'todo'>
        <p>{text}</p>
        <button onClick={onClick}>-</button>
      </div>
    );
  }
}
