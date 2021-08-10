import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

// gsap
import gsap from "gsap";

// material ui icons
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

// material ui core
import { Container } from "@material-ui/core";

import PrimaryButton from "components/PrimaryButton";
import LoadedImage from "components/LoadedImage";

import "./HomeBanner.scss";

function HomeBanner(props) {
  const { title, description, strong, background } = props;

  let containerRef = useRef(null);
  let titleRef = useRef(null);
  let descRef = useRef(null);
  let btnRef = useRef(null);

  // animation
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef,
        start: "-20% top",
      },
    });

    tl.from(titleRef, { x: -20, duration: 0.8 })
      .from(
        descRef,
        {
          x: 20,

          duration: 0.7,
        },
        "-=0.2"
      )
      .from(btnRef, { y: 20, duration: 0.8 }, "-=0.2");
  }, []);

  return (
    <div
      ref={(el) => (containerRef = el)}
      className="home-banner"
      style={{
        backgroundImage: `url(${LoadedImage(background)})`,
      }}
    >
      <Container className="container-ui">
        <div className="home-banner__container">
          <div ref={(el) => (titleRef = el)} className="home-banner__title">
            {title}
          </div>
          <div
            ref={(el) => (descRef = el)}
            className="home-banner__description"
          >
            {description}
            <strong>{strong}</strong>
          </div>

          <div ref={(el) => (btnRef = el)}>
            <PrimaryButton subClass="red" page="shop">
              <AddShoppingCartIcon className="home-banner__icon" />
              Order now
            </PrimaryButton>
          </div>
        </div>
      </Container>
    </div>
  );
}

HomeBanner.propsTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  strong: PropTypes.string,
  background: PropTypes.string,
};

export default HomeBanner;
