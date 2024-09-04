import React from 'react';
import fashion from '../assets/images/fashion.png';

function Header() {
  //   const mobileNav = document.querySelector('.mobile-nav');
  //   const navBtn = document.querySelector('.nav-btn');

  //   navBtn.addEventListener('click', () => {
  //     mobileNav.classList.toggle('hidden');
  //   });

  return (
    <>
      <header className="wrapper bg-yellow-400  ">
        <nav className="relative bg-slate-100 shadow-md p-5  flex justify-between items-center">
          <p className="font-bold text-2xl">StyleDrop</p>
          <div className="nav-menu space-x-10 md:flex hidden ">
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
        <div className=" flex flex-col md:flex-row justify-between items-center p-6">
          <div>
            <p className="text-4xl leading-loose font-bold">
              LET'S EXPLORE{' '}
              <span className="bg-white p-1 rounded-md">UNIQUE</span> CLOTHES
            </p>
            <p>Your style, redefined. Drop into it today!</p>
            <div className="mt-10">
              <a
                href="shop"
                className="bg-white hover:bg-slate-200 p-1 rounded-md  "
              >
                SHOP NOW
              </a>
            </div>
          </div>
          <img src={fashion} alt="Fashion" className="max-w-md " />
        </div>
      </header>
    </>
  );
}

export default Header;
