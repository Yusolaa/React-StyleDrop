import React, { useState } from 'react';

const RegForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    username: '',
    email: '',
    id: '',
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const existingData =
      JSON.parse(localStorage.getItem('eventRegistrationData')) || [];

    // Add the new form data to the existing array
    const updatedData = [...existingData, formData];

    localStorage.setItem('eventRegistrationData', JSON.stringify(updatedData));

    setFormData({
      name: '',
      lastName: '',
      username: '',
      email: '',
      id: '',
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen mt-20">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-8 space-y-10">
        <div className="bg-black text-white text-center p-4 rounded-t-lg">
          <h2 className="text-xl font-semibold">EVENT REGISTRATION FORM</h2>
        </div>

        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <label className="block text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={handleChange}
                name="name"
                placeholder="First Name"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold"> </label>
              <input
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                name="lastName"
                placeholder="Last Name"
                className="w-full p-3 border border-gray-300 rounded-lg md:mt-6"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">
              Username
            </label>
            <input
              type="text"
              value={formData.username}
              onChange={handleChange}
              name="username"
              placeholder="Enter your username"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={handleChange}
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="example@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">ID</label>
            <input
              type="text"
              value={formData.id}
              onChange={handleChange}
              name="id"
              placeholder="Enter your ID"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-red-500 text-white p-3 px-6 rounded-lg hover:bg-red-600"
            >
              REGISTER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegForm;
