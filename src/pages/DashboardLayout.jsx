import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
  return (
    <div className="p-5 ">
      <div className="contaner flex flex-col gap-20 md:flex-row bg-yellow-500 p-6 shadow-md rounded-lg">
        <div>
          <Sidebar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
