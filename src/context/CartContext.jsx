import { createContext, useEffect, useState } from "react";


export const CartStore = createContext();

export const CartProvider = ({children}) =>{
    const [cartItems,setCartItems] = useState(localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[])
    const  [isInCart,setIsInCart] = useState(null)
    const [showCart,setShowCart] = useState(false)
    useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(cartItems))
    },[cartItems])
    const handleDecrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1}: item,
      ).filter((item) => item.quantity > 0),
      
    );
    setIsInCart(null)
  };
  const handleRemove = (id)=>{
    setCartItems((prev)=>
      prev.filter((item)=>item.id!==id)
    )
    setIsInCart(null)
  }
  const handleIncrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };
    return (
        <CartStore.Provider value={{cartItems,setCartItems,isInCart,setIsInCart,handleDecrement,handleIncrement,showCart,setShowCart,handleRemove}}>
            {children}
        </CartStore.Provider>
    )
}