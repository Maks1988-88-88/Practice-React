import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
// import App from './App';
import * as serviceWorker from "./serviceWorker";
import App from "./components/App";
// import Root from "./components/Root";
import { BrowserRouter } from "react-router-dom";

const root = document.querySelector("#root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
