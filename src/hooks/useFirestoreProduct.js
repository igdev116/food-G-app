import { db } from "firebase/configs";

function useFirestore() {
  const checkProductExists = (data, productInfo) => {
    return data.some((item) => item.id === productInfo.id);
  };

  const handleAddToCart = (data, productInfo, action) => {
    const isProductExists = checkProductExists(data, productInfo);

    if (isProductExists) {
      const index = data.findIndex((item) => item.id === productInfo.id);
      const productQnt = data[index].qnt;

      const updatedProduct = {
        ...data[index],
        qnt:
          action === "increase"
            ? productQnt + 1
            : action === "decrease"
            ? productQnt - 1 || 1
            : productQnt + productInfo.qnt || 1,
      };

      data[index] = updatedProduct;

      return data;
    } else {
      return data.concat({ ...productInfo, qnt: productInfo.qnt || 1 });
    }
  };

  const addToFirestore = (uid, product) => {
    db.collection("users")
      .doc(uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          const { type, productInfo, action } = product || "";
          const cartData = doc.data().cart;
          const wishlistData = doc.data().wishlist;

          productInfo &&
            db
              .collection("users")
              .doc(uid)
              .set({
                cart:
                  type === "success"
                    ? handleAddToCart(cartData, productInfo, action)
                    : cartData,
                wishlist:
                  type === "wishlist" &&
                  !checkProductExists(wishlistData, productInfo)
                    ? wishlistData.concat(productInfo)
                    : wishlistData,
              });
        } else {
          db.collection("users").doc(uid).set({
            cart: [],
            wishlist: [],
          });
        }
      })
      .catch((error) => {
        console.log("Fail to fetch:", error.message);
      });
  };

  const removeFromFirestore = (uid, product) => {
    db.collection("users")
      .doc(uid)
      .get()
      .then((doc) => {
        const { type, productInfo } = product;
        const cartData = doc.data().cart;
        const wishlistData = doc.data().wishlist;

        const index = (type === "success" ? cartData : wishlistData).findIndex(
          (item) => item.id === productInfo.id
        );

        type === "success"
          ? cartData.splice(index, 1)
          : wishlistData.splice(index, 1);

        productInfo &&
          db.collection("users").doc(uid).set({
            cart: cartData,
            wishlist: wishlistData,
          });
      })
      .catch((error) => {
        console.log("Fail to remove:", error.message);
      });
  };

  return { addToFirestore, removeFromFirestore };
}

export default useFirestore;
