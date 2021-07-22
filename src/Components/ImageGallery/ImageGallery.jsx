import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

import css from "./ImageGallery.module.css";
const ImageGallary = ({ images, selectedImage }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(({ tags, webformatURL, id, largeImageURL }) => (
        <ImageGalleryItem
          alt={tags}
          url={webformatURL}
          key={id}
          selectedImage={() => selectedImage(largeImageURL, tags)}
        />
      ))}
    </ul>
  );
};

export default ImageGallary;
