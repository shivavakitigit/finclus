import React from "react";
import "../../views/MainView/AboutUs.scss";
// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";
// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import StepperComponent from "components/Stepper/Stepper";
import "../../assets/PersonalScss/global.scss";

class CareerPage extends React.Component {
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
          <section className="section container" style={{ marginTop: "7rem" }}>
            <div class="row">
              <div class="col-8">
                <h5 class="font-weight-bolder">
                  Mission:<br></br>
                  <p class="font-weight-normal">
                    To create financial inclusions with trust and technology
                  </p>
                </h5>
                <h5 class="font-weight-bolder">
                  Vision:<br></br>
                  <p class="font-weight-normal">
                    We believe every person has the right to participate fully
                    in global economy.We<br></br>
                    have an obligation to empower people to exercise this right
                    and improve financial<br></br>
                    health.
                  </p>
                  <p class="font-weight-normal">
                    Company culture can be simply discribed as the ambience of
                    the organization.<br></br>
                    FincluS believes is an open, transactional, and a tight-knit
                    team based culture<br></br>
                    where employees participate at all levels.Our employees
                    enjoy working with each<br></br>
                    other and put their heart and soul in helping Finclus achive
                    extraordinary
                    <br></br>heights.
                  </p>
                  <p class="font-weight-normal">
                    FincluS is dedicated to establishing a solid culture of
                    trust<br></br>
                    transparency and innovation that could practicaly create a
                    new
                  </p>
                </h5>
              </div>
              <div class="col-4">
                <img
                  style={{
                    width: "23rem",
                    position: "relative",
                    top: "-3rem",
                    bottom: "26rem",
                    left: "3rem",
                  }}
                  alt="..."
                  src={require("assets/img/brand/Careers/Experts-bro-2.png")}
                />
                <div
                  class="row"
                  style={{ position: "absolute", left: "8rem", top: "21rem" }}
                ></div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <StepperComponent></StepperComponent>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <h1 style={{ display: "flex", justifyContent: "center" }}>
                  <b>JOIN US</b>
                </h1>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <h2 style={{ display: "flex", justifyContent: "center" }}>
                  OUR OPEN ROLES
                </h2>
              </div>
            </div>
            <div
              class="row"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <div class="col-md-9">
                <form>
                  <div class="col-lg-12 mb-3">
                    <div class="input-group mycustom">
                      <input
                        type="text"
                        class="form-control rounded-0"
                        id="validationDefaultUsername"
                        aria-describedby="inputGroupPrepend2"
                        required
                      />
                      <label
                        style={{
                          display: "inline-block",
                          position: "relative",
                          top: "-43px",
                          left: "5px",
                          fontSize: "24px",
                        }}
                      >
                        UX/UI Intern
                      </label>
                      <p
                        for="formGroupExampleInput"
                        style={{
                          color: "#6e6f88 !important",
                          fontSize: "17px",
                          position: "relative",
                          top: "-1px",
                          right: "131px",
                        }}
                      >
                        Design
                      </p>
                      <div class="input-group-prepend">
                        <img
                          // class="btn btn-primary btn-sm rounded-0"
                          // id="inputGroupPrepend2"
                          style={{
                            width: "92px",
                            position: "relative",
                            top: "13px",
                            bottom: "0px",
                            left: "-9px",
                            height: "38px",
                          }}
                          alt="..."
                          src={require("assets/img/brand/Careers/Group 40.png")}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div
              class="row"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <div class="col-md-9">
                <form>
                  <div class="col-lg-12 mb-3">
                    <div class="input-group mycustom">
                      <input
                        type="text"
                        class="form-control rounded-0"
                        id="validationDefaultUsername"
                        aria-describedby="inputGroupPrepend2"
                        required
                      />
                      <label
                        style={{
                          display: "inline-block",
                          position: "relative",
                          top: "-43px",
                          left: "5px",
                          fontSize: "24px",
                        }}
                      >
                        Backend Developer
                      </label>
                      <p
                        for="formGroupExampleInput"
                        style={{
                          color: "#6e6f88 !important",
                          fontSize: "17px",
                          position: "relative",
                          top: "-1px",
                          right: "209px",
                        }}
                      >
                        Design
                      </p>
                      <div class="input-group-prepend">
                        <img
                          // class="btn btn-primary btn-sm rounded-0"
                          // id="inputGroupPrepend2"
                          style={{
                            width: "92px",
                            position: "relative",
                            top: "13px",
                            bottom: "0px",
                            left: "-9px",
                            height: "38px",
                          }}
                          alt="..."
                          src={require("assets/img/brand/Careers/Group 40.png")}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div
              class="row"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <div class="col-md-9">
                <form>
                  <div class="col-lg-12 mb-3">
                    <div class="input-group mycustom">
                      <input
                        type="text"
                        class="form-control rounded-0"
                        id="validationDefaultUsername"
                        aria-describedby="inputGroupPrepend2"
                        required
                      />
                      <label
                        style={{
                          display: "inline-block",
                          position: "relative",
                          top: "-43px",
                          left: "5px",
                          fontSize: "24px",
                        }}
                      >
                        Android & iOS Developer
                      </label>
                      <p
                        for="formGroupExampleInput"
                        style={{
                          color: "#6e6f88 !important",
                          fontSize: "17px",
                          position: "relative",
                          top: "-1px",
                          right: "270px",
                        }}
                      >
                        Technology
                      </p>
                      <div class="input-group-prepend">
                        <img
                          // class="btn btn-primary btn-sm rounded-0"
                          // id="inputGroupPrepend2"
                          style={{
                            width: "92px",
                            position: "relative",
                            top: "13px",
                            bottom: "0px",
                            left: "-9px",
                            height: "38px",
                          }}
                          alt="..."
                          src={require("assets/img/brand/Careers/Group 40.png")}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div
              class="row"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <div class="col-md-9">
                <form>
                  <div class="col-lg-12 mb-3">
                    <div class="input-group mycustom">
                      <input
                        type="text"
                        class="form-control rounded-0"
                        id="validationDefaultUsername"
                        aria-describedby="inputGroupPrepend2"
                        required
                      />
                      <label
                        style={{
                          display: "inline-block",
                          position: "relative",
                          top: "-43px",
                          left: "5px",
                          fontSize: "24px",
                        }}
                      >
                        Data Scientist
                      </label>
                      <p
                        for="formGroupExampleInput"
                        style={{
                          color: "#6e6f88 !important",
                          fontSize: "17px",
                          position: "relative",
                          top: "-1px",
                          right: "145px",
                        }}
                      >
                        Technology
                      </p>
                      <div class="input-group-prepend">
                        <img
                          // class="btn btn-primary btn-sm rounded-0"
                          // id="inputGroupPrepend2"
                          style={{
                            width: "92px",
                            position: "relative",
                            top: "13px",
                            bottom: "0px",
                            left: "-9px",
                            height: "38px",
                          }}
                          alt="..."
                          src={require("assets/img/brand/Careers/Group 40.png")}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div
              class="row"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <div class="col-md-9">
                <form>
                  <div class="col-lg-12 mb-3">
                    <div class="input-group mycustom">
                      <input
                        type="text"
                        class="form-control rounded-0"
                        id="validationDefaultUsername"
                        aria-describedby="inputGroupPrepend2"
                        required
                      />
                      <label
                        style={{
                          display: "inline-block",
                          position: "relative",
                          top: "-43px",
                          left: "5px",
                          fontSize: "24px",
                        }}
                      >
                        Data Analyst
                      </label>
                      <p
                        for="formGroupExampleInput"
                        style={{
                          color: "#6e6f88 !important",
                          fontSize: "17px",
                          position: "relative",
                          top: "-1px",
                          right: "135px",
                        }}
                      >
                        Technology
                      </p>
                      <div class="input-group-prepend">
                        <img
                          // class="btn btn-primary btn-sm rounded-0"
                          // id="inputGroupPrepend2"
                          style={{
                            width: "92px",
                            position: "relative",
                            top: "13px",
                            bottom: "0px",
                            left: "-9px",
                            height: "38px",
                          }}
                          alt="..."
                          src={require("assets/img/brand/Careers/Group 40.png")}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div
              class="row"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <div class="col-md-9">
                <form>
                  <div class="col-lg-12 mb-3">
                    <div class="input-group mycustom">
                      <input
                        type="text"
                        class="form-control rounded-0"
                        id="validationDefaultUsername"
                        aria-describedby="inputGroupPrepend2"
                        required
                      />
                      <label
                        style={{
                          display: "inline-block",
                          position: "relative",
                          top: "-43px",
                          left: "5px",
                          fontSize: "24px",
                        }}
                      >
                        Blockchain Developer
                      </label>
                      <p
                        for="formGroupExampleInput"
                        style={{
                          color: "#6e6f88 !important",
                          fontSize: "17px",
                          position: "relative",
                          top: "-1px",
                          right: "234px",
                        }}
                      >
                        Technology
                      </p>
                      <div class="input-group-prepend">
                        <img
                          // class="btn btn-primary btn-sm rounded-0"
                          // id="inputGroupPrepend2"
                          style={{
                            width: "92px",
                            position: "relative",
                            top: "13px",
                            bottom: "0px",
                            left: "-9px",
                            height: "38px",
                          }}
                          alt="..."
                          src={require("assets/img/brand/Careers/Group 40.png")}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <h4>
                  <b>
                    Still looking for more info about our future opportunities?
                    drop up us an e-mail
                  </b>
                </h4>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <h4>
                  {" "}
                  We love to connect with bright minds, drop us an e-mail to say
                  Hi! and chat more.
                </h4>
              </div>
            </div>

            <section class="home-newsletter">
              <div class="container">
                <div class="row">
                  <div class="col-sm-12">
                    <div
                      class="single"
                      style={{
                        left: "0rem",
                        top: "5rem",
                        marginTop: "1px !important",
                      }}
                    >
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
        <div class="row" style={{ marginTop: "4rem" }}>
          <div class="col-12"></div>
        </div>
        <SimpleFooter />
      </>
    );
  }
}

export default CareerPage;
