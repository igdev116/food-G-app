import { useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { ApiContext } from 'contexts/ApiContext';
import { AuthContext } from 'contexts/AuthContext';

// material ui core
import { Container } from '@material-ui/core';

import Banner from 'components/Banner';
import ShopFilters from './components/ShopFilters';
import ShopContent from './components/ShopContent';

import './styles.scss';

function Shop() {
  const { setHasHeader } = useContext(AuthContext);

  const { name } = useParams();
  const history = useHistory();

  const { getProducts } = useContext(ApiContext);

  // when browser loaded get url to re-render
  window.addEventListener('load', () => {
    const params = history.location.search;

    if (params) {
      const paramsObj = JSON.parse(
        '{"' +
          decodeURI(
            params.substr(1).replace(/&/g, '","').replace(/=/g, '":"')
          ) +
          '"}'
      );

      getProducts(name, paramsObj);
    } else {
      getProducts(name);
    }
  });

  useEffect(() => {
    setHasHeader(true);
  }, [setHasHeader]);

  return (
    <section className='shop'>
      <Banner />
      <Container>
        <div className='shop__container'>
          <ShopFilters />
          <ShopContent />
        </div>
      </Container>
    </section>
  );
}

export default Shop;
