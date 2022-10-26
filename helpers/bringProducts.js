import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const bringProducts = (setProductos, setLoading, categoryID) => {
  const db = getFirestore();
  const queryCollection = collection(db, "productos");
  const queryFiltered = categoryID
    ? query(queryCollection, where("category", "==", categoryID))
    : queryCollection;

  getDocs(queryFiltered)
    .then((res) =>
      setProductos(res.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
    )
    .catch((err) => console.log(err))
    .finally(() => setLoading(false));
};

export default bringProducts;
