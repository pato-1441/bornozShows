import { useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import CartActions from "../../CartActions/CartActions";
import CartTableList from "../../CartTableList/CartTableList";

const CartPage = () => {
  const { cartList, emptyCart, totalPrice, removeItem } = useContext(CartContext);

  return (
    <div className="w-full flex justify-center mt-10 text-xl">
      <div className="flex gap-8">
        <CartTableList
          cartList={cartList}
          emptyCart={emptyCart}
          totalPrice={totalPrice}
          removeItem={removeItem}
        />
        <CartActions cartList={cartList} totalPrice={totalPrice} emptyCart={emptyCart} />
      </div>
    </div>
  );
};

export default CartPage;
