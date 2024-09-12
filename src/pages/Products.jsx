import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  const [findWord, setFindWord] = useState('');
  const navigate = useNavigate();
  const inputWord = (e) => {
    setFindWord(e.target.value);
  };
  const handleNavigate = (id) => {
    navigate(`/${id}`);
  };
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://dummyjson.com/products');
      setProducts(res.data.products);
    };
    fetchData();
  });

  //   const handleSearch = () => {
  //     const filteredProducts = products.filter((product) =>
  //       product.category.includes(searchWord)
  //     );
  //     setSearchWord(filteredProducts);
  //     console.log('filteredProducts', filteredProducts);
  //   };
  return (
    <div>
      <input
        type="text"
        id=""
        placeholder="Search a product.."
        value={findWord}
        onChange={inputWord}
      />
      <button onClick={handleSearch}>Search</button>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
          <p>{product.price}</p>
          <p>Category:{product.category}</p>
          <p>{product.description}</p>
          <button onClick={() => handleNavigate(product.id)}>
            View details
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
