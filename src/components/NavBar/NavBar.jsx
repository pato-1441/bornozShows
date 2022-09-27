import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <div>
        <div className='flex justify-between px-16 pb-6 mt-6 items-center'>
          <div className='flex items-center gap-6'>
            <img src='src/assets/bornozTickets.png' className='w-16'/>
            <h1 className="font-semibold">Bornoz Tickets</h1>
          </div>
            <ul className='flex gap-4 items-center'>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Eventos</a></li>
                <li><a href="#">Contacto</a></li>
                <CartWidget/>
            </ul>
        </div>    
    </div>
  );
};

export default NavBar;