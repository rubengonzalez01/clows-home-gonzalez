import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AuthProvider from './context/AuthContext';
import CartProvider from './context/CartContext';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <AppRouter />
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
