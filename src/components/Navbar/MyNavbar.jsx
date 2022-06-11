import{ Navbar, Container }  from "react-bootstrap";
import SearchBar from '../SearchBar/SearchBar';
import Menu from '../Menu/Menu';
import styles from './MyNavbar.module.scss';

export default function MyNavbar() {
  return (
    <div className={ styles.myNavbar }>
      <Navbar bg="light" className='flex-column' expand="lg">
        <Container>
          <SearchBar />
        </Container>
        <Container >
          <Menu />
        </Container>
      </Navbar>      
    </div>
  );
}