import {
  doc,
  getDoc,
  getFirestore,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [evento, setEvento] = useState([]);
  const [loading, setLoading] = useState(true);

  const { eventID } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db, "productos", eventID);

    getDoc(queryDoc)
      .then(res => setEvento({ id: res.id, ...res.data() }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  /* useEffect(() => {
    if (eventID) {
      gFetch(eventID) // simulacion de fetch -> mock
        .then((res) => setEvento(res))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [eventID]); */

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
          <ItemDetail evento={evento} />
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
