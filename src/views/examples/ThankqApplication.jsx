import React from "react";
import "../../views/examples/AboutUs.scss";
// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";
// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import StepperComponent from "components/Stepper/Stepper";
import "../../assets/PersonalScss/global.scss";
import "../examples/ContactUs.scss";

class ThanksApplication extends React.Component {
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
          <div class="row" style={{ marginTop: "-11rem" }}>
            <div class="col-12">
              <div
                className="section container"
                style={{
                  marginTop: "1rem",
                  position: "relative",
                  left: "1rem",
                  top: "17rem",
                }}
              >
                <h2 class="h1-responsive font-weight-bold text-left">
                  THANK YOU FOR YOUR APPLICATION!
                </h2>
                <h4 style={{ marginLeft: "2rem" }}>
                  You will hear from us on further steps soon.
                </h4>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-8">
              <div
                class="text-center text-md-left"
                style={{ marginTop: "2rem" }}
              >
                <div
                  class="home-newsletter"
                  style={{
                    position: "relative",
                    right: "25rem",
                    top: "19rem",
                    width: "66rem",
                  }}
                >
                  <div
                    class="single"
                    //   style={{
                    //     left: "0rem",
                    //     top: "5rem",
                    //     margin: "0px !important",
                    //   }}
                  >
                    <label
                      for="inputPassword5"
                      style={{
                        color: "#6e6f88 !important",
                        display: "flex",
                      }}
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
            <div class="col-4">
              <img
                style={{
                  width: "28rem",
                  position: "relative",
                  top: "6rem",
                  left: "-2rem",
                }}
                alt="..."
                src={require("assets/img/brand/job application thank you/Confirmed-pana.png")}
              />
              <div
                class="row"
                style={{ position: "absolute", left: "8rem", top: "21rem" }}
              ></div>
            </div>
          </div>
        </main>
        <div
          class="row container"
          style={{ marginTop: "4rem", marginLeft: "11rem" }}
        >
          <div class="col-12">
            <h4>Refer your friends to start earning rewards</h4>
            <button
              type="button"
              style={{ borderRadius: "21px" }}
              class="btn1 btn-primary2"
            >
              Click here to create your referal link
            </button>
          </div>
        </div>
        <div style={{ marginTop: "5rem" }}>
          <SimpleFooter />
        </div>
      </>
    );
  }
}

export default ThanksApplication;
