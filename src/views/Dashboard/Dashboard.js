import React from "react";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard ">
      <div className="sidebar">Sidebar</div>
      <div className="container">
        <div className="nav row bg-danger">
          <div className="col-12  d-flex align-items-center justify-content-between">
            <div className="left d-flex align-items-center">
              {/* Only in Mobile */}
              <div className="burger-menu">Menu Burguer</div>
              {/* Ends Mobile */}

              <div className="search-input">
                <input type="text" placeholder="Search..." />
              </div>
            </div>

            <div className="user-image">Your face</div>
          </div>
        </div>

        {/* Content */}
        <div className="content row">
          <div className="slider">Slide 1</div>

          <div className="movies-grid-small  ">
            <div className="card">
              <div className="overview">Overview</div>
              <div className="card-right">Card</div>
            </div>
            <div className="card">Card</div>
            <div className="card">Card</div>
            <div className="card">Card</div>
          </div>

          <div className="movies-grid-big">
            <div className="big-movie-container">
              <div className="big-movie card card--big">big Movie</div>
            </div>

            <div className="medium-movies-container">
              <div className="small-movie card card--medium">Movie</div>
              <div className="small-movie card card--medium">Movie</div>
            </div>
          </div>
        </div>

        <footer>@2022 MTH made with love</footer>
      </div>
    </div>
  );
};

export default Dashboard;
