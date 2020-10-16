import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";
import Index from "views/Index.js";
import Landing from "views/MainView/Landing.js";
import Login from "views/MainView/Login.js";
import AboutUs from "views/MainView/AboutUs.js";
import Register from "views/MainView/Register.js";
import CareerPage from "views/MainView/CareerPage";
import StepperComponent from "././components/Stepper/Stepper";
import ContactUs from "views/MainView/ContactUs";
import ThanksApplication from "views/MainView/ThankqApplication";
import PhoneButton from "components/PhoneAuth/PhoneButton.jsx";
import firebase from "./firebase.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <Index {...props} />} />
      <Route
        path="/landing-page"
        exact
        render={(props) => <Landing {...props} />}
      />
      <Route path="/login" exact render={(props) => <Login {...props} />} />
      <Route
        path="/about-page"
        exact
        render={(props) => <AboutUs {...props} />}
      />
      <Route
        path="/career-page"
        exact
        render={(props) => <CareerPage {...props} />}
      />

      <Route
        path="/contact-us"
        exact
        render={(props) => <ContactUs {...props} />}
      />

      <Route
        path="/register-page"
        exact
        render={(props) => <Register {...props} />}
      />
      <Route
        path="/thankq-page"
        exact
        render={(props) => <ThanksApplication {...props} />}
      />
      <Route
        path="/phone-button-page"
        exact
        render={(props) => <PhoneButton {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
