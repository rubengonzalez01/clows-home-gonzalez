import styles from './FooterContact.module.scss';
import { useState } from 'react';
import logoFooter from '../../assets/logo/logo_small.png';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function FooterContact() {
  let [ contact, setContact ] = useState(false);

  const showContact = () => {
    setContact(!contact);
  }

  return (
    <div className={ styles.footerContact }>
      <div onClick={ showContact } className={ styles.footerContact__button }>
      <span className={ styles.footerContact__expandible_title }>Contactanos</span>
        {
          contact ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />
        }
      </div>
      { contact ? 
          <div className={ styles.footerContact__expandible }>
            <img className={ styles.footerContact__logo } src={ logoFooter } alt="logo footer" />  
            <span className={ styles.footerContact__text }>Lunes a Sábado: 10:00 - 19:00</span>
            <Link className={ styles.footerContact__link } to='sucursales'>
              <span className={ styles.footerContact__text }>Nuestras Sucursales</span>
            </Link>
            <a className={ styles.footerContact__link } href='mailto:marketing@clowshome.com.ar'>marketing@clowshome.com.ar</a>            
          </div>  
        : null
      }   
    </div>
  );
}

