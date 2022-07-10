import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useAuthContext } from "../../context/AuthContext";
import Auth from "../Auth/Auth";
import styles from './LoginModal.module.scss';
import { BiLogOut, BiGift } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

export default function LoginModal({ show, hide, option, setOption}) {
  const [ isRegister, setIsRegister] = useState(false);
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();

  const handleRegister = () => {
    setOption(false);
    setIsRegister(true);
  }

  const handleLogin = () => {
    setOption(false);
    setIsRegister(false);
  }

  const handleGoTo = () => {
    hide();
    navigate('/orders');
  }

  const handleLogout = async () => {
    await logout();
    hide();
  }

  if(user){
    return (
      <Modal 
        show={show} onHide={hide} centered>
        <Modal.Header closeButton>
          <div className={ styles.loginModal__header }>
            <FaRegUser />
            { user }
          </div>
        </Modal.Header>
        <Modal.Body className={ styles.loginModal__body_user }>
          <button 
            className={`btn btn-lg btn-block ${ styles.loginModal__button_primary } ${ styles.loginModal__button_font16 }`} 
            onClick={ handleGoTo }>
              <BiGift />
              <span>Mis pedidos</span>              
          </button>
          <button 
            className={`btn btn-lg btn-block ${ styles.loginModal__button_primary } ${ styles.loginModal__button_font16 }`} 
            onClick={ handleLogout }>
              <BiLogOut />
              <span>Cerrar sesión</span>              
          </button>
        </Modal.Body>
      </Modal>
    )
  }

  return (
    <>
      <Modal 
        show={show} onHide={hide} centered>
        <Modal.Header closeButton>
          { option && <Modal.Title>Elegí una opción para iniciar sesión</Modal.Title>}
          { !option && isRegister && <Modal.Title>Registrarse</Modal.Title> }
          { !option && !isRegister && <Modal.Title>Iniciar sesión</Modal.Title> }
        </Modal.Header>
        <Modal.Body className={ styles.loginModal__body }>
          {
            option ? 
            <>
              <button 
                className={`btn btn-lg btn-block w-100 ${ styles.loginModal__button_primary }`} 
                onClick={ handleRegister }>
                  Registrarse
              </button>
              <button 
                className={`btn btn-lg btn-block w-100 ${ styles.loginModal__button_primary }`} 
                onClick={ handleLogin }>
                  Ingresar con email
              </button>
            </>
            :          
              <Auth isRegister={isRegister} close={hide} setOption={setOption} />
          }
        </Modal.Body>
      </Modal>
    </>
  );
}