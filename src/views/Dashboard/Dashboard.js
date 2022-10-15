import React, { Fragment } from "react";
import useComponents from "../../components";
import useComponentHooks from "../../controllers/componentHooks";

//Styles
import "./dashboard.scss";

//Images
// import HamburguerMenu from "../../assets/images/icons/hamburger.png";
// import Avatar from "../../assets/images/avatar.png";
import useControllers from "../../controllers";
import NotFoundPoster from "../../assets/images/not-found-poster.jpg";

const Dashboard = () => {
  // Hooks
  const { Sidebar, MovieCard, MoviePoster, Loading, Navbar } = useComponents();
  const { useSidebar } = useComponentHooks();
  const { handleIsSidebarOpen, isOpen, handleLogOut } = useSidebar();
  const { useScreenHooks } = useControllers();
  const { useDashboard } = useScreenHooks();

  //Page Hook
  const { showsStore, pagination, setPagination } = useDashboard();

  return (
    <div className="dashboard min-vh-100">
      <Sidebar
        isOpen={isOpen}
        onClose={handleIsSidebarOpen}
        onLogOut={handleLogOut}
      />
      <div className="container-fluid ">
        <Navbar onSidebarOpen={handleIsSidebarOpen} />

        {!showsStore.loading && showsStore.type === "initial" && (
          <div className="row px-4">
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

            <div className="container-fluid mt-3">
              <div className="row">
                {showsStore.shows
                  .slice(13, showsStore.shows.length)
                  .map((show) => (
                    <div
                      className="col-lg-6 col-md-12"
                      key={("search-", show.id)}
                    >
                      <MovieCard
                        name={show.name}
                        image={
                          show.image ? show.image.original : NotFoundPoster
                        }
                        categories={show.genres[0]}
                        size="medium"
                      />
                    </div>
                  ))}
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-12 d-flex justify-content-center align-items-center">
                  <button
                    className="btn btn-dark"
                    onClick={() => setPagination((prev) => prev - 1)}
                    disabled={pagination <= 0}
                  >
                    Prev
                  </button>
                  <p className="m-0 px-5">{pagination}</p>
                  <button
                    className="btn btn-dark"
                    onClick={() => setPagination((prev) => prev + 1)}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Content */}
        {!showsStore.loading && showsStore.type === "search" && (
          // Only Appears when is search
          <div className="container-fluid mt-3">
            <div className="row">
              {showsStore.shows.slice(0, 10).map((show) => (
                <div className="col-lg-6 col-md-12" key={("search-", show.id)}>
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
        <footer className="p-3 mt-3 text-white">@2022 Víctor Escalona</footer>
      </div>
      {showsStore.loading && <Loading />}
    </div>
  );
};

export default Dashboard;
