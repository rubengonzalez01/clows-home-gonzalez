import { useState, createContext, useContext } from 'react';

const CartProvider = ({ children }) => {
  const [itemList, setItemList] = useState([]);

  const addItem = (item) => {
    if(isInCart(item.id)){
      let itemListAux = itemList.slice();
      let idx = itemList.findIndex(prod => prod.id === item.id);
      itemListAux[idx].quantity = itemListAux[idx].quantity + item.quantity;
      itemListAux[idx].total_price = itemListAux[idx].quantity * itemListAux[idx].price;
      setItemList(itemListAux);
    } else {
      setItemList([...itemList, item]);
    }
  }
  
  const removeItem = (itemId) => {
    setItemList(itemList.filter(item => item.id !== itemId));
  }

  const isInCart = (itemId) => {
    return itemList.some(item => item.id === itemId);
  }

  const clear = () => {
    setItemList([]);
  }

  const totalPrice = () => {
    return itemList.reduce((acc, prod) => acc += (prod.price * prod.quantity), 0);
  }

  const totalQuantity = () => {
    return itemList.reduce((acc, prod) => acc += prod.quantity, 0);
  }

  const addQuantity = (item, setCount) => {
    if(item.quantity < item.stock){
      let itemListAux = itemList.slice();
      let idx = itemList.findIndex(prod => prod.id === item.id);
      itemListAux[idx].quantity = itemListAux[idx].quantity + 1;
      itemListAux[idx].total_price = itemListAux[idx].quantity * itemListAux[idx].price;
      setItemList(itemListAux);
      setCount(itemListAux[idx].quantity);
    }
  }

  const subtractQuantity = (item, setCount) => {
    if(item.quantity === 1) {
      removeItem(item.id);
    } else {
      let itemListAux = itemList.slice();
      let idx = itemList.findIndex(prod => prod.id === item.id);
      itemListAux[idx].quantity = itemListAux[idx].quantity - 1;
      itemListAux[idx].total_price = itemListAux[idx].quantity * itemListAux[idx].price;
      setItemList(itemListAux);
      setCount(itemListAux[idx].quantity);
    }
  }

  return (
    <CartContext.Provider value={ {itemList, addItem, totalPrice, totalQuantity, isInCart, clear, removeItem, addQuantity, subtractQuantity} }>
      { children }
    </CartContext.Provider>
  );
}

export default CartProvider;

export const useCartContext = () => {
  return useContext(CartContext);
}

export const CartContext = createContext();