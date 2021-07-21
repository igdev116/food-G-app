import { useDispatch } from "react-redux";

import { db } from "firebase/configs";
import { addToCart } from "components/Cart/cartSlice";

function useFirestore() {
  const dispatch = useDispatch();

  const addToFirestore = (uid, product) => {
    db.collection("users")
      .doc(uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          const { type, productInfo } = product || "";
          const cartData = doc.data().cart;
          const cartFavourite = doc.data().favourite;

          const action = addToCart(cartData);
          dispatch(action);

          productInfo &&
            db
              .collection("users")
              .doc(uid)
              .set({
                cart:
                  type === "success" ? cartData.concat(productInfo) : cartData,
                favourite:
                  type === "favourite"
                    ? cartFavourite.concat(productInfo)
                    : cartFavourite,
              });
        } else {
          db.collection("users").doc(uid).set({
            cart: [],
            favourite: [],
          });
        }
      })
      .catch((error) => {
        console.log("Fail to fetch:", error.message);
      });
  };

  return { addToFirestore };
}

export default useFirestore;
