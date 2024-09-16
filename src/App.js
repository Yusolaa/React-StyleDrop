import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Signup } from './pages/Signup';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import DashboardLayout from './pages/DashboardLayout';
import Users from './components/Users';
import CreateProducts from './components/CreateProducts';
import Settings from './components/Settings';
import UpdateProduct from './components/UpdateProduct';

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  // Function to calculate the total number of items in the cart
  const updateCartCount = () => {
    let total = 0;
    for (let key in localStorage) {
      if (localStorage.getItem(key)) {
        const product = JSON.parse(localStorage.getItem(key));
        total += product.quantity || 0;
      }
    }
    setCartCount(total);
  };

  useEffect(() => {
    updateCartCount();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header cartCount={cartCount} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/:id"
            element={<ProductDetails updateCartCount={updateCartCount} />}
          />
          <Route path="dashboardLayout" element={<DashboardLayout />}>
            <Route path="users" element={<Users />} />
            <Route path="createProduct" element={<CreateProducts />} />
            <Route path="updateProduct" element={<UpdateProduct />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
