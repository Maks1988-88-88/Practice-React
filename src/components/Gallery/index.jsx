import React, { Component } from "react";
import PropTypes from "prop-types";
import GalleryCard from "../GalleryCard";

const Gallery = ({ items }) => {
  return (
    <div>
      {items.map(item => (
        <GalleryCard key={item.id} {...item} />
      ))}
    </div>
  );
};

Gallery.prototype = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default Gallery;

