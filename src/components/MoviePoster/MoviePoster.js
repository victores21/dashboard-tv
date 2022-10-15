import React from "react";
import PropTypes from "prop-types";

//Styles
import "./movie_poster.scss";

const MoviePoster = ({ image }) => {
  return (
    <div className="movie-poster m-2">
      <img src={image} alt="movie poster " className="w-100" />
    </div>
  );
};

MoviePoster.propTypes = {
  image: PropTypes.string,
};
export default MoviePoster;
