import { useEffect } from "react";

import gsap from "gsap";

// material ui core
import { Container } from "@material-ui/core";

import PrimaryButton from "components/PrimaryButton";
import LoadedImage from "components/LoadedImage";

import BigDeliverySvg from "assets/svgs/Home/big-delivery.svg";
import SmallDeliverySvg from "assets/svgs/Home/small-delivery.svg";

import "assets/styles/_typography.scss";
import "./styles.scss";

function HomeDelivery() {
  let containerRef;
  let captionRef;
  let headingRef;
  let descRef;
  let contactRef;
  let thumbRef;

  // animation
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef,
        start: "80% bottom",
      },
    });

    tl.from(captionRef, { x: -20, duration: 0.8 }, "-=0.2")
      .from(headingRef, { x: 20, duration: 0.8 }, "-=0.2")
      .from(descRef, { y: 20, duration: 0.8 }, "-=0.2")
      .from(contactRef, { y: 15, duration: 0.65 }, "+=0.3")
      .from(thumbRef, { x: 50, duration: 0.8 }, "-=1.2");
  }, []);

  return (
    <section ref={(el) => (containerRef = el)} className="home-delivery">
      <Container>
        <div className="home-delivery__container">
          <div className="home-delivery__col">
            <div
              ref={(el) => (captionRef = el)}
              className="primary-yellow-text"
            >
              Delivery
            </div>
            <h2
              ref={(el) => (headingRef = el)}
              className="primary-heading-text"
            >
              A Moments Of Delivered <strong>On Right Time & Place</strong>
            </h2>

            <p
              ref={(el) => (descRef = el)}
              className="home-delivery__description"
            >
              Food G is a restaurant, bar and coffee roastery located on a busy
              corner site in Farringdon's Exmouth Market. With glazed frontage
              on two sides of the building, overlooking the market and a
              bustling London inteon.
            </p>

            <div
              ref={(el) => (contactRef = el)}
              className="home-delivery__contact"
            >
              <img
                src={LoadedImage(SmallDeliverySvg)}
                className="home-delivery__contact-img"
                alt="Delivery"
              ></img>
              <div className="home-delivery__contact-col">
                <div className="home-delivery__contact-title">
                  Delivery Order Num
                </div>
                <div className="home-delivery__contact-phone">
                  <strong>123-59794069</strong>
                </div>
              </div>
              <PrimaryButton subClass="red" page="shop">
                Order Now
              </PrimaryButton>
            </div>
          </div>
          <img
            ref={(el) => (thumbRef = el)}
            src={LoadedImage(BigDeliverySvg)}
            className="home-delivery__img"
            alt="Delivery"
          />
        </div>
      </Container>
    </section>
  );
}

export default HomeDelivery;
