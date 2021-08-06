// material ui
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import PhoneInTalkOutlinedIcon from "@material-ui/icons/PhoneInTalkOutlined";
import SpeakerNotesOutlinedIcon from "@material-ui/icons/SpeakerNotesOutlined";
import BusinessOutlinedIcon from "@material-ui/icons/BusinessOutlined";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinearScaleIcon from "@material-ui/icons/LinearScale";

import "./styles.scss";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6} md={4}>
            <div className="footer__time">
              <div className="col">
                <span className="footer__time-day">Sunday</span>
                <span className="footer__time-day">Monday</span>
                <span className="footer__time-day">Tuesday</span>
                <span className="footer__time-day">Wednesday</span>
                <span className="footer__time-day">Friday</span>
                <span className="footer__time-day">Saturday</span>
              </div>
              <div className="col">
                <LinearScaleIcon className="footer__time-dots" />
                <LinearScaleIcon className="footer__time-dots" />
                <LinearScaleIcon className="footer__time-dots" />
                <LinearScaleIcon className="footer__time-dots" />
                <LinearScaleIcon className="footer__time-dots" />
                <LinearScaleIcon className="footer__time-dots" />
              </div>
              <div className="col">
                <span className="footer__time-hours">Closed</span>
                <span className="footer__time-hours">8.00-20.00</span>
                <span className="footer__time-hours">10.00-5.00</span>
                <span className="footer__time-hours">12.00-9.00</span>
                <span className="footer__time-hours">7.00-1.00</span>
                <span className="footer__time-hours">9.00-12.00</span>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <div className="footer__contacts">
              <h4 className="footer__contact-title">Address</h4>

              <div className="footer__contact">
                <PhoneInTalkOutlinedIcon className="footer__contact-icon" />
                <span className="footer__contact-txt">+449 888 666 0000</span>
              </div>

              <div className="footer__contact">
                <SpeakerNotesOutlinedIcon className="footer__contact-icon" />
                <span className="footer__contact-txt">foodg@gmail.com</span>
              </div>

              <div className="footer__contact">
                <BusinessOutlinedIcon className="footer__contact-icon" />
                <span className="footer__contact-txt">
                  855 Hoi An, Viet Nam
                </span>
              </div>
              <div className="footer__contact footer__contact--icons">
                <FacebookIcon style={{ fill: "#2D88FF" }} />
                <TwitterIcon style={{ fill: "#5DA9DD" }} />
                <InstagramIcon style={{ fill: "#F56040" }} />
                <YouTubeIcon style={{ fill: "#FF0000" }} />
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <div className="footer__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1864.0568347757392!2d108.34615808661933!3d15.890428922499089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420d9e24aab795%3A0x28e64d847e6eba35!2sHoi%20An%20Golden%20Rice%20Villa!5e0!3m2!1sen!2s!4v1624506959425!5m2!1sen!2s"
                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen={true}
                loading="lazy"
                scrolling="auto"
                title="map"
              ></iframe>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
