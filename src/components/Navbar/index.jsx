import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <figure>
          <img className="iconNav" src="/images/home-run.png"></img>
        </figure>
      </Link>
    </nav>
  );
};

export default Navbar;
