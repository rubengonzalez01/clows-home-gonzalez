import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Search from './pages/Search/Search';
import Offices from './pages/Offices/Offices';
import About from './pages/About/About';
import Layout from './components/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Detail from './pages/Detail/Detail';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/productos/perros' exact element={<Search />} />
          <Route path='/productos/gatos' exact element={<Search />} />
          <Route path='/productos/otros' exact element={<Search />} />
          <Route path='/nosotros' exact element={<About />} />
          <Route path='/sucursales' exact element={<Offices />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/productos/:id' exact element={<Detail />} />
          {/* <Route path='*' exact element={<NoMatch />} /> */}
        </Routes>          
      </Layout>
    </>
  );
}

export default App;
