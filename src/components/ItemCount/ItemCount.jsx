import { useState } from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';
import styles from './ItemCount.module.scss';

export default function ItemCount ({ initial, stock, addToCart }) {
  let [count, setCount] = useState(initial);

  const handleCountPlus = () => {
    if(count < stock){ 
      setCount(count + 1);
    }
  }

  const handleCountMinus = () => {
    if(count > 1){
      setCount(count - 1);
    }
  }

  return (    
    <div className={ styles.itemCounter }>
      <div className={ styles.itemCounter__pannel }>
        <button onClick={handleCountMinus} className={ styles.itemCounter__button }>
          <BiMinus />
        </button>
        <span className={ styles.itemCounter__count }>{count}</span>
        <button onClick={handleCountPlus} className={ styles.itemCounter__button }>
          <BiPlus />
        </button>
      </div>
      <div className={ styles.itemCounter__add_cart }>
        <button onClick={ () => addToCart(count) } className='btn btn-lg btn-block w-100'>Agregar al carrito</button>
      </div>
    </div>
  );
}