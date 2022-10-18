import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gFetch } from "../../../../helpers/gFetch";
import ItemDetail from "../../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [evento, setEvento] = useState([]);
  const [loading, setLoading] = useState(true);

  const { eventID } = useParams();

  useEffect(() => {
    if (eventID) {
      gFetch() // simulacion de fetch -> mock
        .then((res) => setEvento(res.filter((evento) => evento.id == eventID)))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      gFetch() // simulacion de fetch -> mock
        .then((res) => setEvento(res))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [eventID]);
  return (
    <div>
      <ItemDetail evento={evento} />
    </div>
  );
};

export default ItemDetailContainer;
