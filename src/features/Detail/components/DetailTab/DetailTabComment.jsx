import React, { useRef } from "react";

import { PRIMARY_YELLOW_COLOR } from "constants/colors";
import useFirestoreComments from "hooks/useFirestoreComments";

// react time ago
import TimeAgo from "react-timeago";

// material ui core
import { Avatar } from "@material-ui/core";

// material ui icons
import StarIcon from "@material-ui/icons/Star";

import DetailTabUser from "./DetailTabUser";

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
      <div ref={ref} className="detail-tab-comment__container">
        {comments.map(({ uname, uphoto, content, rate, date }, index) => (
          <div key={index} className="detail-tab-comment__customer">
            <Avatar
              className="detail-tab-comment__customer-avatar"
              src={uphoto}
              alt="Avatar"
            />
            <div className="detail-tab-comment__wrapper">
              <div className="detail-tab-comment__row">
                <h4 className="detail-tab-comment__name">{uname}</h4>
                <TimeAgo
                  className="detail-tab-comment__date"
                  date={date}
                  minPeriod={60}
                />
              </div>
              <div className="detail-tab-comment__stars">
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
              <p className="detail-tab-comment__content">{content}</p>
            </div>
          </div>
        ))}
      </div>

      <DetailTabUser colors={colors} commentRef={ref} />
    </div>
  );
}

export default DetailTabComment;
