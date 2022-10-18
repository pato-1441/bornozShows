import { createContext, useState } from "react"

const CartContext = createContext([])

export {CartContext}

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const addItem = (producto) => {
        setCartList( [...cartList, producto] )
    }

    const vaciarCarrito = () => {
        setCartList([])
    }

    return (
    <CartContext.Provider value={{
        cartList,
        addItem,
        vaciarCarrito
    }}>
        {children}
    </CartContext.Provider>
    )
}

export default CartContextProvider