import { FaRegUser, FaWhatsapp } from 'react-icons/fa';
import { BsTelephone, BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import styles from './SearchBar.module.scss';
import logo from '../../assets/logo/logo.svg';
import CartWidget from '../CartWidget/CartWidget';
import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import LoginModal from '../LoginModal/LoginModal';


export default function SearchBar() {
  const navigate = useNavigate();
  const { setSearchQuery } = useCartContext();
  const [value, setValue] = useState('');

  const [show, setShow] = useState(false);
  const [option, setOption] = useState(true);

  const handleClose = () => {
    setOption(true);
    setShow(false);
  }
  
  const handleShow = () => {
    setShow(true)
  };

  const searchHandler = (e) => {
    if ((e.type === 'keypress' && e.key === 'Enter') || e.type === 'click') {
      setSearchQuery(value);
      navigateHandler(`productos?search=${value}`);
    }
  }

  const navigateHandler = (path) => {
    navigate(path);
  }

  return(
    <>
      <div className={ styles.search_bar }>
        <div className={ styles.logo_container }>
          <img 
            onClick={ () => { navigateHandler('/') } }
            className={ styles.logo } 
            src={ logo } 
            alt="clow's home logo"/>
        </div>
        <div className={ styles.central_container }>
          <div className={ styles.search_wrapper }>
            <input 
              className={ styles.input } 
              type="text" 
              value={ value }
              onChange={(e) => {
                setValue(e.target.value)
              }}
              onKeyPressCapture={ searchHandler }
              placeholder='Buscar...'/>
            <span>
              <div>
                <button onClick={ searchHandler } className={ styles.button_search }>
                  <BsSearch />
                </button>
              </div>
            </span>
          </div>
          <div className={ styles.contact }>
            <a className={ styles.contact_phone } href='tel:0800-111-0202' target='_blank' rel="noreferrer"><BsTelephone /> 0800 111 0202</a>
            <a className={ styles.contact_phone } href='https://wa.me/5491112345678' target='_blank' rel="noreferrer"><FaWhatsapp /> 11 1234 5678</a>
          </div>
        </div>
        <div className={ styles.actions }>
          <button onClick={ handleShow } className={ styles.action }><FaRegUser />Mi Cuenta</button>
          <CartWidget />
        </div>
      </div>
      <LoginModal show={show} hide={handleClose} option={option} setOption={setOption}/>
    </>
  );
}