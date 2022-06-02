import styles from './Footer.module.scss';
import FooterContact from '../FooterContact/FooterContact';
import FooterSections from '../FooterSections/FooterSections';
import FooterPayment from '../FooterPayment/FooterPayment';
import logoFooter from '../../assets/logo/logo_small.png';
import mp from '../../assets/payment/mercadopago.webp';
import visa from '../../assets/payment/visa.webp';
import master from '../../assets/payment/mastercard.webp';
import naranja from '../../assets/payment/naranja.webp';
import { Link } from 'react-router-dom';

export default function Footer() {

  return (
    <div className={styles.footer }>
      <div className={`container ${ styles.footer__main }`}>
        <div className={ styles.footer__mobile }>
          <FooterContact />
          <FooterSections />
          <FooterPayment />
        </div>
        <div className={ styles.footer__desktop }>
          <div className={ styles.footer__contact }>
            <img className={ styles.footer__logo } src={ logoFooter } alt="logo footer" />  
            <span className={ styles.footer__text }>Lunes a Sábado: 10:00 - 19:00</span>
            <Link className={ styles.footer__link } to='sucursales'>
              <span className={ styles.footer__text }>Nuestras Sucursales</span>
            </Link>            
            <a className={ styles.footer__link } href='mailto:marketing@clowshome.com.ar'>marketing@clowshome.com.ar</a>            
          </div>  
          <div className={ styles.footer__sections }>
            <h5>Nuestros apartados</h5>
            <Link className={ styles.footer__link } to='nosotros'>
              <span className={ styles.footer__text }>Nosotros</span>
            </Link>
            <Link className={ styles.footer__link } to='perros'>
              <span className={ styles.footer__text }>Perros</span>
            </Link>
            <Link className={ styles.footer__link } to='gatos'>
              <span className={ styles.footer__text }>Gatos</span>
            </Link>
            <Link className={ styles.footer__link } to='otros'>
              <span className={ styles.footer__text }>Otros</span>
            </Link>
          </div>  
          <div className={ styles.footer__credits }>
            <h5>Medios de pago</h5>
            <img className={ styles.footer__credit } src={ mp } alt="mercadopago" />
            <img className={ styles.footer__credit } src={ visa } alt="visa" />
            <img className={ styles.footer__credit } src={ master } alt="master" />
            <img className={ styles.footer__credit } src={ naranja } alt="mercadopago" />
          </div>
        </div>        
      </div>
      <div className={ styles.footer__rights }>
        <div className={`container ${ styles.footer__rights_wrapper}`}>
          <div className={ styles.footer__rights_group }>
            <span className={ styles.footer__rights_text }>© Clow's Home 2022.</span>
            <span className={ styles.footer__rights_text }>&nbsp;Todos los derechos reservados</span>
          </div>
          <div className={ styles.footer__rights_author }>
            <span className={ styles.footer__rights_text }>Desarrollado por: 
              <a href="https://www.linkedin.com/in/ing-ruben-j-gonzalez/" target='_blank'> Rubén González</a>
            </span>
          </div>
        </div>        
      </div>
    </div>
  );
}