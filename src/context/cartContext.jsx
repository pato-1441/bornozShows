import { createContext, useState } from "react"

const CartContext = createContext([])

export {CartContext}

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const addItem = (producto) => {
        setCartList( [...cartList, producto] )
    }

    return (
    <CartContext.Provider value={{
        cartList,
        addItem
    }}>
        {children}
    </CartContext.Provider>
    )
}

export default CartContextProvider