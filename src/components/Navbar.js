import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <>
      <nav className="navBar">
        <button type="button" onClick={handleToggle}>
          {navbarOpen ? (<MdClose style={{ color: '#fff', width: '40px', height: '40px' }} />) : (
            <FiMenu style={{ color: '#7b7b7b', width: '40px', height: '40px' }} />
          )}
        </button>
        <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
          <li className="active-link" onClick={() => closeMenu()}>
            <Link to="/">Home</Link>
          </li>
          <li className="active-link" onClick={() => closeMenu()}>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
export default Navbar;
