import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside>
      <div className="bg-white shadow-md rounded-md p-4">
        <ul className="list-none space-y-16">
          <li>
            <Link to="users" className="hover:text-orange-500">
              Users
            </Link>
          </li>
          <li>
            <Link to="createProduct" className="hover:text-orange-500">
              Create Product
            </Link>
          </li>
          <li>
            <Link to="updateProduct" className="hover:text-orange-500">
              Update Product
            </Link>
          </li>
          <li>
            <Link to="settings" className="hover:text-orange-500">
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
