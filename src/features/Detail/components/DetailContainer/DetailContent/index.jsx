import { useState } from "react";

import CusButtons from "components/CusButtons";
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

import "./DetailContent.scss";

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

function DetailContent() {
  const [selectedRadio, setSelectedRadio] = useState("");

  const handleOptionChange = (e) => {
    setSelectedRadio(e.target.value);
  };

  return (
    <div className="detail-content">
      <h2 className="detail-content__title">asdasdasd</h2>

      <div className="detail-content__rate">
        <div className="detail-content__stars">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <div className="detail-content__reviews">
          <span className="detail-content__reviews-qnt">5</span>
          <span> Customer Reviews</span>
        </div>
      </div>

      <div className="detail-content__price">
        <strong>$100.00</strong>
      </div>

      <div className="detail-content__tags">
        <div className="detail-content__tag">
          <span className="detail-content__tag-label">Category:</span>
          <span className="detail-content__tag-detail">Chicken</span>
        </div>
        <div className="detail-content__tag">
          <span className="detail-content__tag-label">Category:</span>
          <span className="detail-content__tag-detail">Chicken</span>
        </div>
        <div className="detail-content__tag">
          <span className="detail-content__tag-label">Category:</span>
          <span className="detail-content__tag-detail">Chicken</span>
        </div>
      </div>

      <p className="detail-content__description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nam
        officiis cumque voluptates harum quidem pariatur magni inventore.
      </p>

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
        <CusButtons>
          <AddShoppingCartOutlinedIcon />
          <span>Add to cart</span>
        </CusButtons>
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
