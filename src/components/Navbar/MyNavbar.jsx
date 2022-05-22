import{ Navbar, Container }  from "react-bootstrap";
import SearchBar from '../SearchBar/SearchBar';
import Menu from '../Menu/Menu';

export default function MyNavbar() {
  return (
    <>
      <Navbar bg="light" className='flex-column' expand="lg">
        <Container>
          <SearchBar />
        </Container>
        <Container >
          <Menu />
        </Container>
      </Navbar>      
    </>
  );
}