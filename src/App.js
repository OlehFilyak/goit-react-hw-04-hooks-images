import { useState } from "react";

import ImageGallery from "./Components/ImageGallery";
// import ImageGalleryItem from "./Components/ImageGalleryItem";
// import Loader from "./Components/Loader";
// import Modal from "./Components/Modal";
import Button from "./Components/Button";
import Searchbar from "./Components/Searchbar";

import "./App.css";

function App() {
  const [searchQuery, SetSearchQuery] = useState("");

  return (
    <div className="App">
      <Searchbar />
      <ImageGallery />
      <Button />
      {/* <Modal/> */}
    </div>
  );
}

export default App;
