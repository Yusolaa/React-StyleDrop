import React, { useState } from 'react';

const CreateProduct = ({ setProducts }) => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      title: productName,
      price: parseFloat(price),
      description,
      image,
      category: 'new',
    };

    console.log('New Product:', newProduct);

    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const updatedProducts = [...storedProducts, newProduct];
    localStorage.setItem('products', JSON.stringify(updatedProducts));

    setProducts(updatedProducts);

    setProductName('');
    setPrice('');
    setDescription('');
    setImage(null);
  };

  return (
    <div className="bg-white shadow-md rounded-md p-10 ">
      <h2 className="text-3xl font-bold mb-5">Add Products</h2>
      <form onSubmit={handleSubmit} className="bg-orange-500 rounded-md p-2">
        <div className="space-y-2">
          <div className="flex flex-col md:flex-row gap-4">
            <div>
              <label className="block text-sm font-bold mb-2">
                Product Name
              </label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full p-3 rounded-lg border-none"
                placeholder="Enter product name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Price ($)</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full p-3 rounded-lg border-none"
                placeholder="Enter product price"
                required
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col md:flex-row gap-12">
              <div>
                <label className="block text-sm font-bold mb-2">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-3 rounded-lg border-none"
                  placeholder="Enter product description"
                  rows="1"
                  required
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-bold mb-2">
                  Product Image
                </label>
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="w-full p-3 rounded-lg bg-yellow-900 text-white border-none"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <button
            type="submit"
            className="bg-white hover:bg-orange-600 font-bold py-2 px-4 rounded-lg"
          >
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
