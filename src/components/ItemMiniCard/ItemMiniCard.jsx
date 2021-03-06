import styles from './ItemMiniCard.module.scss';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import Counter from '../Counter/Counter';

export default function ItemMiniCard({ item }){
  const { removeItem, addQuantity, subtractQuantity } = useCartContext();
  let [count, setCount] = useState(item.quantity);
  const currency = Intl.NumberFormat('de-DE');

  const handleCountPlus = () => {
    addQuantity(item, setCount);
  }

  const handleCountMinus = () => {
    subtractQuantity(item, setCount);
  }

  return (
    <div className={ styles.itemMiniCard }>
      <div className={ styles.itemMiniCard__wrapper }>
        <div className={ styles.itemMiniCard__image_container }>
          <img className={ styles.itemMiniCard__image } src={ item.image } alt={ item.title } />
        </div>
        <div className={ styles.itemMiniCard__data }>
          <h5 className={ styles.itemMiniCard__title }>{ item.name }</h5>
          <div className={ styles.itemMiniCard__counter }>
            <Counter count={ count } handleCountPlus={ handleCountPlus } handleCountMinus={ handleCountMinus } />
          </div>
          <span className={ styles.itemMiniCard__price }>$ { currency.format(item.price) }</span>
        </div>
        <div className={ styles.itemMiniCard__remove }>
          <button onClick={() => removeItem(item.id) } className={ styles.itemMiniCard__remove_btn }>
            <FaRegTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
}