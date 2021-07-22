const ImageGallaryItem = ({ alt, url, id, selectedImage }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        onClick={selectedImage}
        src={url}
        alt={alt}
        className="ImageGalleryItem-image"
        id={id}
      />
    </li>
  );
};

export default ImageGallaryItem;
