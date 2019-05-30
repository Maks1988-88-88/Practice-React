import React from 'react';
// import PropTypes from 'prop-types';

const GalleryCard = ({ img, author }) => {
  return (
    <div>
      <img src={img} alt="" />
      <h1>{author}</h1>
    </div>
  );
};

// GalleryCard.propTypes = {};

export default GalleryCard;