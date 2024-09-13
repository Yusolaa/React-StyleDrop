import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Fetch cart items from localStorage
    const cartData = [];
    for (let key in localStorage) {
      if (localStorage.getItem(key)) {
        const item = JSON.parse(localStorage.getItem(key));
        if (item && item.quantity) {
          cartData.push(item);
        }
      }
    }
    setCartItems(cartData);
    calculateTotal(cartData);
  }, []);

  // Calculate total price of the cart
  const calculateTotal = (items) => {
    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  };

  // Increment quantity
  const incrementQuantity = (item) => {
    const updatedItems = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        const updatedItem = { ...cartItem, quantity: cartItem.quantity + 1 };
        localStorage.setItem(cartItem.title, JSON.stringify(updatedItem));
        return updatedItem;
      }
      return cartItem;
    });
    setCartItems(updatedItems);
    calculateTotal(updatedItems);
  };

  // Decrement quantity
  const decrementQuantity = (item) => {
    const updatedItems = cartItems.map((cartItem) => {
      if (cartItem.id === item.id && cartItem.quantity > 1) {
        const updatedItem = { ...cartItem, quantity: cartItem.quantity - 1 };
        localStorage.setItem(cartItem.title, JSON.stringify(updatedItem));
        return updatedItem;
      }
      return cartItem;
    });
    setCartItems(updatedItems);
    calculateTotal(updatedItems);
  };

  // Remove an item from the cart
  const removeItem = (item) => {
    localStorage.removeItem(item.title);
    const updatedItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(updatedItems);
    calculateTotal(updatedItems);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-5 border-b pb-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 object-contain"
              />
              <div className="flex-3 px-4">
                <p className="font-semibold">{item.title}</p>
                <p className="text-green-600">${item.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => decrementQuantity(item)}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg mr-2 hover:bg-red-400"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => incrementQuantity(item)}
                    className="bg-green-500 text-white px-3 py-1 rounded-lg ml-2 hover:bg-green-400"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeItem(item)}
                className="bg-gray-300 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-200"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="mt-6">
            <p className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
            <button className="bg-yellow-500 text-white rounded-lg py-2 px-4 mt-4 hover:bg-yellow-400">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
