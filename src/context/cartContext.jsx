import { createContext, useState } from "react";

const CartContext = createContext([]);

export { CartContext };

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  localStorage.setItem('cartlist', JSON.stringify(cartList));

  const addItem = (product) => {
    const index = cartList.findIndex((prod) => product.id === prod.id);

    if (index === -1) {
      setCartList([...cartList, product]);
    } else {
      cartList[index].cantidad += product.cantidad;
      setCartList([...cartList]);
    }
  };

  const removeItem = (id) => {
    setCartList(cartList.filter((prod) => prod.id !== id));
  };

  const totalPrice = () => {
    return cartList.reduce(
      (acum, prod) => acum + prod.cantidad * prod.price,
      0
    );
  };

  const totalQuantity = () => {
    return cartList.reduce((acum, prod) => (acum += prod.cantidad), 0); // acum = acum + cantidad
  };

  const emptyCart = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addItem,
        totalPrice,
        totalQuantity,
        emptyCart,
        removeItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
