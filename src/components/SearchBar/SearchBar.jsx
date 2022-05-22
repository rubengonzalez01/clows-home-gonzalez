import { FaRegUser, FaWhatsapp } from 'react-icons/fa';
import { BsTelephone, BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import styles from './SearchBar.module.scss';
import logo from '../../assets/logo/logo.svg';
import CartWidget from '../CartWidget/CartWidget';


export default function SearchBar() {
  const navigate = useNavigate();

  const clickHandler = (path) => {
    navigate(path);
  }

  return(
    <>
      <div className={ styles.search_bar }>
        <div className={ styles.logo_container }>
          <img 
            onClick={ () => { clickHandler('/') } }
            className={ styles.logo } 
            src={ logo } 
            alt="clow's home logo" 
            placeholder='Buscar...'/>
        </div>
        <div className={ styles.central_container }>
          <div className={ styles.search_wrapper }>
            <input className={ styles.input } type="text" placeholder='Buscar...'/>
            <span>
              <div>
                <button className={ styles.button_search }>
                  <BsSearch />
                </button>
              </div>
            </span>
          </div>
          <div className={ styles.contact }>
            <a className={ styles.contact_phone } href='tel:0800-111-0202' target='_blank'><BsTelephone /> 0800 111 0202</a>
            <a className={ styles.contact_phone } href='https://wa.me/5491112345678' target='_blank'><FaWhatsapp /> 11 1234 5678</a>
          </div>
        </div>
        <div className={ styles.actions }>
          <button onClick={ () => { clickHandler('/login') } } className={ styles.action }><FaRegUser />Mi Cuenta</button>
          <CartWidget />
        </div>
      </div>
    </>
  );
}