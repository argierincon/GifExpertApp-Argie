import React from "react";

import './GifGridItem.css'

const GifGridItem = ({ title, url }) => {
  return (
    <div className="gif-box animate__animated animate__bounce animate__delay-2s">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default GifGridItem;
