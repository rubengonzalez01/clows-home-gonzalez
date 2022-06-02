import { useState } from 'react';
import styles from './FooterPayment.module.scss';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import mp from '../../assets/payment/mercadopago.webp';
import visa from '../../assets/payment/visa.webp';
import master from '../../assets/payment/mastercard.webp';
import naranja from '../../assets/payment/naranja.webp';

export default function FooterPayment(){
  let [ payment, setPayment ] = useState(false);

  const showPayment = () => {
    setPayment(!payment);
  }

  return (
    <div className={ styles.footerPayment }>
      <div onClick={ showPayment } className={ styles.footerPayment__button }>
        <span className={ styles.footerPayment__expandible_title }>Medios de pago</span>
        {
          payment ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />
        }
      </div>
      { payment ? 
          <div className={ styles.footerPayment__expandible }>
            <div className={ styles.footerPayment__credits }>
              <img className={ styles.footerPayment__credit } src={ mp } alt="mercadopago" />
              <img className={ styles.footerPayment__credit } src={ visa } alt="visa" />
              <img className={ styles.footerPayment__credit } src={ master } alt="master" />
              <img className={ styles.footerPayment__credit } src={ naranja } alt="mercadopago" />
            </div>
          </div>  
        : null
      }   
    </div>  
  );
}