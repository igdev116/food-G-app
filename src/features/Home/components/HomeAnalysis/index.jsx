import { useState, useRef, useEffect } from "react";

import { homeAnalysisData } from "utils/staticData";

// material ui core
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

// react count up
import CountUp from "react-countup";

import { AnalysisThumb } from "utils/homeImages";

import "./styles.scss";

function HomeAnalysis() {
  const [isShow, setIsShow] = useState(false);
  const [isCome, setIsCome] = useState(false);
  const ref = useRef();

  // handle scroll to count component
  useEffect(() => {
    const spaceToTop = ref.current.offsetTop;

    const handleScrollToCount = () => {
      if (window.scrollY > spaceToTop + 100) {
        setIsCome(true);
      }
    };
    window.addEventListener("scroll", handleScrollToCount);

    return window.addEventListener("scroll", handleScrollToCount);
  }, []);

  const toggleModal = () => {
    setIsShow(!isShow);
  };

  return (
    <section
      className="home-analysis"
      style={{ backgroundImage: `url(${AnalysisThumb})` }}
      ref={ref}
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
            {homeAnalysisData.map(
              (
                { end, delay, duration, description, suffix, seperator },
                index
              ) => (
                <Grid key={index} item xs={12} sm={6} md={3}>
                  <div className="home-analysis__qnt">
                    {isCome ? (
                      <CountUp
                        className="home-analysis__qnt"
                        end={end}
                        delay={delay}
                        duration={duration}
                        seperator={seperator}
                      />
                    ) : (
                      0
                    )}
                    {suffix}
                  </div>
                  <div className="home-analysis__description">
                    {description}
                  </div>
                </Grid>
              )
            )}
          </Grid>
        </Container>
      </div>
    </section>
  );
}

export default HomeAnalysis;
