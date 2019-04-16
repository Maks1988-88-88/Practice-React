import React from 'react';
// import Logo from './logo';
import './style.css';


export default class Header extends React.Component {
    render() {
        const {text} = this.props;
        return <header className="Header">
            <div className="Header__logo">
               {this.props.children}
            </div>
            <h1 className="Header__text">{text}</h1>
          </header>;
    }
}

 