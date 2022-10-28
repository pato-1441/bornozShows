import { Link } from "react-router-dom";

const CartTableList = ({ cartList, emptyCart, totalPrice }) => {
  return (
    <div className="overflow-x-auto">
      <div className="flex items-center justify-between mb-4">
        <Link
          to="/"
          className="btn btn-sm glass text-white shadow-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Regresar al catálogo
        </Link>
        <button
          className="btn btn-sm text-white shadow-xl"
          onClick={() => emptyCart()}
        >
          Vaciar Carrito
        </button>
      </div>
      <div>
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
        <div className="mt-4 flex flex-col justify-between gap-y-2 sm:flex-row">
          <div className="flex items-center gap-4">
            <p>
              <span className="rounded-lg bg-gray-700 px-2 py-1 font-semibold">
                Total: ${totalPrice()}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTableList;
