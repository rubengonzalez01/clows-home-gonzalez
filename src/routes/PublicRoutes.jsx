import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import About from "../pages/About/About";
import Detail from "../pages/Detail/Detail";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Products from "../pages/Products/Products";
import Offices from '../pages/Offices/Offices';

export default function PublicRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productos/:categoryType' element={<Products />} />
        <Route path='/nosotros' element={<About />} />
        <Route path='/sucursales' element={<Offices />} />
        <Route path='/login' element={<Login />} />
        <Route path='/productos/:categoryType/:itemId' element={<Detail />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>          
    </Layout>
  );
}