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
                <th>Cantidad</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              { cartList.length===0 ?
                <tr>
                  <th>Su carrito se encuentra vacío</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                  :
                cartList.map((evento)=>
                  <tr key={evento.id}>
                    <th>{evento.stock}</th>
                    <td>{evento.name}</td>
                    <td className="capitalize">{evento.category}</td>
                    <td className="capitalize">{evento.cantidad}</td>
                    <td><span className="bg-gray-800 text-white px-2 py-1 rounded-box">${(evento.price*evento.cantidad)}</span></td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>  

        <div className="mt-5">
          <div className="flex flex-col sm:flex-row justify-between gap-y-2">
            <button className="btn btn-sm glass text-white shadow-xl" onClick={()=>vaciarCarrito()}>Vaciar Carrito</button>
            <button className="btn btn-sm bg-green-800 hover:bg-green-700 text-white shadow-xl">Finalizar Compra</button>
          </div>
        </div>

      </div>
  );
};

export default CarritoPage;
