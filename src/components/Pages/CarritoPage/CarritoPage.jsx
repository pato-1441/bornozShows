import {
  addDoc,
  collection,
  doc,
  documentId,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
  writeBatch,
} from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/cartContext";

const CarritoPage = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    mail: "",
  });
  const { cartList, emptyCart, totalPrice } = useContext(CartContext);

  const generarOrden = async (e) => {
    e.preventDefault();
    const orden = {};

    orden.buyer = {
      name: dataForm.name,
      phone: dataForm.phone,
      mail: dataForm.mail,
    };

    orden.items = cartList.map((prod) => {
      const { id, name: title, price, cantidad } = prod;
      return { id, title, price, cantidad };
    });

    orden.total = totalPrice();

    const db = getFirestore();
    //generar order
    const orders = collection(db, "orders");
    addDoc(orders, orden)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .finally(()=>emptyCart());

    //update
    /* const orderDoc = doc(db, 'productos', 'DYIwfRcKG8vOLYJBP5WY');
    updateDoc(orderDoc, {
      stock:50
    })
    .then(resp=>console.log('Producto actualizado'))
    .catch(err=>console.log(err)); */

    //opcional

    //actualizar por lotes
    /* const queryCollection = collection(db, "productos");
    const queryUpdateStock = await query(
      queryCollection, //  => esto devuelve los id's de cartlist ['asdasdvbdbfgbd', 'kfogbmfopgberp']
      where(
        documentId(),
        "in",
        cartList.map((prod) => prod.id)
      )
    );

    const batch = writeBatch(db);
    await getDocs(queryUpdateStock).then((resp) =>
      resp.docs.forEach((res) =>
        batch.update(res.ref, {
          stock:
            res.data().stock -
            cartList.find((item) => item.id === res.id).cantidad,
        })
      )
    );
    batch.commit(); */
  };

  const handleInputChange=(e)=>{
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="mx-auto mt-5 w-2/3">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Disponibles</th>
              <th>Evento</th>
              <th>Categoria</th>
              <th>Cantidad</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartList.length === 0 ? (
              <tr>
                <th>Su carrito se encuentra vacío</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ) : (
              cartList.map((event) => (
                <tr key={event.id}>
                  <th>{event.stock}</th>
                  <td>{event.name}</td>
                  <td className="capitalize">{event.category}</td>
                  <td className="capitalize">{event.cantidad}</td>
                  <td>
                    <span className="rounded-box bg-gray-800 px-2 py-1 text-white">
                      ${event.price * event.cantidad}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-5">
        <div className="flex flex-col justify-between gap-y-2 sm:flex-row">
          <button
            className="btn glass btn-sm text-white shadow-xl"
            onClick={() => emptyCart()}
          >
            Vaciar Carrito
          </button>
          <div className="flex items-center gap-4">
            <p>
              <span className="rounded-lg bg-gray-700 px-2 py-1 font-semibold">
                Total: ${totalPrice()}
              </span>
            </p>
            <button className="btn btn-sm bg-green-800 text-white shadow-xl hover:bg-green-700">
              Finalizar Compra
            </button>
          </div>
        </div>
        {/* form datos para order */}
        <form onSubmit={generarOrden} className="text-black">
          <input type="text" placeholder="Nombre" name="name" value={dataForm.name} onChange={handleInputChange}/>
          <input type="text" placeholder="Teléfono" name="phone" value={dataForm.phone} onChange={handleInputChange}/>
          <input type="mail" placeholder="Email" name="mail" value={dataForm.mail} onChange={handleInputChange}/>
          <button type="submit">Generar orden</button>
        </form>
      </div>
    </div>
  );
};

export default CarritoPage;
