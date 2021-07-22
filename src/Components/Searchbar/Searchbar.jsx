import { useState } from "react";
import { onShowInfoNotification } from "../../services/notifications/notifications";

import css from "./Searchbar.module.css";

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
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={handleSubmit}>
          <input
            onChange={handleSearchQuery}
            value={searchQuery}
            className={css.SearchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />

          <button type="submit" className={css.SearchForm__button}>
            <span className={css.SearchForm__button_label}>Search</span>
          </button>
        </form>
      </header>
    </>
  );
}
