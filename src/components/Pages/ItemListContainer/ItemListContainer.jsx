import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { gFetch } from "../../../../helpers/gFetch";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryID } = useParams();
  console.log(categoryID);

  useEffect(() => {
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
  }, [categoryID]);

  //console.log(productos);
  return (
    <>
      <h1 className="py-5 text-center text-3xl">{greeting}</h1>
      <div className="mx-auto grid w-2/3 grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {loading ? (
          <button className="btn loading col-span-3 border-none bg-inherit pt-20">
            Cargando
          </button>
        ) : (
          productos.map((prod) => (
            <div key={prod.id} className="p-2">
              <div className="card-compact card w-64 bg-base-100 shadow-xl">
                <Link to={`/detail/${prod.id}`}>
                  <figure>
                    <img src={prod.image} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{prod.name}</h2>
                    <span className="text-sm capitalize">{prod.category}</span>
                    <p>${prod.price}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ItemListContainer;
