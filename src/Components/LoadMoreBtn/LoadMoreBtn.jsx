import PropTypes from "prop-types";

import css from "./LoadMoreBtn.module.css";

export default function Button({ onClick }) {
  return (
    <button type="button" onClick={onClick} className={css.Button}>
      Load more...
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
