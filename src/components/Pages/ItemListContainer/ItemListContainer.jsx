import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bringProducts from "../../../../helpers/bringProducts";
import ItemList from "../../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryID } = useParams();

  useEffect(() => {
    bringProducts(setProducts, setLoading, categoryID);
  }, [categoryID]);

  return (
    <>
      <h1 className="py-5 text-center text-3xl font-semibold">{greeting}</h1>
      <div className="rounded-box mx-auto grid w-2/3 grid-cols-1 gap-x-5 gap-y-5 sm:gap-y-0 sm:bg-gray-700 md:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <button className="btn btn-xl text-xl loading col-span-3 border-none bg-inherit text-white">
            Cargando
          </button>
        ) : (
          <ItemList products={products} />
        )}
      </div>
    </>
  );
};

export default ItemListContainer;