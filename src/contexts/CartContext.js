import React, { createContext, useState, useEffect } from "react";

//cartContext
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  //cart state
  const [cart, setCart] = useState([]);

  //item count shopping bag state
  const [itemCount, setItemCount] = useState(0);

  //total price state
  const [totalPrice , setTotalPrice] = useState(0);

  //update the totalPrice by useEffect
  useEffect( () => {
   if(cart){
      let totalMoney = 0;
      cart.forEach( (item) => {
      totalMoney += (item.amount * item.price );
    })
    setTotalPrice(parseFloat(totalMoney).toFixed(2));
   }
  }, [cart]);

  //update the item count by useEffect -> dependency would be cart array
  useEffect(() => {
    if (cart && cart.length !== itemCount) {
      //check if itemCount not equal to cart length
      setItemCount(cart.length);
    } else {
    }
  }, [cart]);

  //add to cart
  const addToCart = (product, id) => {
    //Invoked when somone presses the + icon from home screen or sidebar
    const newItem = { ...product, amount: 1 }; //shallow copy i.e by reference

    //check if item is alraedy in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
      //if not found then cartItem will be undefined
    });

    //if item is already there then we have to update our cart with amount +1
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else return item;
      });
      console.log("item already exist", newCart.length);
      setCart(newCart); //simply update the Cart with the new cart
    } else {
      //we have selected different product in the cart
      //so just add the newItem in the existing cart
      setCart([...cart, newItem]);

      /* array spread syntax that creates a new array. It takes the existing elements in the cart array (represented by ...cart) and appends a new element newCart to the end of the new array.*/
    }
    setItemCount(cart.length);
  };

  //remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setItemCount(itemCount - 1);
    setCart(newCart);
  };

  //decrease count of item
  const decreaseCount = (product, id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
      //if not found then cartItem will be undefined
    });

    if (cartItem) {
      if (cartItem.amount > 1) {
        const newCart = [...cart].map((item) => {
          if (item.id === id && cartItem.amount !== 0) {
            //we have to decrease the amount by 1 and take care if it is not zero
            return { ...item, amount: cartItem.amount - 1 };
          }
        });
        setCart(newCart);
      } else if (cartItem.amount <= 1) {
        removeFromCart(id);
      }
    }
  };
  //clear cart
  const clearCart = () => {
    setItemCount(0);
    setCart([]);
  };

  // console.log(`Length of cart ${cart.length}`);
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        decreaseCount,
        itemCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
