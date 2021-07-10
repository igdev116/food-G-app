import { useContext } from "react";
import { useParams } from "react-router-dom";

import { ApiContext } from "context/ApiProvider";
import { PrevFilterContext } from "context/PrevFilterProvider";

import Checkbox from "components/Checkbox";

// material ui icons
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import "./ShopFilters.scss";

const dataTypes = [
  {
    img: "burger.svg",
    name: "Burgers",
    type: "burgers",
  },
  {
    img: "bread.svg",
    name: "Breads",
    type: "breads",
  },
  {
    img: "sandwich.svg",
    name: "Sandwiches",
    type: "sandwiches",
  },
  {
    img: "drinks.svg",
    name: "Drinks",
    type: "drinks",
  },
  {
    img: "pizza.svg",
    name: "Pizzas",
    type: "pizzas",
  },
];

const dataPrices = [
  { content: "Under $100", range: { price_lte: 100 } },
  { content: "$50 to $100", range: { price_gte: 50, price_lte: 100 } },
  { content: "Under $50", range: { price_lte: 50 } },
  { content: "Above $100", range: { price_gte: 100 } },
];

function ShopFilters() {
  const { name } = useParams();

  const { handlePrevious } = useContext(PrevFilterContext);
  const { selectedRadio, nameActive } = handlePrevious();
  const { getProducts } = useContext(ApiContext);

  const onFilterByName = (params) => {
    const { prevName, setPrevName, setSelectedRadio, setNameActive } =
      handlePrevious("name", params);

    if (params !== prevName) {
      getProducts(params);
      setSelectedRadio(null);
    }

    setNameActive(params);
    setPrevName(params);
  };

  const onFilterByPrice = (params) => {
    const { prevPrice, setPrevPrice } = handlePrevious("price", params);
    console.log("onFilterPrice");
    if (prevPrice !== params) {
      getProducts(name, params);
    }

    setPrevPrice(params);
  };

  const onFilterByRate = (params) => {
    const stringParams = JSON.stringify(params); // covert to string to compare
    const { prevRate, setPrevRate } = handlePrevious("rate", params);

    if (prevRate !== stringParams) {
      getProducts(name, params);
    }

    setPrevRate(stringParams);
  };

  const handleOptionChange = (e) => {
    const { setSelectedRadio } = handlePrevious();

    setSelectedRadio(e.target.value);
  };

  return (
    <div className="shop-filters">
      <h2 className="shop-filters__title">Popular</h2>
      <ul className="shop-filters__list">
        {dataTypes.map(({ img, name, type }) => (
          <li
            key={name}
            onClick={() => onFilterByName(type)}
            className={
              type === nameActive
                ? "shop-filters__item active"
                : "shop-filters__item"
            }
          >
            <img src={`/svgs/Shop/${img}`} alt="Shop icons" />
            <span className="shop-filters__item-name">{name}</span>
          </li>
        ))}
      </ul>

      <h2 className="shop-filters__title">Price</h2>
      <form className="shop-filters__form">
        {dataPrices.map(({ content, range }, index) => (
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

      <h2 className="shop-filters__title">Rate</h2>
      <div
        onClick={() => onFilterByRate({ rate_like: 5 })}
        className="shop-filters__stars"
      >
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <span>& up</span>
      </div>
      <div
        onClick={() => onFilterByRate({ rate_like: 4 })}
        className="shop-filters__stars"
      >
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarBorderIcon />
        <span>& up</span>
      </div>
      <div
        onClick={() => onFilterByRate({ rate_like: 3 })}
        className="shop-filters__stars"
      >
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
