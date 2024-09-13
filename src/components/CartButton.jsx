import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa';

const CartButton = ({ cartCount }) => {
  const navigate = useNavigate();

  const handleNavigateToCart = () => {
    navigate('/cart');
  };

  return (
    <button
      onClick={handleNavigateToCart}
      className="bg-white text-black p-2 rounded-lg relative"
    >
      {/* Shopping Basket Icon */}
      <FaShoppingBasket size={24} />
      {/* Cart Count as a Badge */}
      {cartCount > 0 && (
        <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {cartCount}
        </div>
      )}
    </button>
  );
};

export default CartButton;
