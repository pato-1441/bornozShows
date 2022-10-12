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
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={eventoDetalle.image}
            className="max-w-md rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{eventoDetalle.name}</h1>
            <h2 className="text-lg font-base uppercase">{eventoDetalle.category}</h2>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">${eventoDetalle.price}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
