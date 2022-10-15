import React from "react";
import PropTypes from "prop-types";

//Styles
import "./sidebar.scss";

const Sidebar = ({ isOpen, onClose, onLogOut }) => {
  return (
    <div className={`sidebar  ${isOpen && "sidebar--open"}`}>
      <div className="sidebar-close-button ">
        <button className="" onClick={onClose}>
          X
        </button>
      </div>

      <ul className="sidebar-menu-items">
        <li>Menu Item</li>
      </ul>

      <div className="p-4">
        <button type="button" className="btn btn-light " onClick={onLogOut}>
          Log Out
        </button>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onLogOut: PropTypes.func,
};

export default Sidebar;
