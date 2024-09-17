import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen p-5  bg-gray-100">
      <div className="w-full flex flex-col gap-6 md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-orange-500 text-black p-6">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="w-full md:w-3/4 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
