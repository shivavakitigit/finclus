import React from "react";
import "../../views/examples/AboutUs.scss";
// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

class AboutUs extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          {/* <section className="section-profile-cover section-shaped my-0"> */}
          {/* Circles background */}
          {/* <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div> */}
          {/* SVG separator */}
          {/* <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div> */}
          {/* </section> */}
          <section className="section container" style={{ marginTop: "7rem" }}>
            {/* <Container> */}
            <div class="row">
              <div class="col-6">
                <h5 class="font-weight-bolder">
                  Be the part of the future of credit and <br></br>
                  Welcome to your one stop identity solution
                  <br></br>
                  complience at finClus.
                  <br></br>
                  prompt financial support for everyone round the clock.
                </h5>
              </div>
              <div class="col-6">
                <img
                  style={{
                    width: "23rem",
                    position: "relative",
                    top: "-3rem",
                    bottom: "26rem",
                    left: "3rem",
                  }}
                  alt="..."
                  src={require("assets/img/brand/At the office-amico.png")}
                />
                <div
                  class="row"
                  style={{ position: "absolute", left: "8rem", top: "21rem" }}
                ></div>
              </div>
            </div>
            <section class="home-newsletter">
              <div class="container">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="single">
                      <h2>Subscribe to our Newsletter</h2>
                      <label
                        for="inputPassword5"
                        style={{ color: "#6e6f88 !important", display: "flex" }}
                      >
                        Sign up for Newsletter,updates,news,pre-launch offers
                      </label>
                      <div class="input-group">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Enter your email"
                          style={{ border: "3px solid #0f3d61" }}
                        />
                        <span class="input-group-btn">
                          <button class="btn btn-theme" type="submit">
                            Subscribe
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </main>
        {/* <SimpleFooter /> */}
      </>
    );
  }
}

export default AboutUs;
