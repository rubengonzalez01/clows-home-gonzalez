import styles from './ItemMiniCard.module.scss';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { AppContext } from '../../context/CartContext';
import Counter from '../Counter/Counter';

export default function ItemMiniCard({ item }){
  const { removeItem, addQuantity, subtractQuantity } = useContext(AppContext);
  let [count, setCount] = useState(item.quantity);

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
          <span className={ styles.itemMiniCard__price }>${ item.price }</span>
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