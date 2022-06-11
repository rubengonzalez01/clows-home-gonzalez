import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { AppContext } from '../../context/CartContext';
import CartModal from '../CartModal/CartModal';
import styles from './CartWidget.module.scss';

export default function CartWidget() {
  let [cartVisible, setCartVisible] = useState(false); 
  const { totalQuantity } = useContext(AppContext);

  const showCart = () => {
    setCartVisible(!cartVisible);
    if(cartVisible){
      document.body.style.overflow = 'visible';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }

  return (
    <div className={ styles.cart }>
      <button onClick={showCart} className={ styles.action }><FiShoppingCart />Carrito</button>
      <div className={ styles.counter }>
        <span>{ totalQuantity() }</span>
      </div>
      <CartModal show={cartVisible} onHide={showCart} />
    </div>
  );
}

CartWidget.propTypes = {
  count: PropTypes.number
}