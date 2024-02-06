import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../../../assets/bamur.png'; // import your logo

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Bamur Industries & Engineering Private Limited Logo" className="w-10"/>
          <span className="text-sm font-semibold">Bamur Industries & Engineering Private Limited</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/products" className="text-blue-500 hover:text-blue-700">Products</Link></li>
            <li><Link to="/about" className="text-blue-500 hover:text-blue-700">About Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
