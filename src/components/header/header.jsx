import React from 'react';
import './header.css';

const Header = ({ cartCount, goToPage }) => {
  return (
    <>
      <header className='header'>
        <nav className='header-container'>
          <div className='header-logo'>
            <a href='#'>
              <img src='/src/assets/header/logo.svg' alt='logo'></img>
            </a>
          </div>
          <div className='header-menu'>
            <ul className='header-menu-list'>
              <li>
                <a href='#' onClick={() => goToPage(1)}>
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='header-menu-list-selected'
                  onClick={() => goToPage(2)}
                >
                  Menu
                </a>
              </li>
              <li>
                <a href='#'>Company</a>
              </li>
              <li>
                <a
                  href='#'
                  className='header-menu-list-login'
                  onClick={() => goToPage(0)}
                >
                  Login
                </a>
              </li>
            </ul>
            <div className='cart-container'>
              <a href='#'>
                <div className='cart'>
                  <img src='/src/assets/header/cart.svg' alt='cart'></img>
                  <span className='cart-quantity' id='cart-quantity'>
                    {cartCount}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
