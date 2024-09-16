import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/style.css';
function Footer() {
  return (
    <>
      <footer className="wrapper bg-slate-100 shadow-md p-5 mt-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="font-bold text-2xl">StyleDrop</p>
          <div className="nav-menu space-x-10 md:flex hidden mt-4 md:mt-0">
            <a href="fashion" className="hover:underline">
              Fashion
            </a>
            <a href="favourite" className="hover:underline">
              Favourite
            </a>
            <Link to="/DashboardLayout">Dashboard</Link>
            <a href="order" className="hover:underline">
              Order
            </a>
          </div>
          <div className="space-x-4 mt-4 md:mt-0">
            <a
              href="signup"
              className="bg-yellow-400 hover:bg-yellow-300 p-1 rounded-md "
            >
              SIGN UP
            </a>
            <a
              href="login"
              className="bg-yellow-400 hover:bg-yellow-300 p-1 rounded-md "
            >
              LOG IN
            </a>
          </div>
        </div>
        <div className="text-center mt-5 text-gray-500">
          <p>&copy; 2024 TheFirst Studio. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
