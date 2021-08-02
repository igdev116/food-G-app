import React, { useContext, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import { AuthContext } from "contexts/AuthProvider";
import { PRIMARY_YELLOW_COLOR } from "constants/colors";
import useFirestoreComments from "hooks/useFirestoreComments";

// react time ago
import TimeAgo from "react-timeago";

// material ui core
import { Avatar } from "@material-ui/core";

// material ui icons
import StarIcon from "@material-ui/icons/Star";

import PrimaryButton from "components/PrimaryButton";

import "./DetailTabComment.scss";

function DetailTabComment() {
  const ref = useRef(null);
  const { comments } = useFirestoreComments();

  const colors = {
    yellow: PRIMARY_YELLOW_COLOR,
    blur: "#FDDA81",
  };

  return (
    <div className="detail-tab__comment">
      <div ref={ref} className="detail-tab__comment-container">
        {comments.map(({ uname, uphoto, content, rate, date }, index) => (
          <div key={index} className="detail-tab__comment-customer">
            <Avatar
              className="detail-tab__comment-customer-avatar"
              src={uphoto}
              alt="Avatar"
            />
            <div className="detail-tab__comment-wrapper">
              <div className="detail-tab__comment-row">
                <h4 className="detail-tab__comment-name">{uname}</h4>
                <TimeAgo
                  className="detail-tab__comment-date"
                  date={date}
                  minPeriod={60}
                />
              </div>
              <div className="detail-tab__comment-stars">
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <StarIcon
                      key={index}
                      style={{
                        fill: index < rate ? colors.yellow : colors.blur,
                      }}
                    />
                  ))}
              </div>
              <p className="detail-tab__comment-content">{content}</p>
            </div>
          </div>
        ))}
      </div>

      <DetailTabCommentUser colors={colors} commentRef={ref} />
    </div>
  );
}

function DetailTabCommentUser({ colors, commentRef }) {
  const [areaValue, setAreaValue] = useState("");
  const [selectedStar, setSelectedStar] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);

  const { id } = useParams();

  const { addToFirestore } = useFirestoreComments();
  const { user } = useContext(AuthContext);

  const handleSelectedStar = (pos) => {
    setSelectedStar(pos);
  };

  const handleHoveredStar = (pos) => {
    setHoveredStar(pos);
  };

  const handleSubmit = (e) => {
    const date = new Date().getTime();

    e.preventDefault();

    if (!areaValue.trim()) return;

    addToFirestore(id, {
      uname: user.displayName,
      uphoto: user.photoURL,
      content: areaValue,
      rate: selectedStar,
      date,
    });
    setAreaValue("");
    setSelectedStar(0);

    window.scrollTo({
      top: commentRef.current.offsetTop - 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="detail-tab__comment-user">
      <Avatar
        src={user && user.photoURL}
        className="detail-tab__comment-avatar"
        alt="Avatar"
      />

      <form onSubmit={handleSubmit} className="detail-tab__comment-form">
        <div className="detail-tab__comment-row">
          <div className="detail-tab__comment-rate">
            {Array(5)
              .fill()
              .map((_, index) => (
                <StarIcon
                  onClick={() => handleSelectedStar(index + 1)}
                  onMouseOver={() => handleHoveredStar(index + 1)}
                  onMouseLeave={() => handleHoveredStar(0)}
                  style={{
                    fill:
                      index < (selectedStar || hoveredStar)
                        ? colors.yellow
                        : colors.blur,
                  }}
                />
              ))}
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
  );
}

export default DetailTabComment;
