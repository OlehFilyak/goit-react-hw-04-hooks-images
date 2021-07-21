import Loader from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const Spinner = () => {
  //other logic
  return (
    <div
      style={{
        position: "absolute",
        top: "50vh",
        left: "50vw",
      }}
    >
      <Loader
        type="TailSpin"
        color="#000000"
        height={100}
        width={100}
        // timeout={3000} //3 secs
      />
    </div>
  );
};

export default Spinner;
