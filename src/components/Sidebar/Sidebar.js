import React from "react";

import "./sidebar.scss";
import PropTypes from "prop-types";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen && "sidebar--open"}`}>
      <div className="sidebar-close-button">
        <button onClick={onClose}>X</button>
      </div>

      <ul className="sidebar-menu-items">
        <li>Item One</li>
        <li>Item Two</li>
        <li>Item Three</li>
        <li>Item Four</li>
        <li>Item Five</li>
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Sidebar;
