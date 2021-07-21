const ImageGallaryItem = ({ alt, url, id, modalUrl, showModal }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        onClick={() => showModal(modalUrl)}
        src={url}
        alt={alt}
        className="ImageGalleryItem-image"
        id={id}
      />
    </li>
  );
};

export default ImageGallaryItem;
