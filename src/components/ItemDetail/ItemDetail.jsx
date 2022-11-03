import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ event }) => {
  const [eventDetail = [], setEvent] = useState(event);

  useEffect(() => {
    setEvent(event);
  }, [event]);

  const [isCount, setIsCount] = useState(true);
  const { addItem } = useContext(CartContext);

  const onAdd = (cantidad) => {
    addItem({ ...eventDetail, cantidad });
    setIsCount(false);
  };

  return (
    <div className="w-100 mx-auto mt-10 w-2/3">
      <div className="flex flex-col gap-10 lg:flex-row">
        <div className="flex flex-col gap-6">          
          <Link to="/" className="btn bg-base-100 border-none text-white shadow-xl w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </Link>
          <img
            src={eventDetail.image}
            className="h-fit max-w-xs rounded-lg shadow-xl transition-transform hover:scale-105 sm:max-w-md"
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold">{eventDetail.name}</h1>
          <h2 className="font-base text-lg uppercase">
            {eventDetail.category}
          </h2>
          <p className="py-6 text-sm sm:text-base">{eventDetail.description}</p>
          <div className="flex flex-col">
            <div>
              <div className="flex justify-between pb-3">
                <span className="rounded-lg bg-slate-600 p-2 py-3 font-semibold text-white">
                  ${eventDetail.price}
                </span>
                <span className="rounded-lg bg-slate-600 p-2 py-3 font-semibold text-white">
                  Disponibles: {eventDetail.stock}
                </span>
              </div>
              {isCount ? (
                <ItemCount
                  onAdd={onAdd}
                  stock={eventDetail.stock}
                  init={1}
                  eventDetail={eventDetail}
                />
              ) : (
                <div className="flex gap-2">
                  <Link
                    to={"/"}
                    className="btn w-1/2 border-none bg-pink-800 font-semibold text-white hover:bg-pink-600"
                  >
                    Seguir comprando
                  </Link>
                  <Link
                    to={"/cart"}
                    className="btn glass w-1/2 border-none bg-green-800 font-semibold text-white hover:bg-green-600"
                  >
                    Ir al carrito
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
