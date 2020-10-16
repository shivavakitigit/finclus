import React from "react";
import { signInWithGoogle } from "../../firebase.js";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import { Link } from "react-router-dom";
import "../../assets/css/Login.scss";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      isHidden: true,
    };
  }
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        {/* <DemoNavbar /> */}
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="pt-lg-7">
              <Row className="justify-content-center">
                <Col lg="6" style={{ position: "relative", bottom: "9rem" }}>
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="pb-5 backgroundCss">
                      <div className="text-muted text-center mb-3">
                        <small style={{ color: "white", fontSize: "16px" }}>
                          Login with Mobile Number
                        </small>
                      </div>
                      <Form role="form">
                        <label>Mobile Number</label>
                        <FormGroup>
                          {/* <InputGroup className="input-group-alternative">
                            <Input
                              placeholder="OTP will be sent to this number"
                              type="number"
                              autoComplete="off"
                            />
                          </InputGroup> */}
                          <div class="form-group mx-sm-5 mb-2">
                            <label for="inputPassword2" class="sr-only">
                              Password
                            </label>
                            <input
                              type="password"
                              class="form-control"
                              id="inputPassword2"
                              placeholder="Password"
                            />
                          </div>
                        </FormGroup>
                      </Form>
                      <h4></h4>
                      {/* <h4 style={{ margin: "0px 0px -8px 16px" }}></h4> */}
                      {/* <div className="line"></div>
                        <div style={{ display: "inlineBlock" }}>OR</div>
                        <div className="line"></div> */}
                      <div className="text-center">
                        <div className="row">
                          <div className="col-md-12">
                            <Button
                              className="btn-neutral btn-icon w-g"
                              color="default"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              onClick={() => {
                                signInWithGoogle();
                              }}
                            >
                              <span className="btn-inner--icon mr-1">
                                <img
                                  alt="..."
                                  src={require("assets/img/icons/common/google.svg")}
                                />
                              </span>
                              <span className="btn-inner--text">
                                Login with Google
                              </span>
                            </Button>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <Button
                              className="btn-neutral btn-icon w-p"
                              color="default"
                              href="#pablo"
                              // onClick={(e) => e.preventDefault()}
                              onClick={this.toggleHidden.bind(this)}
                            >
                              <span className="btn-inner--icon mr-1">
                                <img
                                  alt="..."
                                  src={require("assets/img/icons/common/call.svg")}
                                />
                              </span>
                              {/* <Link to="/phone-button-page"> */}
                              <span className="btn-inner--text">
                                Sign in with Phone
                              </span>
                              {/* </Link>  */}
                            </Button>
                            {!this.state.isHidden && (
                              <h2>
                                <form
                                  onSubmit={this.onSignInSubmit}
                                  style={{ position: "relative", top: "3rem" }}
                                >
                                  <input
                                    type="number"
                                    class="form-control"
                                    placeholder="Enter phone number"
                                  ></input>
                                  <button class="form-control">Submit</button>
                                </form>
                              </h2>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    {/* <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-4">
                        <small>Or sign in with credentials</small>
                      </div>
                      <Form role="form">
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Email" type="email" />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Password"
                              type="password"
                              autoComplete="off"
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className="custom-control custom-control-alternative custom-checkbox">
                          <input
                            className="custom-control-input"
                            id=" customCheckLogin"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor=" customCheckLogin"
                          >
                            <span>Remember me</span>
                          </label>
                        </div>
                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="primary"
                            type="button"
                          >
                            Sign in
                          </Button>
                        </div>
                      </Form>
                    </CardBody> */}
                  </Card>
                  <Row className="mt-3">
                    <Col xs="6">
                      <a
                        className="text-light"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <small>Forgot password?</small>
                      </a>
                    </Col>
                    <Col className="text-right" xs="6">
                      <a
                        className="text-light"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <small>Create new account</small>
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Login;
