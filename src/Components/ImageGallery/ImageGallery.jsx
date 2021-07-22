import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallary = ({ images, selectedImage }) => {
  return (
    <ul className="ImageGallery">
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
