import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import PurchaseSummaryItem from '../PurchaseSummaryItem/PurchaseSummaryItem';
import styles from './PurchaseSummary.module.scss';

export default function PurchaseSummary() {
  const { itemList, totalPrice } = useCartContext();
  const navigate = useNavigate();

  const goCart = () => {
    navigate('/checkout/cart');
  }

  return (
    <div className={ styles.purchaseSummary }>
      <h5 className={ styles.purchaseSummary__title }>Resumen de la compra</h5>
      <div className={ styles.purchaseSummary__item_container }>
        {
          itemList.map(item => (<PurchaseSummaryItem key={ item.id } item={ item } />))
        }
      </div>
      <div className={ styles.purchaseSummary__total_container }>
        <div className={ styles.purchaseSummary__values_wrapper }>
          <span className={ styles.purchaseSummary__values_subtotal }>Subtotal</span>
          <span className={ styles.purchaseSummary__values_subtotal }>${ totalPrice() }</span>
        </div>
        <div className={ styles.purchaseSummary__values_wrapper }>
          <span className={ styles.purchaseSummary__values_subtotal }>Gastos de envío</span>
          <span className={ styles.purchaseSummary__values_subtotal }>Gratis</span>
        </div>
        <div className={ styles.purchaseSummary__values_wrapper_total }>
          <span className={ styles.purchaseSummary__values_total }>TOTAL</span>
          <span className={ styles.purchaseSummary__values_total }>${ totalPrice() }</span>
        </div>
        <div className={ styles.purchaseSummary__button_container }>
          <button onClick={ goCart } className={`btn btn-lg btn-block w-100 ${ styles.purchaseSummary__button_secondary }`}>Volver al carrito</button>
        </div>
      </div>
    </div>
  )
}