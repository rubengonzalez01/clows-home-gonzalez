import CartForm from '../../components/CartForm/CartForm';
import PurchaseSummary from '../../components/PurchaseSummary/PurchaseSummary';
import styles from './Checkout.module.scss';

export default function Checkout() {
  return (
    <div className={`pt-4 pb-5`}>
      <div className='container'>
        <h3 className={ styles.checkout__title }>Finalizar la compra</h3>
        <div className={ styles.checkout__container }>
          <CartForm />
          <PurchaseSummary />
        </div>
      </div>
    </div>
  );
}

