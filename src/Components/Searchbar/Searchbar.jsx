import { useState } from "react";
import { onShowInfoNotification } from "../../services/notifications/notifications";

export default function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchQuery.trim() === "") {
      onShowInfoNotification();
      return;
    }

    onSubmit(searchQuery);
    resetState();
  };

  const resetState = () => {
    setSearchQuery("");
  };

  return (
    <>
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={handleSearchQuery}
            value={searchQuery}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </>
  );
}
