import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AuthContext } from 'contexts/AuthContext';
import { setIsAtCheckout } from 'components/Header/headerSlice';

import CheckoutBanner from './components/CheckoutBanner';
import CheckoutContent from './components/CheckoutContent';
import CheckoutLogin from './components/CheckoutLogin';

import './Checkout.scss';

function Checkout() {
  const dispatch = useDispatch();

  const { user } = useContext(AuthContext);

  // reset header when user refresh page
  useEffect(() => {
    const action = setIsAtCheckout(true);

    dispatch(action);
  }, []);

  return (
    <div className='checkout'>
      <CheckoutBanner />
      {user ? <CheckoutContent /> : <CheckoutLogin />}
    </div>
  );
}

export default Checkout;
