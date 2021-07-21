import React from "react";

function Button({ onLoadMore }) {
  return (
    <>
      <button type="button" onClick={onLoadMore}>
        Load more...
      </button>
    </>
  );
}

export default Button;
