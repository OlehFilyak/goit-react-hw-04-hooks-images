import css from "./ImageGalleryItem.module.css";

const ImageGallaryItem = ({ alt, url, id, selectedImage }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        onClick={selectedImage}
        src={url}
        alt={alt}
        className={css.ImageGalleryItem__image}
        id={id}
      />
    </li>
  );
};

export default ImageGallaryItem;
