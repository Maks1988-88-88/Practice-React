import React from "react";
import PropTypes from "prop-types";

export default class AddtodoForm extends React.Component {
  static PropTypes = {
    onFormSubmit: PropTypes.func.isRequired
  };
  state = {
    inputValue: ""
  };
  _handleInputChange = evt => {
    const value = evt.target.value;
    this.setState({
      inputValue: value
    });
  };

  _handleSubmit = evt => {
    evt.preventDefault();
    this.props.onFormSubmit(this.state.inputValue);
    this.setState({
      inputValue:''
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <form onSubmit={this._handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={this._handleInputChange}
        />
        <button type="submit">+</button>
      </form>
    );
  }
}
