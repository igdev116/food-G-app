import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { AuthContext } from "contexts/AuthProvider";
import { auth } from "firebase/configs";
import { setIsAtCheckout, setIsShowCart } from "./headerSlice";
import { setIsShowWishlist } from "components/Wishlist/wishlistSlice";

// material ui core
import { Container, Avatar } from "@material-ui/core";

// material ui icons
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HomeIcon from "@material-ui/icons/Home";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import StoreMallDirectoryIcon from "@material-ui/icons/StoreMallDirectory";
import EmojiFoodBeverageIcon from "@material-ui/icons/EmojiFoodBeverage";
import LoyaltyOutlinedIcon from "@material-ui/icons/LoyaltyOutlined";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import Dialog from "components/Dialog";
import BurgerNavbar from "./BurgerNavbar";
import Cart from "components/Cart";
import Wishlist from "components/Wishlist";

import Logo from "assets/svgs/logo.svg";
import "./Header.scss";

function Header() {
  const [isStickyTop, setIsStickyTop] = useState(false);
  const [isShowBurgerNav, setIsShowBurgerNav] = useState(false);
  const [isShowDialog, setIsShowDialog] = useState(false);
  const [totalQnt, setTotalQnt] = useState(0);

  const history = useHistory();

  const dispatch = useDispatch();

  const { user, setUser, hasHeader } = useContext(AuthContext);
  const cartProducts = useSelector((state) => state.cart);
  const { isAtCheckout } = useSelector((state) => state.header);

  const showBurgerNav = () => {
    setIsShowBurgerNav(!isShowBurgerNav);
  };

  const handleBackToHome = () => {
    const action = setIsAtCheckout(false);

    history.push("/home");
    setIsAtCheckout(false);
    dispatch(action);
  };

  const handleLogIn = () => {
    history.push("/login");
  };

  const handleLogOut = () => {
    auth.signOut().then(() => {
      setUser(false);
    });
  };

  const toggleCart = () => {
    const action = setIsShowCart(true);

    user && dispatch(action);
    !user && setIsShowDialog(true);
  };

  const toggleWishlist = () => {
    const action = setIsShowWishlist(true);

    dispatch(action);
  };

  // handle scroll
  useEffect(() => {
    const scrollShowNav = () => {
      if (window.scrollY >= 100) {
        setIsStickyTop(true);
      } else {
        setIsStickyTop(false);
      }
    };
    window.addEventListener("scroll", scrollShowNav);

    return window.addEventListener("scroll", scrollShowNav);
  }, []);

  // handle products quanity
  useEffect(() => {
    const totalQnt = cartProducts.reduce(
      (accumulator, item) => accumulator + item.qnt,
      0
    );

    setTotalQnt(totalQnt);
  }, [cartProducts]);

  return (
    <>
      <header
        className={isStickyTop ? "navbar active" : "navbar"}
        style={{ display: hasHeader ? "block" : "none" }}
      >
        <Container>
          <div
            className={
              isAtCheckout ? "navbar__container checkout" : "navbar__container"
            }
          >
            {/* mobile */}
            <EmojiFoodBeverageIcon
              onClick={showBurgerNav}
              className="hamburger-btn"
            />

            {/* desktop */}
            <div onClick={handleBackToHome} className="navbar__link">
              <img className="navbar__logo" src={Logo} alt="logo" />
            </div>

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
              <div onClick={toggleCart} className="navbar__cart">
                <ShoppingCartIcon />
                <div className="navbar__cart-qnt">{user ? totalQnt : 0}</div>
              </div>

              {user ? (
                <div className="navbar__account">
                  <Avatar src={user.photoURL} />
                  <div className="navbar__username">{user.displayName}</div>

                  <ul className="navbar__account-options">
                    <li className="navbar__account-option">
                      <PermContactCalendarIcon />
                      <span>My account</span>{" "}
                    </li>
                    <li
                      onClick={toggleWishlist}
                      className="navbar__account-option"
                    >
                      <LoyaltyOutlinedIcon />
                      <span>My wishlist</span>{" "}
                    </li>
                    <li
                      onClick={handleLogOut}
                      className="navbar__account-option"
                    >
                      <ExitToAppIcon />
                      <span>Logout</span>
                    </li>
                  </ul>
                </div>
              ) : (
                <div onClick={handleLogIn} className="navbar__account">
                  <Avatar />
                  <div className="navbar__username navbar__username--signed-out">
                    Sign In
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </header>

      {/* mobile */}
      <BurgerNavbar
        isShow={isShowBurgerNav}
        showBurgerNav={showBurgerNav}
        user={user}
        handleLogOut={handleLogOut}
        handleLogIn={handleLogIn}
      />

      <Cart />
      <Wishlist setIsShowWishlist={setIsShowWishlist} />

      <Dialog isShow={isShowDialog} setIsShow={setIsShowDialog} />
    </>
  );
}

export default Header;
