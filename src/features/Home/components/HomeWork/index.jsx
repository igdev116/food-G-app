import { homeWorkData } from "utils/staticData";

// material ui
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import "assets/styles/_typography.scss";
import "./styles.scss";

function HomeWork() {
  return (
    <section className="home-work">
      <Container>
        <div className="primary-yellow-text">Order now!</div>
        <h2 className="primary-heading-text">How it works</h2>

        <div className="home-work__steps">
          <Grid container spacing={3}>
            {homeWorkData.map(({ img, step, content, arrow }, index) => (
              <Grid key={index} item xs={12} sm={6} lg={3}>
                <div className="home-work__step">
                  <div className="home-work__thumb">
                    <div className="home-work__thumb-wrapper">
                      <img
                        className="home-work__img"
                        src={img}
                        alt="steps"
                      ></img>
                      <span>0{step} Step</span>
                      <div
                        style={{ backgroundImage: `url(${arrow})` }}
                        className="home-work__thumb-arrow"
                      ></div>
                    </div>
                  </div>
                  <div className="home-work__content">{content}</div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </section>
  );
}

export default HomeWork;
