import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/Navbar/MyNavbar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Search from './pages/Search/Search';
import Offices from './pages/Offices/Offices';
import About from './pages/About/About';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/mascotas' exact element={<Search />} />
          <Route path='/nosotros' exact element={<About />} />
          <Route path='/sucursales' exact element={<Offices />} />
          <Route path='/login' exact element={<Login />} />
          {/* <Route path='*' exact element={<NoMatch />} /> */}
        </Routes>          
      </BrowserRouter>
    </>
  );
}

export default App;
