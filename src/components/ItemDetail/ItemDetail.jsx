import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ evento }) => {
  const [loading, setLoading] = useState(true);
  console.log(evento);
  const [eventoDetalle = [], setEvento] = useState(evento);
  useEffect(() => {
    setEvento(...evento);
  }, [evento]);

  console.log(eventoDetalle);

  return (
    <div>
      <div key={eventoDetalle.id} className="p-2">
        <div className="card-compact card w-64 bg-base-100 shadow-xl">
          <figure>
            <img src={eventoDetalle.image} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{eventoDetalle.name}</h2>
            <span className="text-xs">{eventoDetalle.category}</span>
            <p>${eventoDetalle.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
