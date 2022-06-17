import{ Navbar, Container }  from "react-bootstrap";
import { FaShippingFast } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo/logo.svg';
import { useCartContext } from "../../context/CartContext";
import styles from './MyNavbar.module.scss';

export default function MyNavbar2() {
  const navigate = useNavigate();
  const { setCheckout } = useCartContext();

  const clickHandler = (path) => {
    setCheckout(false);
    navigate(path);
  }

  return (
    <div className={ styles.myNavbar }>
      <Navbar bg="light" className='flex-column' expand="lg">
        <Container>
          <div className={ styles.myNavbar__wrapper }>
            <div className={ styles.myNavbar__logo_container }>
              <img 
                onClick={ () => { clickHandler('/') } }
                className={ styles.myNavbar__logo } 
                src={ logo } 
                alt="clow's home logo" 
                placeholder='Buscar...'/>
            </div>
            <div className="d-flex justify-content-end py-1">
              <div className={ styles.myNavbar__options } >
                <FaShippingFast />
                <span className={ styles.myNavbar__options_text }>Envios Gratis</span>
              </div>
              <div className={ `${styles.myNavbar__options} ${ styles.myNavbar__options_bl }`}>
                <GrSecure />
                <span className={ styles.myNavbar__options_text }>Sitio Seguro</span>
              </div>
            </div>
          </div>
        </Container>
      </Navbar>      
    </div>
  );
}