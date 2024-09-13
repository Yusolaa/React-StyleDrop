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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
