import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gFetch } from "../../../../helpers/gFetch";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ItemList from "../../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryID } = useParams();

  useEffect(()=>{
    const db = getFirestore();
    const queryCollection = collection(db, 'productos');
    getDocs(queryCollection)
    .then(res=>setProductos(res.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
    .catch((err) => console.log(err))
    .finally(() => setLoading(false));
  }, [])

/*   useEffect(() => {
    if (categoryID) {
      gFetch() // simulacion de fetch -> mock
        .then((res) =>
          setProductos(res.filter((prod) => prod.category === categoryID))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      gFetch() // simulacion de fetch -> mock
        .then((res) => setProductos(res))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [categoryID]); */
  
  return (
    <>
      <h1 className="py-5 text-center text-3xl font-semibold">{greeting}</h1>
      <div className="rounded-box mx-auto grid w-2/3 grid-cols-1 gap-x-5 gap-y-5 sm:gap-y-0 sm:bg-gray-700 md:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <button className="btn loading col-span-3 border-none bg-inherit text-white">
            Cargando
          </button>
        ) : (
          <ItemList productos={productos} />
        )}
      </div>
    </>
  );
};

export default ItemListContainer;
