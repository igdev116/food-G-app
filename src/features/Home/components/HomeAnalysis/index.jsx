import React, { useState, useRef, useEffect } from "react";

// material ui
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

// count up
import CountUp from "react-countup";

import "./HomeAnalysis.scss";

const data = [
  {
    end: 350,
    delay: 0.3,
    duration: 4,
    suffix: "+",
    description: "Cups of Coffee",
  },
  {
    end: 2678,
    delay: 0.2,
    duration: 4,
    separator: ",",
    suffix: "+",
    description: "Orders Everyday",
  },
  {
    end: 60,
    delay: 0.5,
    duration: 4,
    description: "Skilled Professionals",
  },
  {
    end: 30,
    delay: 0.5,
    duration: 4,
    description: "Sandwichs at Hour",
  },
];

function HomeAnalysis() {
  const [isShow, setIsShow] = useState(false);
  const [isCome, setIsCome] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const spaceToTop = ref.current.offsetTop;

    window.addEventListener("scroll", () => {
      if (window.scrollY > spaceToTop + 150) {
        setIsCome(true);
      }
    });
  }, []);

  const handleModal = () => {
    setIsShow(!isShow);
  };

  return (
    <section
      className="home-analysis"
      style={{ backgroundImage: "url(/imgs/Home/analysis-thumb.jpg)" }}
      ref={ref}
    >
      <div className="home-analysis__wrapper">
        <div className="home-analysis__content">
          <div className="home-analysis__content-text">
            <span className="home-analysis__content-name">Sandwich</span>
            <span className="home-analysis__content-price">$45</span>
          </div>
          <a onClick={handleModal} className="home-analysis__btn">
            <div className="triangle"></div>
          </a>
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
          <span onClick={handleModal} className="home-analysis__modal"></span>
          <iframe
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
            {data.map(
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
