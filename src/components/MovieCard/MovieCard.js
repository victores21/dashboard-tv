import React from "react";
import PropTypes from "prop-types";

//Styles
import "./movie_card.scss";

const MovieCard = ({ image, name, categories, size, description }) => {
  return (
    <div
      className={`card ${size === "medium" && "card--medium"} ${
        size === "big" && "card--big"
      }`}
    >
      <div className="overview">
        <img src={image} alt="movie poster" />
      </div>
      <div className="card-right">
        <div className="name">{name}</div>
        <div className="categories d-none d-lg-block">{categories}</div>
        {size === "big" && <div className="description">{description}...</div>}
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  categories: PropTypes.string,
  size: PropTypes.string,
};

export default MovieCard;
