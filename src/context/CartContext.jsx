import { useState, createContext, useContext, useEffect } from 'react';

const CartProvider = ({ children }) => {
  const [itemList, setItemList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [checkout, setCheckout] = useState(false);
  
  const addItem = (item) => {
    let itemListAux = itemList.slice();
    if(isInCart(item.id)){
      let idx = itemList.findIndex(prod => prod.id === item.id);
      itemListAux[idx].quantity = itemListAux[idx].quantity + item.quantity;
      itemListAux[idx].total_price = itemListAux[idx].quantity * itemListAux[idx].price;
    } else {
      itemListAux.push(item);
    }
    setItemList(itemListAux);
    localStorage.setItem('cartItemList', JSON.stringify(itemListAux));
  }
  
  const removeItem = (itemId) => {
    const itemListAux = itemList.filter(item => item.id !== itemId);
    setItemList(itemListAux);
    localStorage.setItem('cartItemList', JSON.stringify(itemListAux));
  }

  const isInCart = (itemId) => {
    return itemList.some(item => item.id === itemId);
  }

  const clear = () => {
    setItemList([]);
    localStorage.setItem('cartItemList', JSON.stringify([]));
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
      localStorage.setItem('cartItemList', JSON.stringify(itemListAux));
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
      localStorage.setItem('cartItemList', JSON.stringify(itemListAux));
      setCount(itemListAux[idx].quantity);
    }
  }

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('cartItemList'));
    if(storage){
      setItemList(storage);
    }
  }, []);

  return (
    <CartContext.Provider 
      value={ 
        { 
          itemList, 
          addItem, 
          totalPrice, 
          totalQuantity, 
          isInCart, 
          clear, 
          removeItem, 
          addQuantity, 
          subtractQuantity,
          checkout,
          setCheckout,
          searchQuery,
          setSearchQuery
        } 
    }>
      { children }
    </CartContext.Provider>
  );
}

export default CartProvider;

export const useCartContext = () => {
  return useContext(CartContext);
}

export const CartContext = createContext();