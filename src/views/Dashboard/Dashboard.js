import React from "react";
import useComponents from "../../components";
import useComponentHooks from "../../controllers/componentHooks";
import "./dashboard.scss";

//Images
import HamburguerMenu from "../../assets/images/icons/hamburger.png";
import Avatar from "../../assets/images/avatar.png";

const Dashboard = () => {
  const { Sidebar } = useComponents();
  const { useSidebar } = useComponentHooks();
  const { handleIsSidebarOpen, isOpen } = useSidebar();
  return (
    <div className="dashboard ">
      {/* <div className="sidebar">Sidebar</div> */}
      <Sidebar isOpen={isOpen} onClose={handleIsSidebarOpen} />
      <div className="container-fluid ">
        <div className="nav row bg-danger p-3">
          <div className="col-12  d-flex align-items-center justify-content-between">
            <div className="left d-flex align-items-center">
              {/* Only in Mobile */}
              <div className="burguer-menu">
                <button onClick={handleIsSidebarOpen}>
                  <img
                    src={HamburguerMenu}
                    alt="Hamburguer Icon"
                    title="Opens sidebar"
                  />
                </button>
              </div>
              {/* End mobile */}

              <div className="search-input">
                <div class="input-group">
                  <input
                    type="text"
                    className="form-control bg-white no-border"
                    placeholder="Search..."
                  />
                </div>
              </div>
            </div>

            <div className="user-image">
              <img
                src={Avatar}
                alt="user avatar"
                title="user avatar"
                className="w-100 h-100"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="content row px-4">
          <div className="slider">Slide 1</div>

          <div className="movies-grid-small d-flex align-items-center flex-column p-0 m-0 flex-md-row ">
            <div className="card">
              <div className="overview">
                <img
                  src="https://static.tvmaze.com/uploads/images/original_untouched/0/224.jpg"
                  alt="movie poster"
                />
              </div>
              <div className="card-right">
                <div className="name">Constantine</div>
                <div className="categories d-none d-lg-block">
                  Horror · Thriller · Supernatural
                </div>
              </div>
            </div>
            <div className="card">
              <div className="overview">
                <img
                  src="https://static.tvmaze.com/uploads/images/medium_portrait/423/1058582.jpg"
                  alt="movie poster"
                />
              </div>
              <div className="card-right">
                <div className="name">The Amazing Race</div>
                <div className="categories d-none d-lg-block">
                  Action · Adventure · Family
                </div>
              </div>
            </div>
            <div className="card">
              <div className="overview">
                <img
                  src="https://static.tvmaze.com/uploads/images/medium_portrait/423/1058582.jpg"
                  alt="movie poster"
                />
              </div>
              <div className="card-right">
                <div className="name">The Amazing Race</div>
                <div className="categories d-none d-lg-block">
                  Action · Adventure · Family
                </div>
              </div>
            </div>

            <div className="card">
              <div className="overview">
                <img
                  src="https://static.tvmaze.com/uploads/images/medium_portrait/423/1058582.jpg"
                  alt="movie poster"
                />
              </div>
              <div className="card-right">
                <div className="name">The Amazing Race</div>
                <div className="categories d-none d-lg-block">
                  Action · Adventure · Family
                </div>
              </div>
            </div>
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
