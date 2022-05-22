import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Search from './pages/Search/Search';
import Offices from './pages/Offices/Offices';
import About from './pages/About/About';
import Layout from './components/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/perros' exact element={<Search />} />
            <Route path='/gatos' exact element={<Search />} />
            <Route path='/otros' exact element={<Search />} />
            <Route path='/nosotros' exact element={<About />} />
            <Route path='/sucursales' exact element={<Offices />} />
            <Route path='/login' exact element={<Login />} />
            {/* <Route path='*' exact element={<NoMatch />} /> */}
          </Routes>          
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
