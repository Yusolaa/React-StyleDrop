import React from 'react';

const Users = () => {
  const users = [
    {
      id: 1,
      name: 'Yusuf Lawal',
      email: 'yusuf@example.com',
      role: 'Software Engineer',
      img: 'https://avatar.iran.liara.run/public/boy?username=Ash',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane@example.com',
      role: 'Product Manager',
      img: 'https://avatar.iran.liara.run/public/girl?username=Jane',
    },
    {
      id: 3,
      name: 'Sakenah Adogie',
      email: 'sakenah@example.com',
      role: 'Baker',
      img: 'https://avatar.iran.liara.run/public/girl?username=Jane',
    },
    // Add more users if necessary
  ];

  return (
    <div className="bg-white shadow-md rounded-md p-10">
      <h2 className="text-3xl font-bold mb-6">User Panel</h2>
      <div className="container p-3  ">
        <div className="flex flex-col gap-4 lg:flex-row ">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-gray-800 text-white p-3 rounded-lg shadow-md flex items-center space-x-3"
            >
              <img
                src={user.img}
                alt={user.name}
                className="h-20 w-20 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold">{user.name}</h3>
                <p>{user.email}</p>
                <p className="text-sm text-orange-400">{user.role}</p>
                <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
