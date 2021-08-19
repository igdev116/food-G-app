import { useContext } from 'react';
import { useSelector } from 'react-redux';

import useFirestoreProducts from 'hooks/useFirestoreProducts';
import { AuthContext } from 'contexts/AuthContext';

import CartItem from './CartItem';

import './styles.scss';

function CartItems() {
  const cartProducts = useSelector((state) => state.cart);
  const { user } = useContext(AuthContext);

  const { addToFirestore, removeFromFirestore } = useFirestoreProducts();

  const handleAddToFirestore = (product, action) => {
    addToFirestore(user.uid, {
      type: 'success',
      productInfo: product,
      action: action,
    });
  };

  const handleRemoveFromFirestore = (product) => {
    removeFromFirestore(user.uid, {
      type: 'success',
      productInfo: product,
    });
  };

  return (
    <div className='cart-items'>
      {cartProducts.map((product) => (
        <CartItem
          handleAddToFirestore={handleAddToFirestore}
          handleRemoveFromFirestore={handleRemoveFromFirestore}
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default CartItems;
