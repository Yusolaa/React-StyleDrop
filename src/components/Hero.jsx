import React from 'react';
import fashion from '../assets/images/fashion.png';
import Button from './Button';

const Hero = () => {
  return (
    <div>
      <div className="bgImg mb-10">
        <div className="bg-yellow-400 flex flex-col md:flex-row justify-between items-center p-6">
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
      </div>
      <Button title="Submit" />
    </div>
  );
};

export default Hero;
