import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Products from './components/Products';
import Videos from './components/Videos';
import Cart from './components/Cart';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [cart, setCart] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (productId, quantity) => {
    setCart(prevCart => ({
      ...prevCart,
      [productId]: (prevCart[productId] || 0) + quantity
    }));
  };

  const handleUpdateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      handleRemoveProduct(productId);
    } else {
      setCart(prevCart => ({
        ...prevCart,
        [productId]: quantity
      }));
    }
  };

  const handleRemoveProduct = (productId) => {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      delete newCart[productId];
      return newCart;
    });
  };

  const openCartModal = () => {
    setIsCartOpen(true);
  };

  const closeCartModal = () => {
    setIsCartOpen(false);
  };

  return (
    <Router>
      <div className="App">
        <Header openCartModal={openCartModal} />
        <main>
          <Routes>
            <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
            <Route path="/" element={<Videos />} />
          </Routes>
        </main>
        <Footer />
        {isCartOpen && (
          <Cart
            cart={cart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveProduct={handleRemoveProduct}
            onClose={closeCartModal}
          />
        )}
      </div>
    </Router>
  );
};

export default App;
