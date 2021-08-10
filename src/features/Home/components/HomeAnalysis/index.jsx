import { useState, useEffect } from "react";

import { homeAnalysisData } from "utils/staticData";

// gsap
import gsap from "gsap";

// material ui core
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import LoadedImage from "components/LoadedImage";

import { AnalysisThumb } from "utils/homeImages";

import "./styles.scss";

function HomeAnalysis() {
  const [isShow, setIsShow] = useState(false);

  let containerRef;
  let numWpOneRef;
  let numWpTwoRef;
  let numWpThreeRef;
  let numWpFourRef;
  let numOneRef;
  let numTwoRef;
  let numThreeRef;
  let numFourRef;
  const numWpRefs = [numWpOneRef, numWpTwoRef, numWpThreeRef, numWpFourRef];
  const numRefs = [numOneRef, numTwoRef, numThreeRef, numFourRef];

  // animation
  useEffect(() => {
    gsap.registerEffect({
      name: "counter",
      extendTimeline: true,
      defaults: {
        duration: 3,
        ease: "power1",
        increment: 1,
      },
      effect: (targets, config) => {
        const tl = gsap.timeline();
        const num = targets[0].innerText.replace(/\,/g, "");
        targets[0].innerText = num;

        tl.to(
          targets,
          {
            duration: config.duration,
            innerText: config.end,
            modifiers: {
              innerText(innerText) {
                return gsap.utils
                  .snap(config.increment, innerText)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              },
            },
            ease: config.ease,
            opacity: 1,
          },
          0
        );

        return tl;
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef,
        start: "-20% top",
      },
    });

    tl.from(numWpRefs[0], { duration: 0.5 })
      .counter(numRefs[0], { end: 350 }, 0)
      .from(numWpRefs[1], { duration: 0.5 }, 0)
      .counter(numRefs[1], { end: 2678 }, 0)
      .from(numWpRefs[2], { duration: 0.5 }, 0)
      .counter(numRefs[2], { end: 60 }, 0)
      .from(numWpRefs[3], { duration: 0.5 }, 0)
      .counter(numRefs[3], { end: 30 }, 0);
  }, []);

  const toggleModal = () => {
    setIsShow(!isShow);
  };

  return (
    <section
      className="home-analysis"
      style={{ backgroundImage: `url(${LoadedImage(AnalysisThumb)})` }}
      ref={(el) => (containerRef = el)}
    >
      <div className="home-analysis__wrapper">
        <div className="home-analysis__content">
          <div className="home-analysis__content-text">
            <span className="home-analysis__content-name">Sandwich</span>
            <span className="home-analysis__content-price">$45</span>
          </div>
          <div onClick={toggleModal} className="home-analysis__btn">
            <div className="triangle"></div>
          </div>
          <span className="gooey"></span>
          <span className="gooey"></span>
          <span className="gooey"></span>
        </div>
        <div
          className={
            isShow
              ? "home-analysis__video-container show"
              : "home-analysis__video-container"
          }
        >
          <span onClick={toggleModal} className="home-analysis__modal"></span>
          <iframe
            title="Map"
            className={
              isShow ? "home-analysis__video show" : "home-analysis__video"
            }
            src={`https://www.youtube.com/embed/QWrq6c8s07w?autoplay=0&mute=${
              isShow ? 0 : 1
            }`}
          ></iframe>
        </div>
      </div>

      <div className="home-analysis__container">
        <Container>
          <Grid container spacing={3}>
            {homeAnalysisData.map(({ description, suffix }, index) => (
              <Grid key={index} item xs={12} sm={6} md={3}>
                <div ref={(el) => (numWpRefs[index] = el)}>
                  <span
                    ref={(el) => (numRefs[index] = el)}
                    className="home-analysis__qnt"
                  >
                    0
                  </span>
                  <span className="home-analysis__qnt">{suffix}</span>
                </div>
                <div className="home-analysis__description">{description}</div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </section>
  );
}

export default HomeAnalysis;
