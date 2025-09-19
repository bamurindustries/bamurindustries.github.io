import { Link } from 'react-router-dom';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 w-full bg-white z-50">
      <div className="mx-auto flex justify-between items-center p-4">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/assets/bamur.png"
            alt="Bamur Industries & Engineering Private Limited Logo"
            className="w-10"
          />

          <div className="flex flex-col">
            <span className="text-sm font-bold">BAMUR</span>
            <small>आप के सफ़र का साथी</small>
          </div>
        </Link>
        <nav>
          <ul className="flex items-center space-x-4">
            <li className="hidden md:flex">
              <Link to="/products">Products</Link>
            </li>
            <li className="hidden md:flex">
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <a
                className="enquiry hidden md:flex"
                href="https://wa.me/9044991559?text=Request%20for%20enquiry"
              >
                Chat on Whats App
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
