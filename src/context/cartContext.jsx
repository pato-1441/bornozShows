import { createContext, useState } from "react"

const CartContext = createContext([])

export {CartContext}

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const addItem = (producto) => {
        setCartList( [...cartList, producto] )
    }

    const precioTotal = () => {
        return cartList.reduce((acum, prod) => acum + (prod.cantidad * prod.price) , 0)
    }

    const vaciarCarrito = () => {
        setCartList([])
    }

    return (
    <CartContext.Provider value={{
        cartList,
        addItem,
        precioTotal,
        vaciarCarrito
    }}>
        {children}
    </CartContext.Provider>
    )
}

export default CartContextProvider