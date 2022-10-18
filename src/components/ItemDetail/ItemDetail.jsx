import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cartContext";

const ItemDetail = ({ evento }) => {
  const [loading, setLoading] = useState(true);
  const [eventoDetalle = [], setEvento] = useState(evento);
  useEffect(() => {
    setEvento(...evento);
  }, [evento]);

  const { addItem, cartList } = useContext(CartContext);

  const onAdd = (cantidad) => {
    console.log("onAdd", cantidad);
    addItem({ ...eventoDetalle, cantidad });
  };
  console.log(cartList);

  return (
    <div className="w-100 mx-auto w-2/3 mt-10 h-screen">
      <div className="flex flex-col gap-10 lg:flex-row">
        <img
          src={eventoDetalle.image}
          className="max-w-xs rounded-lg shadow-xl transition-transform hover:scale-105 sm:max-w-md"
        />
        <div>
          <h1 className="text-5xl font-bold">{eventoDetalle.name}</h1>
          <h2 className="font-base text-lg uppercase">
            {eventoDetalle.category}
          </h2>
          <p className="py-6 text-sm sm:text-base">
            {eventoDetalle.description}
          </p>
          <div className="flex flex-col gap-4 justify-between">
            <div className="flex justify-between">
              <span className="rounded-lg bg-slate-600 p-2 py-3 font-semibold text-white">
                ${eventoDetalle.price}
              </span>
              <span className="rounded-lg bg-slate-600 p-2 py-3 font-semibold text-white">
                Disponibles: {eventoDetalle.stock}
              </span>
            </div>
            <button onClick={() => onAdd()} className="btn glass border-none text-white bg-yellow-800 hover:bg-yellow-600 font-semibold flex items-center gap-1">
              Añadir al carrito
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
