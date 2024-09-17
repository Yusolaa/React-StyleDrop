import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
import CreateProduct from './components/CreateProduct';
import Settings from './components/Settings';
import UpdateProduct from './components/UpdateProduct';

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [products, setProducts] = useState([]);

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
    <BrowserRouter>
      <Main
        cartCount={cartCount}
        products={products}
        setProducts={setProducts}
        updateCartCount={updateCartCount}
      />
    </BrowserRouter>
  );
};

// Separate component for the main app structure
const Main = ({ cartCount, products, setProducts, updateCartCount }) => {
  const location = useLocation();

  // Check if the current route is dashboard-related
  const isDashboardRoute = location.pathname.startsWith('/dashboardLayout');

  return (
    <>
      {/* Only render Header and Footer if not on a dashboard route */}
      {!isDashboardRoute && <Header cartCount={cartCount} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/products"
          element={<Products products={products} setProducts={setProducts} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/:id"
          element={<ProductDetails updateCartCount={updateCartCount} />}
        />
        <Route path="dashboardLayout" element={<DashboardLayout />}>
          <Route path="users" element={<Users />} />
          <Route
            path="createProduct"
            element={<CreateProduct setProducts={setProducts} />}
          />
          <Route path="updateProduct" element={<UpdateProduct />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
      {!isDashboardRoute && <Footer />}
    </>
  );
};

export default App;
