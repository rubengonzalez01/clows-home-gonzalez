import { useParams } from 'react-router-dom';
import { BsCheck2Circle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import styles from './PurchaseStatus.module.scss';
import { useCartContext } from '../../context/CartContext';

export default function PurchaseStatus() {
  const { orderId } = useParams();
  const { setCheckout } = useCartContext();
  const navigate = useNavigate()

  const handleClick = () => {
    setCheckout(false);
    navigate('/');
  }
  
  return (
    <div className="pt-4 pb-5">
      <div className={`container ${ styles.purchaseStatus }`}>
        <BsCheck2Circle />
        <h2 className={ styles.purchaseStatus__title }>¡Gracias por su compra!</h2>
        <div className={ styles.purchaseStatus__info }>
          <p className={ styles.purchaseStatus__text }>El proceso fue exitoso</p>
          <p className={ styles.purchaseStatus__text }>Su número de orden es: <b>{ orderId }</b></p>
        </div>
        <button onClick={ handleClick } className={`btn btn-lg btn-block ${ styles.purchaseStatus__button_primary }`} >
          Volver al inicio
        </button>
      </div>
    </div>
  );
}