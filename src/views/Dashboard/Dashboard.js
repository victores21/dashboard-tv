import React, { Fragment } from "react";
import useComponents from "../../components";
import useComponentHooks from "../../controllers/componentHooks";

//Styles
import "./dashboard.scss";

//Images
import HamburguerMenu from "../../assets/images/icons/hamburger.png";
import Avatar from "../../assets/images/avatar.png";
import useControllers from "../../controllers";
import NotFoundPoster from "../../assets/images/not-found-poster.jpg";
//Redux

const Dashboard = () => {
  const { Sidebar, MovieCard, MoviePoster } = useComponents();
  const { useSidebar } = useComponentHooks();
  const { handleIsSidebarOpen, isOpen, handleLogOut } = useSidebar();
  const { useScreenHooks } = useControllers();
  const { useDashboard } = useScreenHooks();

  //Page Hook
  const { showsStore, setSearch, search, handleSearch } = useDashboard();

  return (
    <div className="dashboard min-vh-100">
      <Sidebar
        isOpen={isOpen}
        onClose={handleIsSidebarOpen}
        onLogOut={handleLogOut}
      />
      <div className="container-fluid ">
        {/* NAV */}
        <div className="nav row  p-3">
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
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-white no-border"
                    placeholder="Search..."
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(event) => handleSearch(event)}
                    value={search}
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

        {!showsStore.loading && showsStore.type === "initial" && (
          <div className="content row px-4">
            <div className="slider pt-2 ">
              <p className="p-0 m-0 text-white">Hello User</p>

              <div className="movies-posters d-flex flex-wrap justify-content-center align-items-center pb-2">
                {!showsStore.loading &&
                  showsStore.shows.slice(0, 4).map((show) => (
                    <div key={show.id} className="mb-2 mr-2">
                      <MoviePoster
                        image={
                          show.image ? show.image.original : NotFoundPoster
                        }
                      />
                    </div>
                  ))}
              </div>
            </div>
            <div className="movies-grid-small d-flex align-items-center flex-column p-0 m-0 flex-md-row ">
              {showsStore.shows.slice(5, 9).map((show) => (
                <Fragment key={show.id}>
                  <MovieCard
                    name={show.name}
                    image={show.image ? show.image.original : NotFoundPoster}
                    categories={show.genres[0]}
                  />
                </Fragment>
              ))}
            </div>
            <div className="movies-grid-big  d-flex align-items-center flex-column w-100 p-0 m-0 flex-md-row ">
              <div className="big-movie-container mb-4 mb-md-0 h-100 ">
                <MovieCard
                  name={showsStore.shows[10] && showsStore.shows[10].name}
                  image={
                    showsStore.shows[10] && showsStore.shows[10].image.original
                  }
                  categories={
                    showsStore.shows[10] && showsStore.shows[10].genres[0]
                  }
                  size="big"
                  description={
                    showsStore.shows[10] &&
                    showsStore.shows[10].summary
                      .replace(/<[^>]+>/g, "")
                      .slice(0, 200)
                  }
                />
              </div>

              <div className="medium-movies-container h-100 d-md-flex flex-md-column ">
                {showsStore.shows.slice(11, 13).map((show) => (
                  <Fragment key={show.id}>
                    <MovieCard
                      name={show.name}
                      image={show.image ? show.image.original : NotFoundPoster}
                      categories={show.genres[0]}
                      size="medium"
                    />
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        )}
        {/* Content */}

        {!showsStore.loading && showsStore.type === "search" && (
          // Only Appears when is search
          <div className="container-fluid mt-3">
            <div class="row">
              {showsStore.shows.slice(0, 10).map((show) => (
                <div class="col-lg-6 col-md-12" key={("search-", show.id)}>
                  <MovieCard
                    name={show.name}
                    image={show.image ? show.image.original : NotFoundPoster}
                    categories={show.genres[0]}
                    size="medium"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <footer className="p-3 mt-3 text-white">
          @2022 MTH made with love
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
