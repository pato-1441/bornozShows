import { createContext, useState } from "react"

const CartContext = createContext([])

export {CartContext}

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const addItem = (product) => {
        setCartList( [...cartList, product] )
    }

    const totalPrice = () => {
        return cartList.reduce((acum, prod) => acum + (prod.cantidad * prod.price) , 0)
    }

    const totalQuantity = () => {
        return cartList.reduce((acum, prod) => acum += prod.cantidad , 0)// acum = acum + cantidad
    }

    const emptyCart = () => {
        setCartList([])
    }

    return (
    <CartContext.Provider value={{
        cartList,
        addItem,
        totalPrice,
        totalQuantity,
        emptyCart
    }}>
        {children}
    </CartContext.Provider>
    )
}

export default CartContextProvider