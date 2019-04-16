import React from "react";
import PropTypes from "prop-types";

export default class Counter extends React.Component {
  static PropTypes = {
    ocCounterClick: PropTypes.func.isRequired
  };
  constructor() {
    super();
    // this._handleClick = this._handleClick.bind(this); // c обычной функцией надо делать
    this.state = {
      isActiveTimer: false,
      counterValue: 0,
      timerValue: 0
    };
  }

  _handleClick = evt => {
    const target = evt.target;
    // console.log(target);
    // console.log(this);
    this.setState(prevState => ({
      counterValue: this.state.counterValue + 1
    }));
  };

  _statrTimer = () => {
    if (!this.state.isActiveTimer) {
      this.setState({ isActiveTimer: true });
      this.counterID = setInterval(() => {
        this.setState(prevState => ({
          timerValue: this.state.timerValue + 1
        }));
      }, 500);
    }
  };

  _stopTimer = () => {
      this.setState({ isActiveTimer: false });
      clearInterval(this.counterID);
      this.setState({
        timerValue: 0
      });
  };

  render() {
    const { counterValue, timerValue } = this.state;
    const { ocCounterClick } = this.props;
    return (
      <div>
        <h1>CounterValue: {counterValue}</h1>
        <h1>TimerValue: {timerValue}</h1>
        <button onClick={this._handleClick}>Counter</button>
        <button onClick={ocCounterClick}>Console.log</button>
        <button onClick={this._statrTimer}>Start Timer</button>
        <button onClick={this._stopTimer}>Stop Timer</button>
      </div>
    );
  }
}
