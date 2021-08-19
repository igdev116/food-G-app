import { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { googleProvider, auth, facebookProvider } from 'configs/firebaseConfig';
import { AuthContext } from 'contexts/AuthContext';

// material ui core
import { Button, Container } from '@material-ui/core';

// material ui icons
import FacebookIcon from '@material-ui/icons/Facebook';

import LoginForm from './components/LoginForm';
import LoadedImage from 'components/LoadedImage';
import ToastMessage from 'components/ToastMessage';

import LoginThumbSvg from 'assets/svgs/Login/thumb.svg';
import GoogleSvg from 'assets/svgs/Login/google.svg';

import './styles.scss';

function Login() {
  const history = useHistory();

  const { setHasHeader } = useContext(AuthContext);

  const handleGoogleLogIn = () => {
    auth
      .signInWithPopup(googleProvider)
      .then(() => {
        history.goBack();
        setHasHeader(true);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleFacebookLogIn = () => {
    auth
      .signInWithPopup(facebookProvider)
      .then(() => {
        history.goBack();
        setHasHeader(true);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleFeatureClosed = () => {
    ToastMessage('closed');
  };

  useEffect(() => {
    setHasHeader(false);
  }, [setHasHeader]);

  return (
    <section className='login'>
      <Container>
        <div className='login__container'>
          <div
            className='login__thumb'
            style={{
              backgroundImage: `url(${LoadedImage(LoginThumbSvg)})`,
            }}></div>

          <div className='login__content'>
            <h2>JOIN WITH US</h2>

            <div className='login__msg'>
              <span>Don't have an account? </span>
              <span onClick={handleFeatureClosed} className='login__msg-btn'>
                <strong>Create an account</strong>
              </span>
            </div>

            <LoginForm />

            <div className='login__separate'>
              <span className='login__separate-text'>OR</span>
            </div>

            <div className='login__options'>
              <Button
                onClick={handleGoogleLogIn}
                variant='contained'
                className='login__option login__option--gg'>
                <img src={GoogleSvg} alt='google icon' />
                Log in with Google
              </Button>

              <Button
                onClick={handleFacebookLogIn}
                variant='contained'
                className='login__option login__option--fb'>
                <FacebookIcon />
                Log in with Facebook
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Login;
