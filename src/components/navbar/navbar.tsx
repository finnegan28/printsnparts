import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white text-gray-600 font-mono p-4 border-b-2 border-gray-300">
      <div className="flex items-center justify-between mx-auto max-w-4xl">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo" className="size-20" />
          <h1 className="text-3xl font-semibold ml-2">Prints n Parts</h1>
        </a>
        <div className="text-2xl flex items-center justify-center px-4 py-2">
          <NavLinkComponent href="/about" text="About" />
          <NavLinkComponent href="/products" text="Products" />
          <NavLinkComponent href="/contact" text="Contact" />
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  text: string;
}

const NavLinkComponent: React.FC<NavLinkProps> = ({ href, text }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive ? 'px-4 py-2 text-black' : 'px-4 py-2 hover:text-black'
      }
    >
      {text}
    </NavLink>
  );
};

export default Navbar;