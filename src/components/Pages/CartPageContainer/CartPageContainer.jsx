import {
  addDoc,
  collection,
  doc,
  documentId,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
  writeBatch,
} from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/cartContext";
import CartActions from "../../CartActions/CartActions";
import CartTableList from "../../CartTableList/CartTableList";

const CartPage = () => {
  const { cartList, emptyCart, totalPrice, removeItem } = useContext(CartContext);

  //update
  /* const orderDoc = doc(db, 'productos', 'DYIwfRcKG8vOLYJBP5WY');
    updateDoc(orderDoc, {
      stock:50
    })
    .then(resp=>console.log('Producto actualizado'))
    .catch(err=>console.log(err)); */

  //opcional

  //actualizar por lotes
  /* const queryCollection = collection(db, "productos");
    const queryUpdateStock = await query(
      queryCollection, //  => esto devuelve los id's de cartlist ['asdasdvbdbfgbd', 'kfogbmfopgberp']
      where(
        documentId(),
        "in",
        cartList.map((prod) => prod.id)
      )
    );

    const batch = writeBatch(db);
    await getDocs(queryUpdateStock).then((resp) =>
      resp.docs.forEach((res) =>
        batch.update(res.ref, {
          stock:
            res.data().stock -
            cartList.find((item) => item.id === res.id).cantidad,
        })
      )
    );
    batch.commit(); */

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
