import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import bornozTicketsLogo from "/assets/bornozTickets.png";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl"><img src={bornozTicketsLogo} className="w-16"/></a>
          <h1 className="font-semibold">Bornoz Tickets</h1>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li><a>Inicio</a></li>
            <li><a>Eventos</a></li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </div>
  );
};

export default NavBar;
