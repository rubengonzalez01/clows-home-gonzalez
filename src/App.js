import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Offices from './pages/Offices/Offices';
import About from './pages/About/About';
import Layout from './components/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Detail from './pages/Detail/Detail';
import Products from './pages/Products/Products';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/productos/:categoryType' element={<Products />} />
          <Route path='/nosotros' element={<About />} />
          <Route path='/sucursales' element={<Offices />} />
          <Route path='/login' element={<Login />} />
          <Route path='/productos/:categoryType/:itemId' element={<Detail />} />
          <Route path='/carrito' element={<Cart />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>          
      </Layout>
    </>
  );
}

export default App;
