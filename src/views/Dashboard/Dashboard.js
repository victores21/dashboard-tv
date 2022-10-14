import React, { useEffect, useState, Fragment } from "react";
import useComponents from "../../components";
import useComponentHooks from "../../controllers/componentHooks";
import "./dashboard.scss";

//Images
import HamburguerMenu from "../../assets/images/icons/hamburger.png";
import Avatar from "../../assets/images/avatar.png";

const Dashboard = () => {
  const { Sidebar, MovieCard } = useComponents();
  const { useSidebar } = useComponentHooks();
  const { handleIsSidebarOpen, isOpen } = useSidebar();

  //State
  const [shows, setShows] = useState([]);
  const getShows = async () => {
    const req = await fetch("https://api.tvmaze.com/shows?page=0");
    const res = req.json();
    return res;
  };

  useEffect(() => {
    getShows().then((res) => setShows(res));
  }, []);

  return (
    <div className="dashboard ">
      {/* <div className="sidebar">Sidebar</div> */}
      <Sidebar isOpen={isOpen} onClose={handleIsSidebarOpen} />
      <div className="container-fluid ">
        {/* NAV */}
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
        {}
        {/* Content */}
        <div className="content row px-4">
          <div className="slider">Slide 1</div>

          <div className="movies-grid-small d-flex align-items-center flex-column p-0 m-0 flex-md-row ">
            {shows.slice(0, 4).map((show) => (
              <Fragment key={show.id}>
                <MovieCard
                  name={show.name}
                  image={show.image.original}
                  categories={show.genres[0]}
                />
              </Fragment>
            ))}
          </div>

          <div className="movies-grid-big  d-flex align-items-center flex-column w-100 p-0 m-0 flex-md-row ">
            <div className="big-movie-container mb-4 mb-md-0 h-100 ">
              <MovieCard
                name={shows[5] && shows[5].name}
                image={shows[5] && shows[5].image.original}
                categories={shows[5] && shows[5].genres[0]}
                size="big"
                description={
                  shows[5] &&
                  shows[5].summary.replace(/<[^>]+>/g, "").slice(0, 200)
                }
              />
            </div>

            <div className="medium-movies-container h-100 d-md-flex flex-md-column ">
              {shows.slice(6, 8).map((show) => (
                <Fragment key={show.id} className="w-100 mb-2 ">
                  <MovieCard
                    name={show.name}
                    image={show.image.original}
                    categories={show.genres[0]}
                    size="medium"
                  />
                </Fragment>
              ))}
            </div>
          </div>
        </div>

        <footer className="p-3 bg-danger mt-3">@2022 MTH made with love</footer>
      </div>
    </div>
  );
};

export default Dashboard;
