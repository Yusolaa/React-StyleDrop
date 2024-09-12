import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  //   const mobileNav = document.querySelector('.mobile-nav');
  //   const navBtn = document.querySelector('.nav-btn');

  //   navBtn.addEventListener('click', () => {
  //     mobileNav.classList.toggle('hidden');
  //   });

  return (
    <>
      <header className="wrapper ">
        <nav className="relative bg-slate-100 shadow-md p-5  flex justify-between items-center">
          <p className="font-bold text-2xl">StyleDrop</p>
          <div className="nav-menu space-x-10 md:flex hidden ">
            <Link to="/" className="hover:underline">
              Home
            </Link>

            <a href="catalogue" className="hover:underline">
              Catalogue
            </a>
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
            <Link to="/products" className="hover:underline">
              Products
            </Link>
            <div>{localStorage.length}Show</div>
          </div>

          <div className="space-x-4">
            <a
              href="signup"
              className="bg-yellow-400 hover:bg-yellow-300 p-1 rounded-md "
            >
              SIGN UP
            </a>
            <button className="nav-btn bg-yellow-400 hover:bg-yellow-300 p-1 rounded-md md:hidden">
              MENU
            </button>
          </div>
          <div className="mobile-nav top-20 absolute right-0  flex-col space-y-5 hidden ">
            <a href="catalogue" className="hover:underline ">
              Catalogue
            </a>
            <a href="fashion" className="hover:underline">
              Fashion
            </a>
            <a href="favourite" className="hover:underline">
              Favourite
            </a>
            <a href="lifestyle" className="hover:underline">
              Lifestyle
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
