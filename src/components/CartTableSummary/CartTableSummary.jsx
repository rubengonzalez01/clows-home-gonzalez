import { FaRegTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import styles from './CartTableSummary.module.scss';

export default function CartTableSummary() {
  const navigate = useNavigate();
  const { totalPrice, setCheckout, clear } = useCartContext();
  const currency = Intl.NumberFormat('de-DE');

  const goToHome = () => {
    setCheckout(false);
    navigate('/');
  }

  const goToForm = () => {
    navigate('/checkout/form');
  }

  return (
    <div className={ styles.cartTableSummary }>
      <div className={ styles.cartTableSummary__remove }>
        <button onClick={ () => clear() } className={`btn ${ styles.cartTableSummary__remove_btn }`}>
          <FaRegTrashAlt /> Limpiar carrito
        </button>
      </div>
      <div className={ styles.cartTableSummary__total_container }>
        <div className={ styles.cartTableSummary__values_wrapper }>
          <span className={ styles.cartTableSummary__values_subtotal }>Subtotal</span>
          <span className={ styles.cartTableSummary__values_subtotal }>$ { currency.format(totalPrice()) }</span>
        </div>
        <div className={ styles.cartTableSummary__values_wrapper }>
          <span className={ styles.cartTableSummary__values_subtotal }>Gastos de envío</span>
          <span className={ styles.cartTableSummary__values_subtotal }>Gratis</span>
        </div>
        <div className={ styles.cartTableSummary__values_wrapper_total }>
          <span className={ styles.cartTableSummary__values_total }>TOTAL</span>
          <span className={ styles.cartTableSummary__values_total }>$ { currency.format(totalPrice()) }</span>
        </div>
        <div className={ styles.cartTableSummary__button_container }>
          <button onClick={ goToForm } className={`btn btn-lg btn-block w-100 ${ styles.cartTableSummary__button_primary }`}>Procesar compra</button>
        </div>
        <div className={ styles.cartTableSummary__button_container }>
          <button onClick={ goToHome } className={`btn btn-lg btn-block w-100 ${ styles.cartTableSummary__button_secondary }`}>Seguir comprando</button>
        </div>
      </div>
    </div>
  );
}