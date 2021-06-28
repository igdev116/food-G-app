import React, { useState } from "react";

// router dom
import { Link } from "react-router-dom";

// material ui
import { Container, Avatar } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HomeIcon from "@material-ui/icons/Home";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import StoreMallDirectoryIcon from "@material-ui/icons/StoreMallDirectory";
import EmojiFoodBeverageIcon from "@material-ui/icons/EmojiFoodBeverage";

import Logo from "assets/svgs/logo.svg";
import "./Header.scss";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isShow, setIsShow] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  });

  const showHamburgerNav = () => {
    setIsShow(!isShow);
  };

  return (
    <header>
      <div className={isActive ? "navbar active" : "navbar"}>
        <Container>
          <div className="navbar__container">
            {/* mobile */}
            <EmojiFoodBeverageIcon
              onClick={showHamburgerNav}
              className="hamburger-btn"
            />

            {/* desktop */}
            <Link className="navbar__link" to="/home">
              <img className="navbar__logo" src={Logo} alt="logo" />
            </Link>

            <div className="navbar--left">
              <ul className="navbar__list">
                <li className="navbar__item">
                  <HomeIcon />
                  Pages
                </li>
                <li className="navbar__item">
                  <RestaurantMenuIcon />
                  Order online
                </li>
                <li className="navbar__item">
                  <LibraryBooksIcon />
                  News
                </li>
                <li className="navbar__item">
                  <StoreMallDirectoryIcon />
                  Store locations
                </li>
              </ul>
            </div>

            <div className="navbar--right">
              <div className="navbar__cart">
                <ShoppingCartIcon />
                <div className="navbar__cart-qnt">0</div>
              </div>

              <div className="navbar__account">
                <Avatar />
                <div className="navbar__username">My account</div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* mobile */}
      <div className="hamburger-nav">
        <div
          className={
            isShow ? "hamburger-nav__content active" : "hamburger-nav__content"
          }
        >
          <div className="hamburger-nav__account">
            <Avatar className="hamburger-nav__icon" />
            <div className="hamburger-nav__username">My account</div>
          </div>

          <ul className="hamburger-nav__list">
            <li className="hamburger-nav__item">
              <HomeIcon />
              Pages
            </li>
            <li className="hamburger-nav__item">
              <RestaurantMenuIcon /> Order online
            </li>
            <li className="hamburger-nav__item">
              <LibraryBooksIcon /> News
            </li>
            <li className="hamburger-nav__item">
              <StoreMallDirectoryIcon /> Store locations
            </li>
          </ul>
        </div>

        <span
          className={
            isShow ? "hamburger-nav__overlay active" : "hamburger-nav__overlay"
          }
          onClick={showHamburgerNav}
        ></span>
      </div>
    </header>
  );
}

export default Header;
