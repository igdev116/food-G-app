import { useEffect, useContext } from 'react';

import { AuthContext } from 'contexts/AuthContext';

import HomeBanners from './components/HomeBanners';
import HomeWork from './components/HomeWork';
import HomeIngredients from './components/HomeIngredients';
import HomeCategory from './components/HomeCategory';
import HomeDelivery from './components/HomeDelivery';
import HomeProducts from './components/HomeProducts';
import HomeAnalysis from './components/HomeAnalysis';
import HomeReviews from './components/HomeReviews';

function Home() {
  const { setHasHeader } = useContext(AuthContext);

  useEffect(() => {
    setHasHeader(true);
  }, []);

  return (
    <>
      <HomeBanners />
      <HomeWork />
      <HomeIngredients />
      <HomeCategory />
      <HomeDelivery />
      <HomeProducts />
      <HomeAnalysis />
      <HomeReviews />
    </>
  );
}

export default Home;
