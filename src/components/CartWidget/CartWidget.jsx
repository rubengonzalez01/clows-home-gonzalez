import PropTypes from 'prop-types';
import { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import CartModal from '../CartModal/CartModal';
import styles from './CartWidget.module.scss';

export default function CartWidget({ count = 0 }) {
  let [cartVisible, setCartVisible] = useState(false); 

  const showCart = () => {
    setCartVisible(!cartVisible);
  }

  return (
    <div className={ styles.cart }>
      <button onClick={showCart} className={ styles.action }><FiShoppingCart />Carrito</button>
      <div className={ styles.counter }>
        <span>{ count }</span>
      </div>
      <CartModal show={cartVisible} onHide={showCart} />
    </div>
  );
}

CartWidget.propTypes = {
  count: PropTypes.number
}