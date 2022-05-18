import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.svg';
import styles from './MyNavbar.module.scss';
import{ Navbar, Nav, Container, NavDropdown}  from "react-bootstrap";
import {Person, ShoppingCart, HomeWork, Info, Pets } from '@material-ui/icons';

const dropdownTitle = <><Pets className={ styles.nav_icon_mg } />Mascotas</>;

export default function MyNavbar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img className={ styles.logo } src={ logo } alt="clow's home logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title={dropdownTitle} id="basic-nav-dropdown" className={ styles.nav_text } >
                <NavDropdown.Item href="#action/3.1">Perros</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Gatos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Otros</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/nosotros" className={ styles.nav_text } >
                <Info className={ styles.nav_icon } />
                Nosotros
              </Nav.Link>
              <Nav.Link href="/sucursales" className={ styles.nav_text } >
                <HomeWork className={ styles.nav_icon } />
                Sucursales
              </Nav.Link>
              <Nav.Link href="/login" className={ styles.nav_text } >
                <Person className={ styles.nav_icon } />
                Mi Cuenta
              </Nav.Link>
              <Nav.Link href="#" className={ styles.nav_text } >
                <ShoppingCart className={ styles.nav_icon } />
                Carrito
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>      
    </>
  );
}