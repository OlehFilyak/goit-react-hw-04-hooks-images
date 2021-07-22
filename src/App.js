import { useState, useEffect } from "react";

import ImageGallery from "./Components/ImageGallery";
import Loader from "./Components/Loader";
import Modal from "./Components/Modal";
import LoadMoreButton from "./Components/LoadMoreBtn";
import Searchbar from "./Components/Searchbar";

import { onShowErrorNotification } from "./services/notifications/notifications";
import getPicturesAPI from "./services/getpicturesAPI/getPicturesAPI";

import "./App.css";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [pageQuery, setPageQuery] = useState(1);
  const [images, setImages] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);
  const [altSelectedImg, setAltSelectedImg] = useState(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    async function getFetchPictures() {
      setStatus("pending");

      try {
        const images = await getPicturesAPI(searchQuery, pageQuery);

        if (!images.length) {
          throw new Error();
        }

        setImages((prevImages) => [...prevImages, ...images]);
        setStatus("resolved");

        pageQuery > 1 &&
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
      } catch (error) {
        console.log(error);
        onShowErrorNotification();
        setStatus("rejected");
      }
    }
    getFetchPictures();
  }, [pageQuery, searchQuery]);

  const handleFormSubmit = (query) => {
    if (searchQuery === query) {
      return;
    }

    resetState();
    setSearchQuery(query);
  };

  const loadMoreBtnClick = () => {
    setPageQuery((prevPage) => prevPage + 1);
  };

  const handleSelectedImage = (largeImageUrl, tags) => {
    setSelectedImg(largeImageUrl);
    setAltSelectedImg(tags);
  };

  const closeModal = () => {
    setSelectedImg(null);
  };

  const resetState = () => {
    setSearchQuery("");
    setPageQuery(1);
    setImages([]);
    setSelectedImg(null);
    setAltSelectedImg(null);
    setStatus("idle");
  };

  if (status === "idle") {
    return <Searchbar onSubmit={handleFormSubmit} />;
  }

  if (status === "pending") {
    return (
      <>
        <Searchbar onSubmit={handleFormSubmit} />
        <Loader />
        <ImageGallery images={images} selectedImage={handleSelectedImage} />
        {images.length > 0 && <LoadMoreButton onClick={loadMoreBtnClick} />}
      </>
    );
  }

  if (status === "resolved") {
    return (
      <>
        <Searchbar onSubmit={handleFormSubmit} />
        <ImageGallery images={images} selectedImage={handleSelectedImage} />
        {selectedImg && (
          <Modal
            selectedImg={selectedImg}
            tags={altSelectedImg}
            onClose={closeModal}
          />
        )}
        {images.length > 0 && <LoadMoreButton onClick={loadMoreBtnClick} />}
      </>
    );
  }

  if (status === "rejected") {
    return <Searchbar onSubmit={handleFormSubmit} />;
  }
}
