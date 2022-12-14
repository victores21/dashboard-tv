import React from "react";
//Styles
import "./loading.scss";

const Loading = () => {
  return (
    <div className="loading d-flex position-fixed  w-100 h-100 justify-content-center align-items-center">
      <div className="spinner-grow text-light" role="status"></div>
    </div>
  );
};

export default Loading;
