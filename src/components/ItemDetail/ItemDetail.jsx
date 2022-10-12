import { useEffect, useState } from "react";

const ItemDetail = ({ evento }) => {
  const [loading, setLoading] = useState(true);
  console.log(evento);
  const [eventoDetalle = [], setEvento] = useState(evento);
  useEffect(() => {
    setEvento(...evento);
  }, [evento]);

  console.log(eventoDetalle);

  return (
    <div className="hero mx-auto mt-10 max-h-screen w-2/3">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={eventoDetalle.image}
          className="max-w-xs sm:max-w-md rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{eventoDetalle.name}</h1>
          <h2 className="text-lg font-base uppercase">{eventoDetalle.category}</h2>
          <p className="py-6">{eventoDetalle.description}</p>
          <button className="p-2 bg-slate-600 rounded-lg font-semibold">${eventoDetalle.price}</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
