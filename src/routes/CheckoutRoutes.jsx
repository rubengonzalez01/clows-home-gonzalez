import { Navigate, Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart/Cart";
import Layout2 from '../components/Layout2/Layout2';
import Checkout from "../pages/Checkout/Checkout";
import PurchaseStatus from "../pages/PurchaseStatus/PurchaseStatus";

export default function CheckoutRoutes() {
  return (
    <Layout2>
      <Routes>
        <Route path='/checkout/carrito' element={<Cart />} />
        <Route path='/checkout/form' element={<Checkout />} />
        <Route path='/checkout/status/:orderId' element={<PurchaseStatus />} />
        <Route path='*' element={<Navigate to='/checkout/carrito' />} />
      </Routes>          
    </Layout2>
  );
}