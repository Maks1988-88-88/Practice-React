import React from "react";
import logoIcon from "../userpic.png";

class logo extends React.Component {
    render (){
        return <img className="Logo" src={logoIcon} alt='img'/>;
    }
}

export default logo;
