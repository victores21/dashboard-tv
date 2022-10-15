import React from "react";
import PropTypes from "prop-types";

//Styles
import "./movie_card.scss";

const MovieCard = ({ image, name, categories, size, description }) => {
  return (
    <div
      className={`card d-flex flex-row justify-content-between mb-2  ${
        size === "medium" && "card--medium"
      } ${size === "big" && "card--big"}`}
    >
      <div className="overview">
        <img src={image} alt="movie poster" className="w-100 h-100 " />
      </div>
      <div className="card-right p-2 d-flex justify-content-center flex-column align-items-start">
        <div className="name">{name}</div>
        <div className="categories d-none d-lg-block">{categories}</div>
        {size === "big" && (
          <div className="description mt-2">{description}...</div>
        )}
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
