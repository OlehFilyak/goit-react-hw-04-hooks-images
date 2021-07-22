import { useEffect } from "react";

function Modal({ selectedImg, tags, onClose }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.addEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <>
      <div className="Overlay" onClick={handleBackdropClick}>
        <div className="Modal">
          <img src={selectedImg} alt={tags} />
        </div>
      </div>
    </>
  );
}

export default Modal;
