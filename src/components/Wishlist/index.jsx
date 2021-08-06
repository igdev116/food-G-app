import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AuthContext } from "contexts/AuthProvider";
import { db } from "configs/firebaseConfig";
import { addToWishlist, setIsShowWishlist } from "./wishlistSlice";
import useFirestoreProducts from "hooks/useFirestoreProducts";

// material ui core
import { Button } from "@material-ui/core";

// material ui icons
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import RadioOutlinedIcon from "@material-ui/icons/RadioOutlined";

import EmptyCart from "components/EmptyCart";

import EmptyCartImg from "assets/svgs/Common/empty-cart.svg";

import "./Wishlist.scss";

function Wishlist(props) {
  const dispatch = useDispatch();

  const { user } = useContext(AuthContext);
  const { wishlistProducts, isShowWishlist } = useSelector(
    (state) => state.wishlist
  );

  const { removeFromFirestore } = useFirestoreProducts();

  // get data from firestore
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .onSnapshot((doc) => {
          if (doc.data()) {
            const action = addToWishlist(doc.data().wishlist);

            dispatch(action);
          }
        });
    }
  }, [user, dispatch]);

  const handleRemoveFromFirestore = (product) => {
    removeFromFirestore(user.uid, {
      type: "wishlist",
      productInfo: product,
    });
  };

  const closeWishlist = () => {
    const action = setIsShowWishlist(false);

    dispatch(action);
  };

  return (
    <div className={isShowWishlist ? "wishlist active" : "wishlist"}>
      <div className="wishlist__top">
        <div className="wishlist__shop">
          <RadioOutlinedIcon />
          <span>Your wishlist</span>
        </div>

        <Button onClick={closeWishlist}>
          <ExitToAppOutlinedIcon />
        </Button>
      </div>

      <div className="wishlist__items">
        {wishlistProducts.length <= 0 && (
          <EmptyCart src={EmptyCartImg} type="wishlist" />
        )}
        {wishlistProducts.map(
          ({ id, name, img, dsc, price, rate, country }) => (
            <div key={id} className="wishlist__item">
              <div className="wishlist__img">
                <img src={img} alt="" />
              </div>
              <div className="wishlist__content">
                <span className="wishlist__name">{name}</span>
                <p className="wishlist__description">{dsc}</p>
                <span className="wishlist__price">${price}</span>
              </div>

              <Button
                onClick={() =>
                  handleRemoveFromFirestore({
                    id,
                    name,
                    img,
                    dsc,
                    price,
                    rate,
                    country,
                  })
                }
                className="wishlist__rm"
              >
                <DeleteOutlineIcon />
              </Button>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Wishlist;
