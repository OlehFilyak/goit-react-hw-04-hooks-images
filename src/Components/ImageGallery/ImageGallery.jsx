import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallary = ({ images, showModal }) => {
  return (
    <ul className="ImageGallery">
      {images.map(({ tags, webformatURL, id, largeImageURL }) => (
        <ImageGalleryItem
          alt={tags}
          url={webformatURL}
          key={id}
          modalUrl={largeImageURL}
          showModal={showModal}
        />
      ))}
    </ul>
  );
};

export default ImageGallary;
