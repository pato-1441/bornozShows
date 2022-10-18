import { useState } from "react";

const ItemCount = ({ stock, init, onAdd }) => {
  const [count, setCount] = useState(init);

  const handlePlus = () => count < stock && setCount(count + 1);

  const handleSubstract = () => count > init && setCount(count - 1);

  const handleAdd = (count) => onAdd(count);

  return (
    <div>
      <button onClick={handlePlus}>+</button>
      <p>{count}</p>
      <button onClick={handleSubstract}>-</button>
      <button
        onClick={() => handleAdd(count)}
        className="btn glass flex items-center gap-1 border-none bg-yellow-800 font-semibold text-white hover:bg-yellow-600"
      >
        Añadir al carrito
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default ItemCount;
