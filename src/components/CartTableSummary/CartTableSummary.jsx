import { FaRegTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import styles from './CartTableSummary.module.scss';

export default function CartTableSummary() {
  const navigate = useNavigate();
  const { totalPrice, setCheckout, clear } = useCartContext();

  const handleClick = () => {
    setCheckout(false);
    navigate('/');
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
          <span className={ styles.cartTableSummary__values_subtotal }>${ totalPrice() }</span>
        </div>
        <div className={ styles.cartTableSummary__values_wrapper }>
          <span className={ styles.cartTableSummary__values_subtotal }>Gastos de envío</span>
          <span className={ styles.cartTableSummary__values_subtotal }>Gratis</span>
        </div>
        <div className={ styles.cartTableSummary__values_wrapper_total }>
          <span className={ styles.cartTableSummary__values_total }>TOTAL</span>
          <span className={ styles.cartTableSummary__values_total }>${ totalPrice() }</span>
        </div>
        <div className={ styles.cartTableSummary__button_container }>
          <button className={`btn btn-lg btn-block w-100 ${ styles.cartTableSummary__button_primary }`}>Procesar Compra</button>
        </div>
        <div className={ styles.cartTableSummary__button_container }>
          <button onClick={ handleClick } className={`btn btn-lg btn-block w-100 ${ styles.cartTableSummary__button_secondary }`}>Seguir Comprando</button>
        </div>
      </div>
    </div>
  );
}