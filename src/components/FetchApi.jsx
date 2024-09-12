import React, { useEffect, useState } from 'react';
import axios from 'axios';
const FetchApi = () => {
  //   const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setCount((count) => count + 1);
  //     }, 2000);
  //   },[count]);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('https://dummyjson.com/products');
      //   console.log(data);
      // console.log(res);

      setApiData(res.data.products);
    }
    fetchData();
  });
  return (
    <div>
      {apiData.map((item, index) => (
        <div key={index}>
          <p>{item.title}</p>
          <p>{item.description}</p>
          <p>{item.category}</p>
          <p></p>
        </div>
      ))}
    </div>
  );
};

export default FetchApi;
