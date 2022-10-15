import React from "react";
import PropTypes from "prop-types";

//Hooks
import useControllers from "../../controllers";

//Images
import Avatar from "../../assets/images/avatar.png";
import HamburguerMenu from "../../assets/images/icons/hamburger.png";

const Navbar = ({ onSidebarOpen }) => {
  const { useScreenHooks } = useControllers();
  const { useDashboard } = useScreenHooks();

  const { setSearch, search, handleSearch } = useDashboard();

  return (
    <div className="nav row  p-3">
      <div className="col-12  d-flex align-items-center justify-content-between">
        <div className="left d-flex align-items-center">
          {/* Only in Mobile */}
          <div className="burguer-menu">
            <button onClick={onSidebarOpen}>
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
  );
};

Navbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};

export default Navbar;
