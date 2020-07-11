import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

import "../../components/Navbars/DemoNavbar.scss";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  style={{
                    left: "-2rem",
                    right: " 0rem",
                    position: "relative",
                  }}
                  alt="..."
                  src={require("assets/img/brand/Finclus-Logo.png")}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/Finclus-Logo.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>

                <Nav
                  className="align-items-lg-center ml-lg-auto"
                  style={{ position: "relative", left: "7rem" }}
                  navbar
                >
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://twitter.com/finclubai1?lang=en"
                      id="tooltip184698705"
                      target="_blank"
                    >
                      <span
                        to="/login-page"
                        tag={Link}
                        style={{
                          display: "inline-block",
                          margin: "1px -5px 0px 9px",
                          fontSize: "19px",
                          color: "black",
                        }}
                      >
                        <span>Get Started</span>
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <Button
                      className="btn-neutral btn-icon borderShadow"
                      color="default"
                      target="_blank"
                    >
                      <img
                        style={{ height: "23px" }}
                        alt="..."
                        src={require("assets/img/brand/fincID.png")}
                      />
                    </Button>
                  </NavItem>
                  <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                    <img
                      style={{
                        position: "relative",
                        right: "-1rem",
                        top: "-24px",
                      }}
                      alt="..."
                      src={require("assets/img/brand/hamburger.png")}
                    />
                  </NavbarBrand>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
