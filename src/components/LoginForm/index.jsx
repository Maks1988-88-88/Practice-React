import React from "react";
// import PropTypes from "prop-types";

export default class LoginForm extends React.Component {
  // static PropTypes = {};

  state = {
    loginInptValue: "",
    passInpValue: ""
  };

  _handleLoginInputChange = evt => {
    const value = evt.target.value;
    this.setState({
      loginInptValue: value
    });
  };

  _handlePassInputChange = evt => {
    const value = evt.target.value;
    this.setState({
      passInpValue: value
    });
  };

  _hanlFormSubmit = evt => {
    evt.preventDefault();
    const userData = {
      login: this.state.loginInptValue,
      pass: this.state.passInpValue
    };
    this.setState({
      loginInptValue: "",
      passInpValue: ""
    });
    console.log(JSON.stringify(userData));
    alert(JSON.stringify(userData));

  };

  render() {
    const { loginInptValue, passInpValue } = this.state;
    return (
      <form onSubmit={this._hanlFormSubmit}>
        <input
          type="text"
          value={loginInptValue}
          onChange={this._handleLoginInputChange}
        />
        <input
          type="password"
          value={passInpValue}
          onChange={this._handlePassInputChange}
        />
        <button type="submit">login</button>
      </form>
    );
  }
}
