const CartTableList = ({cartList, emptyCart, totalPrice }) => {
  return (
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
      <div className="mt-4 flex flex-col justify-between gap-y-2 sm:flex-row">
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
        </div>
      </div>
    </div>
  );
};

export default CartTableList;
