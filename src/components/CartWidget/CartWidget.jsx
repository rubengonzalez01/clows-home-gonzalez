import PropTypes from 'prop-types';
import { FiShoppingCart } from 'react-icons/fi';
import styles from './CartWidget.module.scss';

export default function CartWidget({ count = 0 }) {
  return (
    <div className={ styles.cart }>
      <button className={ styles.action }><FiShoppingCart />Carrito</button>
      <div className={ styles.counter }>
        <span>{ count }</span>
      </div>
    </div>
  );
}

CartWidget.propTypes = {
  count: PropTypes.number
}