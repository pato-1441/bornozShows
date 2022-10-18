import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ evento }) => {
  const [eventoDetalle = [], setEvento] = useState(evento);
  useEffect(() => {
    setEvento(...evento);
  }, [evento]);

  const { addItem, cartList } = useContext(CartContext);

  const onAdd = (cantidad) => {
    addItem({ ...eventoDetalle, cantidad });
  };

  return (
    <div className="w-100 mx-auto w-2/3 mt-10 h-screen">
      <div className="flex flex-col gap-10 lg:flex-row">
        <img
          src={eventoDetalle.image}
          className="max-w-xs h-fit rounded-lg shadow-xl transition-transform hover:scale-105 sm:max-w-md"
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
            <ItemCount onAdd={onAdd} stock={eventoDetalle.stock} init={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
