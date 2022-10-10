import React from "react";
import { Link } from "react-router-dom";

import CartWidget from "../CartWidget/CartWidget";

import bornozTicketsLogo from "/assets/bornozTickets.png";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl normal-case">
            <img src={bornozTicketsLogo} className="w-16" />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <Link to="/eventos">Eventos</Link>
          </ul>
        </div>
        <CartWidget />
      </div>
    </div>
  );
};

export default NavBar;
