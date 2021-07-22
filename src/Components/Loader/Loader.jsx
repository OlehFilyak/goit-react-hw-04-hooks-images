import Loader from "react-loader-spinner";

import css from "./Loader.module.css";
const Spinner = () => {
  return (
    <div className={css.Loder__container}>
      <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default Spinner;
