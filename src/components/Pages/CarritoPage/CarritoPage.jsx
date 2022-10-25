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
import { useContext, useEffect } from "react";
import { CartContext } from "../../../context/cartContext";

const CarritoPage = () => {
  const { cartList, vaciarCarrito, precioTotal } = useContext(CartContext);

  const generarOrden = async (e) => {
    const orden = {};

    orden.buyer = {
      name: "Jorge",
      phone: "3434892651",
      email: "jorge@mail.com",
    };

    orden.items = cartList.map((prod) => {
      const { id, name: title, price } = prod;
      return { id, title, price };
    });

    orden.total = precioTotal();

    const db = getFirestore();
    /* const orders = collection(db, 'orders');
    addDoc(orders, orden)
    .then(res=>console.log(res))
    .catch(err=>console.log(err)) */

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
              cartList.map((evento) => (
                <tr key={evento.id}>
                  <th>{evento.stock}</th>
                  <td>{evento.name}</td>
                  <td className="capitalize">{evento.category}</td>
                  <td className="capitalize">{evento.cantidad}</td>
                  <td>
                    <span className="rounded-box bg-gray-800 px-2 py-1 text-white">
                      ${evento.price * evento.cantidad}
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
            onClick={() => vaciarCarrito()}
          >
            Vaciar Carrito
          </button>
          <div className="flex gap-4 items-center">
            <p><span className="bg-gray-200 rounded-lg px-2 py-1 text-black font-semibold">Total: ${precioTotal()}</span></p>
            <button
              className="btn btn-sm bg-green-800 text-white shadow-xl hover:bg-green-700"
              onClick={() => generarOrden()}
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarritoPage;
