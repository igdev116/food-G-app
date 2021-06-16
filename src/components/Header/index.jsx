import React from "react";

import { Link } from "react-router-dom";
import { Avatar, Container } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import Logo from "assets/svgs/logo.svg";
import "./Header.scss";

function Header() {
  return (
    <Container fixed>
      <nav className="navbar">
        <div className="navbar--left">
          <Link className="navbar__link" to="/home">
            <img className="navbar__logo" src={Logo} />
          </Link>

          <ul className="navbar__list">
            <li className="navbar__item">
              Pages
              <KeyboardArrowDownIcon />
            </li>
            <li className="navbar__item">
              Order online
              <KeyboardArrowDownIcon />
            </li>
            <li className="navbar__item">
              News
              <KeyboardArrowDownIcon />
            </li>
            <li className="navbar__item">Store locations</li>
          </ul>
        </div>

        <div className="navbar--right">
          <div className="navbar__cart">
            <AddShoppingCartIcon />
            <span className="navbar__cart-qnt">0</span>
          </div>

          <div className="navbar__account">
            <Avatar />
            <div className="navbar__username">My account</div>
          </div>
        </div>
      </nav>
    </Container>
  );
}

export default Header;
