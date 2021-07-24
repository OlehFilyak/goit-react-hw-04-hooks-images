import PropTypes from "prop-types";

import css from "./ImageGalleryItem.module.css";

const ImageGallaryItem = ({ alt, url, id, handleSelectImage }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        onClick={handleSelectImage}
        src={url}
        alt={alt}
        className={css.ImageGalleryItem__image}
        id={id}
      />
    </li>
  );
};

export default ImageGallaryItem;

ImageGallaryItem.propTypes = {
  alt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  handleSelectImage: PropTypes.func.isRequired,
};
