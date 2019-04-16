import React from "react";
import logoIcon from "../userpic.png";

class Logo extends React.Component {
    render (){
        return <img className="Logo" src={logoIcon} alt='img'/>;
    }
}

export default Logo;
