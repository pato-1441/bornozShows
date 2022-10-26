import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "../../ItemDetail/ItemDetail";

import bringProduct from "../../../../helpers/bringProduct";

const ItemDetailContainer = () => {
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);

  const { eventID } = useParams();

  useEffect(() => {
    bringProduct(setEvent, setLoading, eventID);
  }, []);

  return (
    <>
      {loading ? (
        <div className="rounded-box mx-auto mt-10 grid w-2/3 bg-gray-700">
          <button className="btn loading col-span-3 border-none bg-inherit text-white">
            Cargando
          </button>
        </div>
      ) : (
        <div>
          <ItemDetail event={event} />
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
