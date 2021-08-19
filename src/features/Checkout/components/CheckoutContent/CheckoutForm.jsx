import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import useFirestoreProducts from 'hooks/useFirestoreProducts';
import { AuthContext } from 'contexts/AuthContext';
import { setIsAtCheckout } from 'components/Header/headerSlice';

// yup
import * as yup from 'yup';

// react hook form
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// material ui icons
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import PrimaryButton from 'components/PrimaryButton';
import CheckoutFormField from './CheckoutFormField';
import CheckoutFormSelect from './CheckoutFormSelect';
import CheckoutLoading from '../CheckoutLoading';
import ToastMessage from 'components/ToastMessage';

import './CheckoutForm.scss';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required('Please enter your first name')
    .matches(/^[a-z]+$/, 'Must be only text'),
  lastName: yup
    .string()
    .required('Please enter your last name')
    .matches(/^[a-z]+$/, 'Must be only text'),
  address: yup
    .string()
    .required('Please enter your adress')
    .matches(/^[a-z]+$/, 'Must be only text'),
  country: yup.object().nullable(true).required('A country is required'),
  phone: yup
    .string()
    .required('A phone number is required')
    .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, 'Phone number is not valid'),
});

function CheckoutForm(props) {
  const { setIsCheckoutSuccess, setIsPurchased } = props;

  const [isShowLoading, setIsShowLoading] = useState(false);

  const history = useHistory();

  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);
  const { user } = useContext(AuthContext);
  const { removeAllFromFirestore } = useFirestoreProducts();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = () => {
    if (cartProducts.length <= 0) {
      ToastMessage('warning');
      return;
    }

    reset({
      firstName: '',
      lastName: '',
      address: '',
      country: '',
      phone: '',
    });
    setIsCheckoutSuccess(true);
    setIsShowLoading(true);

    removeAllFromFirestore(user.uid);

    // remove loading when form is submitted
    setTimeout(() => {
      setIsCheckoutSuccess(false);
      setIsShowLoading(false);
      setIsPurchased(true);
    }, 1000);
  };

  const returnToShop = () => {
    const action = setIsAtCheckout(false);

    dispatch(action);
    history.push('/shop/best-foods');
  };

  // if empty cart then reset progress to false
  useEffect(() => {
    cartProducts.length <= 0 ?? setIsCheckoutSuccess(false);
  }, [cartProducts]);

  return (
    <>
      <form onSubmit={handleSubmit(onHandleSubmit)} className='checkout-form'>
        <h2 className='checkout-form__title'>Shipping address</h2>
        <div className='checkout-form__fields'>
          <div className='checkout-form__row'>
            <CheckoutFormField
              label='First name'
              errors={errors}
              register={register}
              name='firstName'
            />
            <CheckoutFormField
              label='Last name'
              errors={errors}
              register={register}
              name='lastName'
            />
          </div>
          <CheckoutFormField
            label='Address'
            errors={errors}
            register={register}
            name='address'
          />
          <div className='checkout-form__row'>
            <Controller
              name='country'
              control={control}
              render={({ field }) => (
                <CheckoutFormSelect errors={errors} field={field} />
              )}
            />
            <CheckoutFormField
              label='Phone'
              errors={errors}
              register={register}
              name='phone'
            />
          </div>
        </div>

        <div className='checkout-form__bottom'>
          <div onClick={returnToShop} className='checkout-form__return'>
            <ChevronLeftIcon />
            <span>Return to shop</span>
          </div>
          <button type='submit'>
            <PrimaryButton subClass='red'>Checkout</PrimaryButton>
          </button>
        </div>
      </form>
      {isShowLoading && <CheckoutLoading />}
    </>
  );
}

CheckoutForm.propTypes = {
  setIsCheckoutSuccess: PropTypes.func.isRequired,
  setIsPurchased: PropTypes.func.isRequired,
};

export default CheckoutForm;
