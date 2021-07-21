import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallary = ({ images }) => {
  return (
    <ul className="ImageGallery">
      {images.map(({ tags, webformatURL, id }) => (
        <ImageGalleryItem alt={tags} url={webformatURL} key={id} />
      ))}
    </ul>
  );
};

export default ImageGallary;
