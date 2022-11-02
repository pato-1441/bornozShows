import { Link } from "react-router-dom";

const Item = ({ prod }) => {
  return (
    <div className="sm:m-6">
      <div className="card-compact card w-full bg-slate-900 shadow-xl transition-transform hover:scale-105">
        <Link to={`/detail/${prod.id}`}>
          <figure>
            <img src={prod.image} />
          </figure>
          <div className="card-body flex flex-row justify-between">
            <h2 className="card-title">
              {prod.name}
              <span className="badge badge-sm border-none bg-slate-700 uppercase text-white">
                {prod.category}
              </span>
            </h2>
          </div>
          <div className="flex flex-row px-4 text-sm">
            {prod.description}
          </div>
          <div className="card-body flex flex-col justify-between">
            <p className="flex justify-between">
              <span className="rounded-lg bg-slate-600 px-2 pt-1 font-semibold">
                Ver más
              </span>
              <span className="rounded-lg bg-slate-600 p-1 font-semibold">
                ${prod.price}
              </span>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Item;
