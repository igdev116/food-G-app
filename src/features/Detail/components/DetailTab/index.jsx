import React, { useEffect, useRef, useState } from "react";
import useFirestoreComments from "hooks/useFirestoreComments";
import { useParams } from "react-router-dom";

import { detailTableData } from "utils/staticData";

import DetailTabComment from "./DetailTabComment";

import "./DetailTab.scss";

function DetailTab() {
  const [isActive, setIsActive] = useState(true);
  const [offsetLeft, setOffsetLeft] = useState(0);
  const [offsetWidth, setOffsetWidth] = useState(0);
  const [btnElement, setBtnElement] = useState(null);
  let firsBtntRef = useRef(null);
  let secondBtnRef = useRef(null);

  const { name } = useParams();
  const paramsName = name.replace("-", " ");

  const { comments } = useFirestoreComments();

  const handleSelect = (pos) => {
    if (firsBtntRef && secondBtnRef) {
      setOffsetLeft((pos === "first" ? firsBtntRef : secondBtnRef).offsetLeft);
      setOffsetWidth(
        (pos === "first" ? firsBtntRef : secondBtnRef).offsetWidth
      );
      setIsActive(pos === "first" ? true : false);
    }
  };

  // set initial offsetLeft and offsetWidth
  useEffect(() => {
    if (firsBtntRef) {
      setOffsetLeft(firsBtntRef.offsetLeft);
      setOffsetWidth(firsBtntRef.offsetWidth);
      setIsActive(true);
      setBtnElement(firsBtntRef);
    }

    const handleResizeWindow = () => {
      setOffsetLeft(btnElement && btnElement.offsetLeft);
      setOffsetWidth(btnElement && btnElement.offsetWidth);
      setIsActive(true);
    };

    window.addEventListener("resize", handleResizeWindow);
  }, [firsBtntRef, btnElement]);

  return (
    <div className="detail-tab">
      <div className="detail-tab__btns">
        <div
          ref={(el) => (firsBtntRef = el)}
          onClick={() => handleSelect("first")}
          className={isActive ? "detail-tab__btn active" : "detail-tab__btn"}
        >
          <span>Description</span>
        </div>

        <div
          ref={(el) => (secondBtnRef = el)}
          onClick={() => handleSelect("second")}
          className={!isActive ? "detail-tab__btn active" : "detail-tab__btn"}
        >
          <span>Reviews</span>
          <span>({comments.length})</span>
        </div>
        <div
          style={{ left: offsetLeft, width: offsetWidth }}
          className="detail-tab__btn-background"
        ></div>
      </div>

      {isActive ? (
        <div className="detail-tab__content">
          <p className="detail-tab__content-description">
            Although the legendary Double Burger really needs no introduction,
            please allow us… Tucked in between three soft buns are two all-beef
            patties, cheddar cheese, ketchup, onion, pickles and iceberg
            lettuce. Hesburger’s own paprika and cucumber mayonnaise add the
            crowning touch. Oh baby!
          </p>

          <div className="detail-tab__content-table">
            {detailTableData.map(({ title, description, ingredients }) => (
              <div className="detail-tab__content-col">
                <div className="detail-tab__content-col-wrapper">
                  <div className="detail-tab__content-col-title">
                    {title ? title : paramsName}
                  </div>
                  <div className="detail-tab__content-col-description">
                    {description}
                  </div>
                </div>
                <div className="detail-tab__content-ingredients">
                  {ingredients}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <DetailTabComment />
      )}

      <div className="detail-tab__review"></div>
    </div>
  );
}

export default DetailTab;
