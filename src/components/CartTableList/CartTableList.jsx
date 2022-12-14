import { Link } from "react-router-dom";

const CartTableList = ({ cartList, emptyCart, totalPrice, removeItem }) => {
  return (
    <div className="overflow-x">
      <div className="mb-4 flex items-center justify-between px-4 sm:px-0">
        <Link to="/" className="btn glass btn-sm text-white shadow-xl">
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
        {cartList.length !== 0 && (
          <button
            className="btn btn-sm text-white shadow-xl"
            onClick={() => emptyCart()}
          >
            Vaciar Carrito
          </button>
        )}
      </div>
      <div>
        <div className="flex flex-col gap-4 sm:hidden">
          {cartList.length === 0 ? (
            <div className="rounded-box m-4 bg-base-100 p-4 text-base font-light">
              Su carrito se encuentra vacío
            </div>
          ) : (
            cartList.map((event) => (
              <div className="w-full px-4" key={event.id}>
                <div className="card card-compact bg-gray-900 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">
                      {event.name}{" "}
                      <span className="badge capitalize text-white">
                        {event.category}
                      </span>
                    </h2>
                    <div className="mt-4 flex justify-between">
                      <p>
                        <span className="rounded-lg bg-gray-600 px-2 py-1">
                          {event.cantidad}u.
                        </span>
                      </p>
                      <div className="flex items-center rounded-lg bg-gradient-to-tr from-blue-900 to-blue-500 px-2 py-1 font-semibold">
                        ${event.price * event.cantidad}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="hidden sm:flex">
          <table className="table-normal table w-full">
            <thead>
              <tr>
                <th>Disponibles</th>
                <th>Evento</th>
                <th>Categoria</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartList.length === 0 ? (
                <tr>
                  <td>Su carrito se encuentra vacío</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ) : (
                cartList.map((event) => (
                  <tr key={event.id}>
                    <td>{event.stock}</td>
                    <td>{event.name}</td>
                    <td className="capitalize">{event.category}</td>
                    <td>{event.cantidad}u.</td>
                    <td>
                      <span className="rounded-lg bg-gradient-to-tr from-blue-900 font-semibold to-blue-500 px-2 py-1 text-white">
                        ${event.price * event.cantidad}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm"
                        onClick={() => removeItem(event.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-5 w-5 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex flex-col justify-between gap-y-2 sm:flex-row">
          {cartList.length !== 0 && (
            <div className="flex items-center gap-4 px-4 sm:px-0">
              <span className="rounded-lg bg-gray-700 px-2 py-1 font-semibold">
                Total: ${totalPrice()}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartTableList;
