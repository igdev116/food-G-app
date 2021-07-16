import { useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import PrimaryButton from "components/PrimaryButton";
import Checkbox from "components/Checkbox";

// material ui core
import { Button } from "@material-ui/core";

// material ui icons
import StarIcon from "@material-ui/icons/Star";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import EventAvailableOutlinedIcon from "@material-ui/icons/EventAvailableOutlined";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import "./DetailContent.scss";

DetailContent.propsTypes = {
  product: PropTypes.object,
};

DetailContent.defaultProps = {
  product: null,
};

const dataOptions = [
  {
    content: "Buy 2 get 15 percent off",
    percentOff: "15",
  },
  {
    content: "Buy 3 get 25 percent off",
    percentOff: "25",
  },
  {
    content: "Buy 5 get 50 percent off",
    percentOff: "50",
  },
];

function DetailContent(props) {
  const { product } = props;
  const { name, price, country, dsc, rate } = product ? product : "";

  const params = useParams();
  const paramsName = params.name.replace("-", " ");

  const [selectedRadio, setSelectedRadio] = useState("");

  const handleOptionChange = (e) => {
    setSelectedRadio(e.target.value);
  };

  return (
    <div className="detail-content">
      <h2 className="detail-content__title">{name}</h2>

      <div className="detail-content__rate">
        <div className="detail-content__stars">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          {rate === 5 ? <StarIcon /> : <StarBorderIcon />}
        </div>
        <div className="detail-content__reviews">
          <span className="detail-content__reviews-qnt">5</span>
          <span> Customer Reviews</span>
        </div>
      </div>

      <div className="detail-content__price">
        <strong>${price}</strong>
      </div>

      <div className="detail-content__tags">
        <div className="detail-content__tag">
          <span className="detail-content__tag-label">Category:</span>
          <span className="detail-content__tag-detail category">
            {paramsName}
          </span>
        </div>
        <div className="detail-content__tag">
          <span className="detail-content__tag-label">Country:</span>
          <span className="detail-content__tag-detail">{country}</span>
        </div>
      </div>

      <p className="detail-content__description">{dsc}</p>

      <form className="detail-content__form">
        <div className="detail-content__form-title">Choose your options</div>
        {dataOptions.map(({ content, percentOff }) => (
          <Checkbox
            key={content}
            checked={selectedRadio === content}
            content={content}
            value={content}
            handleOptionChange={handleOptionChange}
          />
        ))}
      </form>

      <div className="detail-content__btns">
        <div className="detail-content__btn-handle ">
          <Button className="detail-content__btn-dec btn-circle">
            <AddIcon />
          </Button>
          <span className="detail-content__btn-qnt">100</span>
          <Button className="detail-content__btn-inc btn-circle">
            <RemoveIcon />
          </Button>
        </div>
        <PrimaryButton subClass="red">
          <AddShoppingCartOutlinedIcon />
          <span>Add to cart</span>
        </PrimaryButton>
        <Button className="detail-content__btn-like btn-circle">
          <FavoriteBorderIcon />
        </Button>
      </div>

      <div className="detail-content__commits">
        <div className="detail-content__commit">
          <LocalShippingOutlinedIcon />
          <span>Free global shipping on all orders</span>
        </div>
        <div className="detail-content__commit">
          <EventAvailableOutlinedIcon />
          <span>2 hours easy returns if you change your mind</span>
        </div>
        <div className="detail-content__commit">
          <LocalOfferOutlinedIcon />
          <span>Order before noon for same day dispatch</span>
        </div>
      </div>
    </div>
  );
}

export default DetailContent;
