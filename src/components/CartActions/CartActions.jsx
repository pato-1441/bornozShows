import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";

const CartActions = ({ cartList, totalPrice, emptyCart }) => {
  const [orderId, setOrderId] = useState("");

  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    mail: ""
  });

  const generateOrder = async (e) => {
    e.preventDefault();
    const order = {};

    order.buyer = {
      name: dataForm.name,
      phone: dataForm.phone,
      mail: dataForm.mail
    };

    order.date = new Date();

    order.items = cartList.map((prod) => {
      const { id, name: title, price, cantidad } = prod;
      return { id, title, price, cantidad };
    });

    order.total = totalPrice();

    setDataForm({
      name: "",
      phone: "",
      mail: "",
    });

    const db = getFirestore();
    //generar order
    const orders = collection(db, "orders");
    addDoc(orders, order)
      .then((res) => setOrderId(res.id))
      .catch((err) => console.log(err))
      .finally(() => emptyCart());
  };

  const handleInputChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <h2 className="pb-4 text-2xl">Terminar compra</h2>
        <form onSubmit={generateOrder}>
          <div className="form-control gap-2">
            <label className="input-group">
              <span>Nombre</span>
              <input
                type="text"
                placeholder="Nombre completo"
                name="name"
                value={dataForm.name}
                onChange={handleInputChange}
                className="input input-bordered"
                required
              />
            </label>
            <label className="input-group">
              <span>Email</span>
              <input
                type="mail"
                placeholder="john@doe.com"
                name="mail"
                value={dataForm.mail}
                onChange={handleInputChange}
                className="input input-bordered"
                required
              />
            </label>
            <label className="input-group">
              <span>Telefono</span>
              <input
                type="number"
                placeholder="Telefono"
                name="phone"
                value={dataForm.phone}
                onChange={handleInputChange}
                className="input input-bordered"
                required
              />
            </label>
          </div>
          <button
            className="btn glass mt-4 border-none bg-yellow-800 font-semibold text-white hover:bg-yellow-600"
            type="submit"
          >
            Finalizar compra
          </button>
        </form>
      </div>
      <div>
        {orderId && (
          <div className="card mt-5 w-80 bg-green-600 shadow-xl text-white">
            <figure className="mt-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-16 w-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </figure>
            <div className="card-body">
              <h2 className="card-title">¡Felicitaciones!</h2>
              <p>Su orden fue generada con exito: {orderId}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartActions;
