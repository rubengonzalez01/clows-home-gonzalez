import { useState } from 'react';
import styles from './FooterSections.module.scss';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function FooterSections() {
  let [ sections, setSections ] = useState(false);

  const showSections = () => {
    setSections(!sections);
  }

  return (
    <div className={ styles.footerSections }>
      <div onClick={ showSections } className={ styles.footerSections__button }>
        <span className={ styles.footerSections__expandible_title }>Nuestros apartados</span>
        {
          sections ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />
        }
      </div>
      { sections ? 
          <div className={ styles.footerSections__expandible }>
            <Link className={ styles.footerSections__link } to='nosotros'>
              <span className={ styles.footerSections__text }>Nosotros</span>
            </Link>
            <Link className={ styles.footerSections__link } to='productos/perros'>
              <span className={ styles.footerSections__text }>Perros</span>
            </Link>
            <Link className={ styles.footerSections__link } to='productos/gatos'>
              <span className={ styles.footerSections__text }>Gatos</span>
            </Link>
            <Link className={ styles.footerSections__link } to='productos/otros'>
              <span className={ styles.footerSections__text }>Otros</span>
            </Link>
          </div>  
        : null
      }   
    </div>  
  );
}