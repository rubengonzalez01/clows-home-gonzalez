import CartTable from '../../components/CartTable/CartTable';
import styles from './Cart.module.scss';

export default function Cart() {
  return (
    <div className={`pt-4 pb-5 ${ styles.cart }`}>
      <CartTable />
    </div>
  );  
}