import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";

const CartActions = ({ cartList }) => {
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    mail: "",
  });

  const generateOrder = async (e) => {
    e.preventDefault();
    const order = {};

    order.buyer = {
      name: dataForm.name,
      phone: dataForm.phone,
      mail: dataForm.mail,
    };

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
      .then((res) => console.log(res))
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
                type="text"
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
            className="btn glass mt-2 border-none bg-yellow-800 font-semibold text-white hover:bg-yellow-600"
            type="submit"
          >
            Finalizar compra
          </button>
        </form>
      </div>
    </div>
  );
};

export default CartActions;
