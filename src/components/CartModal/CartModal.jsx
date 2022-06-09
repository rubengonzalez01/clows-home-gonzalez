import styles from './CartModal.module.scss';
import { IoClose } from 'react-icons/io5';
import { FiShoppingCart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export default function CartModal(props) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('carrito');
    props.onHide();
  }

  return (
    <>
      {
        props.show ?    
            <div  className={ styles.cartModal }>
              <div onClick={props.onHide} className={ styles.cartModal__empty }></div>
              <div className={ styles.cartModal__container }>
                <div className={ styles.cartModal__wrapper }>
                  <div className={ styles.cartModal__header }>
                    <div className={ styles.cartModal__close }>
                      <button className={ styles.cartModal__close_btn } onClick={props.onHide}>
                        <IoClose />
                      </button>
                    </div>
                    <h3 className={ styles.cartModal__title }>CARRITO</h3>
                  </div>

                  
                  <div className={ styles.cartModal__body }>
                    <div className={ styles.cartModal__cart_empty }>
                      <FiShoppingCart />
                      <span className={ styles.cartModal__cart_empty_text }>Su carrito está vacío</span>
                    </div>
                  </div>
                  <div className={ styles.cartModal__footer }>
                    <div className={ styles.cartModal__total }>
                      <span>Subtotal: </span>
                      <h5 className={ styles.cartModal__total_text }>Total: </h5>
                    </div>
                    <div className={ styles.cartModal__button_container }>
                      <button onClick={ handleClick } className='btn btn-secondary btn-lg btn-block'>Comprar</button>
                    </div>
                  </div>        
                </div>
              </div>
            </div>
        : null
      }
    </>
  );
}