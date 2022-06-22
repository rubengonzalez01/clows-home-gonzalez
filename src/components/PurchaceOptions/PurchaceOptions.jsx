import styles from './PurchaceOptions.module.scss';
import { IoStorefront } from 'react-icons/io5';
import { FaShippingFast } from 'react-icons/fa';
import { MdPayment } from 'react-icons/md';

export default function PurchaceOptions() {
  return (
    <div className={ styles.purchaceOptions }>
      <div className={ styles.purchaceOptions__wrapper }>
        <div className={ styles.purchaceOptions__option }>
          <IoStorefront />
          <div className={ styles.purchaceOptions__description }>
            <span>Retiro y envíos gratis</span>
          </div>
        </div>
        <div className={ styles.purchaceOptions__option }>
          <MdPayment />
          <div className={ styles.purchaceOptions__description }>
            <span>Todos los medios de pago</span>
          </div>
        </div>
        <div className={ styles.purchaceOptions__option }>
          <FaShippingFast />
          <div className={ styles.purchaceOptions__description }>
            <span>Envios a todo el paìs</span>
          </div>
        </div>
      </div>
    </div>
  );
}