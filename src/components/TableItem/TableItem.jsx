import { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useCartContext } from '../../context/CartContext';
import Counter from '../Counter/Counter';
import styles from './TableItem.module.scss';

export default function TableItem({ item }) {
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
        <tr>
          <td className={ styles.tableItem__body_data }>
            <img className={ styles.tableItem__body_img} src={ item.image } alt={ item.name } /> 
            <span>{ item.name }</span>
          </td>
          <td className={ styles.tableItem__body_data }>$ { currency.format(item.price) }</td>
          <td className={ styles.tableItem__body_data }>
            <div className={ styles.tableItem__counter }>
              <Counter count={ count } handleCountPlus={ handleCountPlus } handleCountMinus={ handleCountMinus } />
            </div>
          </td>
          <td className={ styles.tableItem__body_data }>$ { currency.format(item.total_price) }</td>
          <td className={ styles.tableItem__body_data }>
            <button onClick={() => removeItem(item.id) } className={ styles.tableItem__remove_btn }>
              <FaRegTrashAlt />
            </button>
          </td>
        </tr>
  );
}