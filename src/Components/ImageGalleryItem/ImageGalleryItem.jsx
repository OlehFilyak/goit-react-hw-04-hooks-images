import React from "react";

const ImageGallaryItem = ({ alt, url, id }) => {
  return (
    <li className="ImageGalleryItem">
      <img src={url} alt={alt} className="ImageGalleryItem-image" id={id} />
    </li>
  );
};

export default ImageGallaryItem;
