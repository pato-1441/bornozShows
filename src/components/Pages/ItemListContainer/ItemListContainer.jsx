import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { gFetch } from "../../../../helpers/gFetch";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const {categoryID} = useParams();
  console.log(categoryID);

  useEffect(() => {
    if (categoryID) {
      gFetch() // simulacion de fetch -> mock
        .then((res) => setProductos(res.filter(prod=>prod.category===categoryID)))
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-2/3 mx-auto">
        {loading ? (
          <button className="btn loading border-none bg-inherit col-span-3 pt-20">
            Cargando
          </button>
        ) : (
          productos.map(
            (prod) => (
              <div key={prod.id} className='p-2'>                
                <div className="card-compact card w-64 bg-base-100 shadow-xl">
                  <figure>
                    <img src={prod.image} />
                  </figure>
                  <Link to={`/detail/${prod.id}`}>
                    <div className="card-body">
                      <h2 className="card-title">{prod.name}</h2>
                      <span className="text-xs">{prod.category}</span>
                      <p>${prod.price}</p>
                    </div>
                  </Link>
                </div>   
              </div>
            )
          )
        )}
      </div>
    </>
  );
};

export default ItemListContainer;
