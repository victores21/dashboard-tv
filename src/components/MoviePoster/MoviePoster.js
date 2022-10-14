import React from "react";
import PropTypes from "prop-types";

//Styles
import "./movie_poster.scss";

const MoviePoster = ({ image }) => {
  return (
    <div className="movie-poster">
      <img src={image} alt="movie poster" />
    </div>
  );
};

MoviePoster.propTypes = {
  image: PropTypes.string,
};
export default MoviePoster;
