/*import React from 'react';
import producto1 from '../assets/p1.jpg';
import producto2 from '../assets/p2.jpg';
import producto3 from '../assets/p3.jpg';
import producto4 from '../assets/p4.jpg';
import producto5 from '../assets/p5.jpg';
import Peluche1 from '../assets/Peluche1.jpg';

const Products = () => {
  return (
    <section id="products">
      <h2 style={{ textAlign: 'center', color: '#FF0000' }}>Productos</h2>
      <div className="product-container">
        <div className="product">
          <img src={producto1} alt="Producto 1" />
          <p>Playera edit el mariana</p>
          <p>Precio: $100</p>
        </div>
        <div className="product">
          <img src={producto2} alt="Producto 2" />
          <p>Playera con collage</p>
          <p>Precio: $150</p>
        </div>
        <div className="product">
          <img src={producto3} alt="Producto 3" />
          <p>Playera minimalista</p>
          <p>Precio: $300</p>
        </div>
        <div className="product">
          <img src={producto4} alt="Producto 4" />
          <p>Playera con diseño de dibujo</p>
          <p>Precio: $200</p>
        </div>
        <div className="product">
          <img src={producto5} alt="Producto 5" />
          <p>Playera minimalista gris</p>
          <p>Precio: $250</p>
        </div>
        <div className="product">
          <img src={Peluche1} alt="Producto 6" />
          <p>Cojin Peluche el mariana</p>
          <p>Precio: $300</p>
        </div>
      </div>
    </section>
  );
};

export default Products;
*/
import React, { useState } from 'react';
import producto1 from '../assets/p1.jpg';
import producto2 from '../assets/p2.jpg';
import producto3 from '../assets/p3.jpg';
import producto4 from '../assets/p4.jpg';
import producto5 from '../assets/p5.jpg';
import Peluche1 from '../assets/Peluche1.jpg';

const Products = ({ onAddToCart }) => {
  const [quantities, setQuantities] = useState({});

  const incrementQuantity = (productId) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1
    }));
  };

  const decrementQuantity = (productId) => {
    setQuantities(prevQuantities => {
      const newQuantities = { ...prevQuantities };
      if (newQuantities[productId] > 0) {
        newQuantities[productId] -= 1;
      }
      return newQuantities;
    });
  };

  const addToCart = (productId) => {
    const quantity = quantities[productId] || 0;
    if (quantity > 0) {
      onAddToCart(productId, quantity);
      setQuantities(prevQuantities => ({
        ...prevQuantities,
        [productId]: 0
      }));
    }
  };

  const products = [
    { id: 1, src: producto1, name: 'Playera edit el mariana', price: 100 },
    { id: 2, src: producto2, name: 'Playera con collage', price: 150 },
    { id: 3, src: producto3, name: 'Playera minimalista', price: 300 },
    { id: 4, src: producto4, name: 'Playera con diseño de dibujo', price: 200 },
    { id: 5, src: producto5, name: 'Playera minimalista gris', price: 250 },
    { id: 6, src: Peluche1, name: 'Cojin Peluche el mariana', price: 300 },
  ];

  return (
    <section id="products">
      <h2 style={{ textAlign: 'center', color: '#FF0000' }}>Productos</h2>
      <div className="product-container">
        {products.map(product => (
          <div className="product" key={product.id}>
            <img src={product.src} alt={`Producto ${product.id}`} />
            <p>{product.name}</p>
            <p>Precio: ${product.price}</p>
            <div className="cart-controls">
              <button onClick={() => decrementQuantity(product.id)}>-</button>
              <label>{quantities[product.id] || 0}</label>
              <button onClick={() => incrementQuantity(product.id)}>+</button>
            </div>
            <button onClick={() => addToCart(product.id)}>Añadir al Carrito</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
