import React, { useContext } from "react";
import "./Style/navbar.scss";

import { Authoentication } from "./Context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useContext(Authoentication);

  return (
    <div>
      <div className="navbarContainer">
        <div className="navbarItem">
          <ul className="listitem">
            <Link to="/home">
              <li>Home</li>
            </Link>
            <Link to="/dish">
              <li>DishData</li>
            </Link>
            <Link to="/admin">
              <li>UserAdmin</li>
            </Link>
          </ul>
        </div>
        <div className="end-list-item">
          <ul className="listitem2">
            <li>{user}</li>
            <Link to="/login">
              <li>Logout</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
