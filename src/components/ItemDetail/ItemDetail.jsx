import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cartContext";

const ItemDetail = ({ evento }) => {
  const [loading, setLoading] = useState(true);
  const [eventoDetalle = [], setEvento] = useState(evento);
  useEffect(() => {
    setEvento(...evento);
  }, [evento]);

  const {addItem , cartList} = useContext(CartContext)

  const onAdd = (cantidad) => {
    console.log('onAdd',cantidad);
    addItem( {...eventoDetalle, cantidad} )
  }
  console.log(cartList)

  return (
    <div className="hero mx-auto mt-10 max-h-screen w-100 sm:w-2/3">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <img
          src={eventoDetalle.image}
          className="max-w-xs sm:max-w-md rounded-lg shadow-xl hover:scale-105 transition-transform"
        />
        <div>
          <h1 className="text-5xl font-bold">{eventoDetalle.name}</h1>
          <h2 className="text-lg font-base uppercase">{eventoDetalle.category}</h2>
          <p className="py-6 text-sm sm:text-base">{eventoDetalle.description}</p>
          <button className="p-2 bg-slate-600 rounded-lg font-semibold" onClick={()=>onAdd()}>${eventoDetalle.price}</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
