import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";
import "../IndexSections/Menus.scss";

class Menus extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Col
            lg="12"
            style={{
              position: "absolute",
              top: "-14rem",
              left: "9px",
              padding: "7rem",
            }}
          >
            <nav
              class="navbar navbar-expand-lg navbar-white bg-white"
              style={{ border: "3px solid #6a6aa7", height: "4rem" }}
            >
              <a class="navbar-brand" href="#">
                Products
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-item nav-link active" href="#">
                    Developers
                  </a>
                  <Link to="/about-page">
                    <a class="nav-item nav-link" href="#">
                      AboutUs
                    </a>
                  </Link>
                  <Link to="/career-page">
                    <a class="nav-item nav-link" href="#">
                      Careers
                    </a>
                  </Link>

                  <a class="nav-item nav-link" href="#">
                    Community
                  </a>
                  <a class="nav-item nav-link" href="#">
                    Legal
                  </a>
                  <Link to="/contact-us">
                    <a class="nav-item nav-link" href="#">
                      ContactUs
                    </a>
                  </Link>
                </div>
              </div>
            </nav>
          </Col>
        </Row>

        <div class="row">
          <div class="col-4">
            {" "}
            <img
              style={{
                width: "23rem",
                position: "relative",
                top: "3rem",
                bottom: "26rem",
                left: "4rem",
              }}
              alt="..."
              src={require("assets/img/brand/MobileLogin.png")}
            />
          </div>
          <div class="col-6">
            {" "}
            <img
              style={{
                width: "23rem",
                position: "relative",
                top: "-3rem",
                bottom: "26rem",
                left: "3rem",
              }}
              alt="..."
              src={require("assets/img/brand/Account-rafiki.png")}
            />
            <div
              class="row"
              style={{ position: "absolute", left: "8rem", top: "21rem" }}
            >
              <div class="col-md-6">
                <form class="email-wrapper--1O1Zv">
                  <label class="sr-only--2G0SV" for="ffk1">
                    Your email address
                  </label>
                  <input
                    class="email--1FCId"
                    autocomplete="off"
                    type="email"
                    placeholder="Your email address"
                    id="ffk1"
                  ></input>
                </form>
              </div>
              <div class="col-md-6">
                <img
                  style={{
                    position: "relative",
                    width: "9rem",
                    top: "4px",
                    left: "67px",
                  }}
                  alt="..."
                  src={require("assets/img/brand/Component 2 – 1.png")}
                />
              </div>
            </div>
          </div>
          <div class="col"></div>
        </div>
        <div class="row" style={{ margin: "85px 16px 0px 76px" }}>
          <div class="col-md-12">
            <h5 class="font-weight-bolder">
              FincID - <br></br> Welcome to your one stop identity solution
            </h5>
            <p class="font-weight-lighter" style={{ fontSize: "20px" }}>
              The most inexpensive and secure space to store all your identity
              related documents, shareble and <br></br>
              verifiable with just one click.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            {" "}
            <img
              style={{
                width: "23rem",
                position: "relative",
                top: "3rem",
                bottom: "26rem",
                left: "4rem",
              }}
              alt="..."
              src={require("assets/img/brand/Analytics-bro.png")}
            />
          </div>
          <div class="col-5" style={{ position: "relative", top: "13rem" }}>
            <h5 class="font-weight-bolder">Credit Monotoring.</h5>
            <p class="font-weight-lighter" style={{ fontSize: "20px" }}>
              The 3 billion borrowers across the world can finally trust the
              <br></br>
              innovative credit infrastructure build by FincluS
            </p>

            <img
              style={{
                position: "relative",
                width: "9rem",
                top: "1rem",
                left: "-5px",
              }}
              alt="..."
              src={require("assets/img/brand/Component 2 – 1.png")}
            />
          </div>
          <div class="col-3">
            <img
              style={{
                width: "7rem",
                position: "relative",
                // top: "3rem",
                // // bottom: "26rem",
                left: "3rem",
              }}
              alt="..."
              src={require("assets/img/brand/1.png")}
            />
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <img
              style={{
                width: "7rem",
                position: "relative",
                left: "9rem",
              }}
              alt="..."
              src={require("assets/img/brand/2.png")}
            />
          </div>
        </div>
        <div
          class="row"
          style={{
            position: "relative",
            left: "6rem",
            top: "-7rem",
            bottom: "-13rem",
          }}
        >
          <div
            class="col-6"
            style={{ position: "relative", top: "10rem", left: "8rem" }}
          >
            <p class="font-weight-bolder">Underwriting</p>
            <p class="font-weight-normal">
              Our risk underwriting method is innovative.The scorecard<br></br>
              consists of a regularity and intent, and we aim to make sure{" "}
              <br></br>
              that our lenders are protected from defaulters.
            </p>
            <img
              style={{
                position: "relative",
                width: "9rem",
                top: "4px",
                left: "-7px",
              }}
              alt="..."
              src={require("assets/img/brand/Component 2 – 1.png")}
            />
          </div>
          <div class="col-6">
            <img
              // style={{
              //   width: "7rem",
              //   position: "relative",
              //   // top: "3rem",
              //   // // bottom: "26rem",
              //   left: "9rem",
              // }}

              style={{
                width: "23rem",
                position: "relative",
                top: "3rem",
                bottom: "26rem",
                left: "4rem",
              }}
              alt="..."
              src={require("assets/img/brand/Work chat-bro.png")}
            />
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            {" "}
            <img
              style={{
                width: "23rem",
                position: "relative",
                top: "3rem",
                bottom: "26rem",
                left: "4rem",
              }}
              alt="..."
              src={require("assets/img/brand/Profile pic-pana.png")}
            />
          </div>
          <div
            class="col-4"
            style={{ position: "relative", top: "12rem", left: "3rem" }}
          >
            <p class="font-weight-bolder">1-Click Loan Apply</p>
            <p class="font-weight-normal">
              Create a fincID to start applying for loans across the world
              <br></br>
              innovative credit infrastructure build by FincluS
            </p>
            <img
              style={{
                position: "relative",
                width: "9rem",
                top: "4px",
                left: "-7px",
              }}
              alt="..."
              src={require("assets/img/brand/Component 2 – 1.png")}
            />
          </div>
          <div class="col-4">
            <img
              style={{
                width: "7rem",
                position: "relative",
                // top: "3rem",
                top: "-3rem",
                left: "9rem",
              }}
              alt="..."
              src={require("assets/img/brand/3.png")}
            />
          </div>
        </div>

        <div
          class="row"
          // style={{ position: "absolute", left: "42rem", top: "128rem" }}
        >
          <div class="col-md-4"></div>

          <div
            class="col-md-4"
            style={{ position: "relative", left: "10rem", bottom: "-5rem" }}
          >
            <label for="inputPassword5" style={{ color: "green !important" }}>
              Sign up for Newsletter,updates,news,pre-launch offers
            </label>

            <div class="input-group">
              <input
                type="email"
                class="form-control"
                placeholder="Enter your email"
              />
              <div class="input-group-append">
                <input type="submit" class="btn btn-primary" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Menus;
