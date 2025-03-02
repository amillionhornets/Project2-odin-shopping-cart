import React from 'react';

const CartPage = ({ cart }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  console.log(cart)
  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
              </li>
            ))}
          </ul>
          <h3>Total: ${calculateTotal().toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default CartPage;
