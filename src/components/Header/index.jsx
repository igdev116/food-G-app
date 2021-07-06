import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { AuthContext } from "context/AuthProvider";
import auth from "configs/firebase";

import BurgerNavbar from "./BurgerNavbar";

// material ui core
import { Container, Avatar } from "@material-ui/core";

// material ui icons
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HomeIcon from "@material-ui/icons/Home";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import StoreMallDirectoryIcon from "@material-ui/icons/StoreMallDirectory";
import EmojiFoodBeverageIcon from "@material-ui/icons/EmojiFoodBeverage";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import Logo from "assets/svgs/logo.svg";
import "./Header.scss";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const history = useHistory();

  const { user, setUser, hasHeader } = useContext(AuthContext);

  // handle scroll
  useEffect(() => {
    const scrollShowNav = () => {
      if (window.scrollY >= 100) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };
    window.addEventListener("scroll", scrollShowNav);

    return () => {
      window.addEventListener("scroll", scrollShowNav);
    };
  }, []);

  const showBurgerNav = () => {
    setIsShow(!isShow);
  };

  const handleSignIn = () => {
    history.push("/sign-in");
  };

  const handleSignOut = () => {
    auth.signOut().then(() => {
      setUser(false);
    });
  };

  return (
    <>
      <header
        className={isActive ? "navbar active" : "navbar"}
        style={{ display: hasHeader ? "block" : "none" }}
      >
        <Container>
          <div className="navbar__container">
            {/* mobile */}
            <EmojiFoodBeverageIcon
              onClick={showBurgerNav}
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

              {user ? (
                <div className="navbar__account">
                  <Avatar src={user.photoURL} />
                  <div className="navbar__username">{user.displayName}</div>

                  <ul className="navbar__account-options">
                    <li className="navbar__account-option">
                      <AccountCircleIcon />
                      <span>Profile</span>
                    </li>
                    <li className="navbar__account-option">
                      <PermContactCalendarIcon />
                      <span>My account</span>{" "}
                    </li>
                    <li
                      onClick={handleSignOut}
                      className="navbar__account-option"
                    >
                      <ExitToAppIcon />
                      <span>Logout</span>
                    </li>
                  </ul>
                </div>
              ) : (
                <div onClick={handleSignIn} className="navbar__account">
                  <Avatar />
                  <div className="navbar__username">SIGN IN</div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </header>

      {/* mobile */}
      <BurgerNavbar isShow={isShow} showBurgerNav={showBurgerNav} user={user} />
    </>
  );
}

export default Header;
