import { useState, useEffect } from "react";

import ImageGallery from "./Components/ImageGallery";
import Loader from "./Components/Loader";
import Modal from "./Components/Modal";
import Button from "./Components/Button";
import Searchbar from "./Components/Searchbar";

import getPicturesAPI from "./helpers/fetch";

import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [pageQuery, setPageQuery] = useState(1);
  const [images, setImages] = useState([]);
  const [modalUrl, setModalUrl] = useState("");
  const [showLoader, setShowLoader] = useState(false);

  const closeModalByEsc = (e) => {
    if (e.key === "Escape") {
      setModalUrl("");
    }
  };

  useEffect(() => {
    if (modalUrl) {
      window.addEventListener("keydown", closeModalByEsc);
    } else {
      window.removeEventListener("keydown", closeModalByEsc);
    }
  }, [modalUrl]);

  const handleSetQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleGetPictures = async (e) => {
    e.preventDefault();
    setPageQuery(1);
    setShowLoader(true);
    // getPictures(searchQuery, pageQuery);

    const {
      data: { hits },
    } = await getPicturesAPI(searchQuery, 1);
    setShowLoader(false);
    // console.log(resp); Потім
    setImages(hits);

    setPageQuery((prevPage) => prevPage + 1);
    // setSearchQuery("");
  };

  const handleLoadMore = async () => {
    setShowLoader(true);
    const {
      data: { hits },
    } = await getPicturesAPI(searchQuery, pageQuery);
    // console.log(hits);
    setShowLoader(false);
    setImages((prevState) => [...prevState, ...hits]);
    setPageQuery((prevPage) => prevPage + 1);
    handleScroll();
  };

  const handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleShowModal = (url) => {
    setModalUrl(url);
  };

  const handleCloseModal = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }

    // if (e.target.nodeName === "IMG") { Те саме, що попередній приклад
    //   return;
    // }

    setModalUrl("");
  };
  return (
    <div className="App">
      <Searchbar
        onSetQuery={handleSetQuery}
        searchQuery={searchQuery}
        onSubmit={handleGetPictures}
      />
      {showLoader && <Loader />}
      <ImageGallery images={images} showModal={handleShowModal} />
      {images.length && <Button onLoadMore={handleLoadMore} />}
      {modalUrl && (
        <Modal modalUrl={modalUrl} onCloseModal={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
