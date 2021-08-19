import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ApiContext } from 'contexts/ApiContext';
import { PrevFilterContext } from 'contexts/PrevFilterContext';

import Checkbox from 'components/Checkbox';

// material ui icons
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import { Bread, Burger, Drinks, Pizza, Sandwich } from 'utils/shopSvgs';

import './styles.scss';

const typeOptions = [
  {
    img: Burger,
    name: 'Burgers',
    type: 'burgers',
  },
  {
    img: Bread,
    name: 'Breads',
    type: 'breads',
  },
  {
    img: Sandwich,
    name: 'Sandwiches',
    type: 'sandwiches',
  },
  {
    img: Drinks,
    name: 'Drinks',
    type: 'drinks',
  },
  {
    img: Pizza,
    name: 'Pizzas',
    type: 'pizzas',
  },
];

const priceOptions = [
  { content: 'Under $100', range: { price_lte: 100 } },
  { content: '$50 to $100', range: { price_gte: 50, price_lte: 100 } },
  { content: 'Under $50', range: { price_lte: 50 } },
  { content: 'Above $100', range: { price_gte: 100 } },
];

function ShopFilters() {
  const { name } = useParams();

  const { handlePrevious } = useContext(PrevFilterContext);
  const { selectedRadio, nameActive } = handlePrevious();
  const { getProducts } = useContext(ApiContext);

  const onFilterByName = (params) => {
    const { prevName, setPrevName, setSelectedRadio, setNameActive } =
      handlePrevious('name', params);

    if (params !== prevName) {
      getProducts(params);
      setSelectedRadio(null);
    }

    setNameActive(params);
    setPrevName(params);
  };

  const onFilterByPrice = (params) => {
    const { prevPrice, setPrevPrice } = handlePrevious('price', params);

    if (prevPrice !== params) {
      getProducts(name, params);
    }

    setPrevPrice(params);
  };

  const handleOptionChange = (e) => {
    const { setSelectedRadio } = handlePrevious();

    setSelectedRadio(e.target.value);
  };

  const onFilterByRate = (params) => {
    const stringParams = JSON.stringify(params); // covert to string to compare
    const { prevRate, setPrevRate } = handlePrevious('rate', params);

    if (prevRate !== stringParams) {
      getProducts(name, params);
    }

    setPrevRate(stringParams);
  };

  return (
    <div className='shop-filters'>
      <h2 className='shop-filters__title'>Popular</h2>
      <ul className='shop-filters__list'>
        {typeOptions.map(({ img, name, type }) => (
          <li
            key={name}
            onClick={() => onFilterByName(type)}
            className={
              type === nameActive
                ? 'shop-filters__item active'
                : 'shop-filters__item'
            }>
            <img src={img} alt='Shop icons' />
            <span className='shop-filters__item-name'>{name}</span>
          </li>
        ))}
      </ul>

      <h2 className='shop-filters__title'>Price</h2>
      <form className='shop-filters__form'>
        {priceOptions.map(({ content, range }) => (
          <Checkbox
            key={content}
            handleOptionClick={() => onFilterByPrice(range)}
            checked={selectedRadio === content}
            handleOptionChange={handleOptionChange}
            value={content}
            content={content}
          />
        ))}
      </form>

      <h2 className='shop-filters__title'>Rate</h2>
      <div
        onClick={() => onFilterByRate({ rate_like: 5 })}
        className='shop-filters__stars'>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <span>& up</span>
      </div>
      <div
        onClick={() => onFilterByRate({ rate_like: 4 })}
        className='shop-filters__stars'>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarBorderIcon />
        <span>& up</span>
      </div>
      <div
        onClick={() => onFilterByRate({ rate_like: 3 })}
        className='shop-filters__stars'>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarBorderIcon />
        <StarBorderIcon />
        <span>& up</span>
      </div>
    </div>
  );
}

export default ShopFilters;
