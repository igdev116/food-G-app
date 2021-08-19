import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { AuthContext } from 'contexts/AuthContext';
import { setIsAtCheckout } from 'components/Header/headerSlice';

// material ui icons
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

// material ui core
import { Container } from '@material-ui/core';

import NotFoundImg from 'assets/svgs/NotFound/404.svg';

import './styles.scss';

function NotFound() {
  const history = useHistory();

  const dispatch = useDispatch();

  const { setHasHeader } = useContext(AuthContext);

  useEffect(() => {
    setHasHeader(false);
  }, []);

  const returnToHome = () => {
    const action = setIsAtCheckout(false);

    dispatch(action);
    history.push('/home');
  };

  return (
    <Container>
      <div className='not-found'>
        <span className='not-found__caption'>404</span>
        <h2 className='not-found__heading'>Opps... Page not found</h2>
        <div className='not-found__img'>
          <img src={NotFoundImg} alt='Not found' />
        </div>
        <div onClick={returnToHome} className='not-found__return'>
          <ChevronLeftIcon />
          <span>Return to home</span>
        </div>
      </div>
    </Container>
  );
}

export default NotFound;
