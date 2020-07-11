import React from "react";
import { Button, Container, Row, Col } from "reactstrap";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          <section
            className="section section-hero section-shaped"
            style={{ margin: "7rem -109px 11px 132px" }}
          >
            <div className="row">
              <div className="col-md-6">
                <h5 class="font-weight-bolder">
                  Be the part of the future of credit and <br></br>
                  Welcome to your one stop identity solution
                  <br></br>
                  complience at finClus.
                  <br></br>
                  prompt financial support for everyone round the clock.
                </h5>
                <br></br>
                <p class="font-weight-lighter"  style={{fontSize: '20px'}}>
                  Loan opportunities=10x, Obstacles and longer <br></br>
                  <p>procedures = -10</p>
                </p>
                <img
                  style={{
                    position: "relative",
                    width: "9rem",
                    top: "1rem",
                    left: "-1rem",
                  }}
                  alt="..."
                  src={require("assets/img/brand/Component 2 – 1.png")}
                />
              </div>
              <div className="col-md-6">
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
                  src={require("assets/img/brand/People search-amico.png")}
                />
              </div>
            </div>
          </section>{" "}
        </div>
      </>
    );
  }
}

export default Hero;
