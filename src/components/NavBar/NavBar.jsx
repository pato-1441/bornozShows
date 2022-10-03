import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import bornozTicketsLogo from "./assets/bornozTickets.png";

const NavBar = () => {
  return (
    <div>
      <div className="mt-6 flex items-center justify-between px-16 pb-6">
        <div className="flex items-center gap-6">
          <img src={bornozTicketsLogo} className="w-16" />
          <h1 className="font-semibold">Bornoz Tickets</h1>
        </div>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Eventos</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
          <CartWidget />
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
