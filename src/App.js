import { useState } from "react";

import ImageGallery from "./Components/ImageGallery";
// import ImageGalleryItem from "./Components/ImageGalleryItem";
// import Loader from "./Components/Loader";
// import Modal from "./Components/Modal";
import Button from "./Components/Button";
import Searchbar from "./Components/Searchbar";

import getPictures from "./helpers/fetch";

import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [pageQuery, setPageQuery] = useState(1);
  const [images, setImages] = useState([]);

  const handleSetQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleGetPictures = async (e) => {
    e.preventDefault();
    setPageQuery(1);
    // getPictures(searchQuery, pageQuery);

    const {
      data: { hits },
    } = await getPictures(searchQuery, 1);
    // console.log(resp); Потім
    setImages(hits);
    setPageQuery((prevPage) => prevPage + 1);
  };

  const handleLoadMore = async () => {
    const {
      data: { hits },
    } = await getPictures(searchQuery, pageQuery);
    // console.log(hits);
    setImages((prevState) => [...prevState, ...hits]);
    setPageQuery((prevPage) => prevPage + 1);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Searchbar
        onSetQuery={handleSetQuery}
        searchQuery={searchQuery}
        onSubmit={handleGetPictures}
      />
      <ImageGallery images={images} />
      <Button onLoadMore={handleLoadMore} />
      {/* <Modal/> */}
    </div>
  );
}

export default App;
