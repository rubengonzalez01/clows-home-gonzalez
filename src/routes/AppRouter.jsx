import { BrowserRouter } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import CheckoutRoutes from "./CheckoutRoutes";
import PublicRoutes from "./PublicRoutes";

export default function AppRouter() {
  const { checkout } = useCartContext();

  return (
    <BrowserRouter>
      {
        checkout ?
          <CheckoutRoutes />
        : <PublicRoutes />
      }
    </BrowserRouter>
  );
}