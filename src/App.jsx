
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Cart from './pages/Cart/Cart.jsx';
import Home from './pages/Home/Home.jsx';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
      </Routes>
    </>
  );
};

export default App;
