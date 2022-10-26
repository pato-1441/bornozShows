import { doc, getDoc, getFirestore } from "firebase/firestore";

const bringProduct = (setEvent, setLoading, eventID) => {
  const db = getFirestore();
  const queryDoc = doc(db, "productos", eventID);

  getDoc(queryDoc)
    .then((res) => setEvent({ id: res.id, ...res.data() }))
    .catch((err) => console.log(err))
    .finally(() => setLoading(false));
};

export default bringProduct;
