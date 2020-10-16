import React from "react";
import "../../views/MainView/AboutUs.scss";
// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";
// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import StepperComponent from "components/Stepper/Stepper";
import "../../assets/PersonalScss/global.scss";
import "../MainView/ContactUs.scss";
import { Link } from "react-router-dom";


class ContactUs extends React.Component {
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
          <section className="section container" style={{ marginTop: "3rem" }}>
            <div class="row">
              <div class="col-8">
                <section class="my-5">
                  <h3 class="h1-responsive font-weight-bold text-left my-5">
                    Drop us a line
                  </h3>
                  <p></p>
                  <div class="row">
                    <div class="col-md-9 mb-md-0 mb-5">
                      <form>
                        <div class="row">
                          <div class="col-md-10">
                            <div class="md-form mb-0">
                              <label className="contact-name" class="">
                                Fullname*
                              </label>
                              <input
                                type="text"
                                id="contact-name"
                                class="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-10">
                            <div class="md-form mb-0">
                              <label className="contact-name" class="">
                                Address*
                              </label>
                              <input
                                type="text"
                                id="contact-name"
                                class="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-10">
                            <div class="md-form mb-0">
                              <label className="contact-name" class="">
                                Email Address
                              </label>
                              <input
                                type="email"
                                id="contact-name"
                                class="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-10">
                            <div class="md-form mb-0">
                              <label for="contact-Subject" class="">
                                Company Name
                              </label>
                              <input
                                type="text"
                                id="contact-Subject"
                                class="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-10">
                            <div class="md-form">
                              <label for="contact-message"> message</label>
                              <textarea
                                id="contact-message"
                                class="form-control md-textarea"
                                rows="3"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </form>
                      <div
                        class="text-center text-md-left"
                        style={{ marginTop: "2rem" }}
                      >
                        <Link to="/thankq-page">
                          <button type="button" class="btn btn-primary1">
                            Press Me
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
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
                  src={require("assets/img/brand/contact us/Mobile-rafiki.png")}
                />
                <div
                  class="row"
                  style={{ position: "absolute", left: "8rem", top: "21rem" }}
                ></div>
              </div>
            </div>
            <div class="row"></div>

            <section class="home-newsletter">
              <div class="container">
                <div class="row">
                  <div class="col-sm-12">
                    <div
                      class="single"
                      style={{
                        left: "0rem",
                        top: "5rem",
                        margin: "0px !important",
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

export default ContactUs;
