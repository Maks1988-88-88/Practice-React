import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';
import userPic from './userpic.png';

console.log(userPic);

class Post extends React.Component {
    render() {
        console.log(this.props);  
        const { user: name, text, date } = this.props;
        return <div className="Post">
            <img src={userPic} alt="" className="Post__img" />
            <h3 className="Post__name">{name}</h3>
            <p className="Post__text">{text}</p>
            <span className="Post__date">{JSON.stringify(date)}</span>
          </div>;
    }
}

Post.propTypes = {
  user: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Post;