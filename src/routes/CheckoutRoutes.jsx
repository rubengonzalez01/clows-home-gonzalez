import { Navigate, Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart/Cart";
import Layout2 from '../components/Layout2/Layout2';

export default function CheckoutRoutes() {
  return (
    <Layout2>
      <Routes>
        <Route path='/carrito' element={<Cart />} />
        <Route path='*' element={<Navigate to='/carrito' />} />
      </Routes>          
    </Layout2>
  );
}