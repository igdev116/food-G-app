import React, { useContext, useState } from "react";

import { AuthContext } from "context/AuthProvider";

import PrimaryButton from "components/PrimaryButton";

// material ui core
import { Avatar } from "@material-ui/core";

// material ui icons
import StarIcon from "@material-ui/icons/Star";

import "./DetailTabComment.scss";

function DetailTabComment() {
  const [areaValue, setAreaValue] = useState("");

  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAreaValue("");
  };

  const handleSelectStar = (e) => {
    console.log(e.target);
  };

  return (
    <div className="detail-tab__comment">
      <div className="detail-tab__comment-container">
        <div className="detail-tab__comment-customer">
          <Avatar
            className="detail-tab__comment-customer-avatar"
            src=""
            alt="Avatar"
          />
          <div className="detail-tab__comment-wrapper">
            <div className="detail-tab__comment-row">
              <h4 className="detail-tab__comment-name">Minh Hung</h4>
              <span className="detail-tab__comment-time">3 days ago</span>
            </div>
            <div className="detail-tab__comment-stars">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <p className="detail-tab__comment-content">
              Although the legendary Double Burger really needs no introduction,
              please allow us… Tucked in between three soft buns are two
              all-beef patties, cheddar cheese, ketchup, onion, pickles and
              iceberg lettuce. Hesburger’s own paprika and cucumber mayonnaise
              add the crowning touch. Oh baby!
            </p>
          </div>
        </div>
      </div>

      <div className="detail-tab__comment-user">
        <Avatar
          src={user && user.photoURL}
          className="detail-tab__comment-avatar"
          alt="Avatar"
        />

        <form onSubmit={handleSubmit} className="detail-tab__comment-form">
          <div className="detail-tab__comment-row">
            <div
              onClick={(e) => handleSelectStar(e)}
              className="detail-tab__comment-rate"
            >
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <span className="detail-tab__comment-msg">
              (Please choose an one)
            </span>
          </div>
          <textarea
            className="detail-tab__comment-textarea"
            placeholder="Type your comment here..."
            onChange={(e) => setAreaValue(e.target.value)}
            value={areaValue}
          />
          <button type="submit">
            <PrimaryButton subClass="red detail-tab__comment-submit">
              Post comment
            </PrimaryButton>
          </button>
        </form>
      </div>
    </div>
  );
}

export default DetailTabComment;
