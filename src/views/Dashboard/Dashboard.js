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
        <div className="content row px-3">
          <div className="slider">Slide 1</div>

          <div className="movies-grid-small d-flex align-items-center flex-column p-0 m-0 flex-md-row ">
            <div className="card">
              <div className="overview">Overview</div>
              <div className="card-right">Card</div>
            </div>
            <div className="card">Card</div>
            <div className="card">Card</div>
            <div className="card">Card</div>
          </div>

          <div className="movies-grid-big d-flex align-items-center flex-column w-100 p-0 m-0 flex-md-row ">
            <div className="big-movie-container h-100 ">
              <div className="big-movie card card--big">big Movie</div>
            </div>

            <div className="medium-movies-container h-100 d-md-flex flex-md-column ">
              <div className="small-movie card card--medium">Movie</div>
              <div className="small-movie card card--medium">Movie</div>
            </div>
          </div>
        </div>

        <footer className="p-3 bg-danger mt-3">@2022 MTH made with love</footer>
      </div>
    </div>
  );
};

export default Dashboard;
