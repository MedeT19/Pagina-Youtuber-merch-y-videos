import React, { useState } from 'react';

const Cart = ({ cart, onUpdateQuantity, onRemoveProduct, onClose }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [newQuantity, setNewQuantity] = useState(1);

  const products = [
    { id: 1, name: 'Playera edit el mariana', price: 100 },
    { id: 2, name: 'Playera con collage', price: 150 },
    { id: 3, name: 'Playera minimalista', price: 300 },
    { id: 4, name: 'Playera con diseño de dibujo', price: 200 },
    { id: 5, name: 'Playera minimalista gris', price: 250 },
    { id: 6, name: 'Cojin Peluche el mariana', price: 300 },
  ];

  const total = products.reduce((acc, product) => {
    const quantity = cart[product.id] || 0;
    return acc + (product.price * quantity);
  }, 0);

  const handleEditQuantity = (product) => {
    setCurrentProduct(product);
    setNewQuantity(cart[product.id] || 1);
    setIsEditModalOpen(true);
  };

  const handleSaveQuantity = () => {
    onUpdateQuantity(currentProduct.id, newQuantity);
    setIsEditModalOpen(false);
  };

  return (
    <div className="cart-modal">
      <div className="cart-modal-content">
        <button onClick={onClose} style={{ float: 'right' }}>Cerrar</button>
        <h2>Carrito de Compras</h2>
        <ul>
          {products.map(product => (
            cart[product.id] > 0 && (
              <li key={product.id}>
                {product.name} - {cart[product.id]} unidades - ${product.price * cart[product.id]}
                <button onClick={() => onRemoveProduct(product.id)}>Eliminar</button>
                <button className="edit-button" onClick={() => handleEditQuantity(product)}>Editar Cantidad</button>
              </li>
            )
          ))}
        </ul>
        <h3>Total: ${total}</h3>
      </div>
      {isEditModalOpen && (
        <div className="cart-modal">
          <div className="cart-modal-content">
            <h2>Editar Cantidad</h2>
            <label>
              Nueva Cantidad:
              <input
                type="number"
                value={newQuantity}
                onChange={(e) => setNewQuantity(parseInt(e.target.value))}
                min="1"
              />
            </label>
            <button onClick={handleSaveQuantity}>Aceptar</button>
            <button onClick={() => setIsEditModalOpen(false)}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
