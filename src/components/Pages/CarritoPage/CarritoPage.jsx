import { useContext } from "react";
import { CartContext } from "../../../context/cartContext";

const CarritoPage = () => {
  const { cartList, vaciarCarrito } = useContext(CartContext);
  console.log(cartList);

  return (
      <div className="mx-auto mt-5 w-2/3">

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Disponibles</th>
                <th>Evento</th>
                <th>Categoria</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartList.map((evento)=>
                <tr key={evento.id}>
                  <th>{evento.stock}</th>
                  <td>{evento.name}</td>
                  <td className="capitalize">{evento.category}</td>
                  <td>${evento.price}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>  

        <div className="mt-5">
          <button className="btn btn-sm glass text-white" onClick={()=>vaciarCarrito()}>Vaciar Carrito</button>
        </div>

      </div>
  );
};

export default CarritoPage;
