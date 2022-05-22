import{ Navbar, Nav }  from "react-bootstrap";
import { FaDog, FaCat } from 'react-icons/fa';
import { BsInfoSquare } from 'react-icons/bs';
import { MdPets } from 'react-icons/md';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import styles from './Menu.module.scss';

export default function Menu() {
  const navigate = useNavigate();

  const clickHandler = (path) => {
    navigate(path);
  }

  return (
    <>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link onClick={ () => { clickHandler('/perros') } } className={ styles.nav_text } >
            <FaDog className={ styles.nav_icon } />
            Perros
          </Nav.Link>
          <Nav.Link onClick={ () => { clickHandler('/gatos') } } className={ styles.nav_text } >
            <FaCat className={ styles.nav_icon } />
            Gatos
          </Nav.Link>
          <Nav.Link onClick={ () => { clickHandler('/otros') } } className={ `${ styles.nav_text } ${ styles.nav_text_separator }` } >
            <MdPets className={ styles.nav_icon } />
            Otras
          </Nav.Link>
          <hr />
          <Nav.Link onClick={ () => { clickHandler('/nosotros') } } className={ styles.nav_text } >
            <BsInfoSquare className={ styles.nav_icon } />
            Nosotros
          </Nav.Link>
          <Nav.Link onClick={ () => { clickHandler('/sucursales') } } className={ styles.nav_text } >
            <HiOutlineOfficeBuilding className={ styles.nav_icon } />
            Sucursales
          </Nav.Link>          
        </Nav>
      </Navbar.Collapse>
    </>
  );
}