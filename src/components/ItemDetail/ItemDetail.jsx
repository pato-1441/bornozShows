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
    <div className="w-100 hero mx-auto mt-10 max-h-screen sm:w-2/3">
      <div className="hero-content flex-col gap-10 lg:flex-row">
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
          <button
            className="rounded-lg bg-slate-600 p-2 font-semibold"
            onClick={() => onAdd()}
          >
            ${eventoDetalle.price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
