import React from "react";
import bornozTicketsLogo from "/assets/bornozTickets.png";

const NotFound = () => {
  return (
    <div className="mt-20 flex flex-col sm:flex-row w-full items-center justify-center gap-20">
      <div className="flex flex-col gap-5 items-center text-center sm:items-start">
        <div className="w-32">
          <img
            className="w-full"
            src={bornozTicketsLogo}
            alt="Logo de Bornoz Tickets"
          />
        </div>
        <p className="text-5xl sm:text-7xl font-semibold">404. Not found</p>
        <div>
          <p className="text-7xl font-light"></p>
          <p className="text-4xl font-light">
            La direccion URL requerida no fue encontrada.
          </p>
        </div>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={0.9}
          stroke="currentColor"
          className="h-52 w-52"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
          />
        </svg>
      </div>
    </div>
  );
};

export default NotFound;
