import React, { Component } from "react";
import firebase from "../../firebase";

export class PhoneButton extends React.Component {
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
  submitPhoneNumberAuth = () => {
    let reCaptcha = new firebase.auth.RecaptchaVerifier("reCaptcha");
    let number = "+917799044392";
    firebase
      .auth()
      .signInWithPhoneNumber(number, reCaptcha)
      .then(function (e) {
        let code = prompt("enter the otp");
        if (code === null) return;
        e.confirm(code)
          .then(function (result) {
            console.log("result.user", result.user.phoneNumber);
            document.querySelector("label").textContent =
              result.user + "number verified succesfully";
          })
          .catch((error) => {
            console.log(error);
          });
      });
  };
  handleClick = () => {
    debugger;
    // var recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
    var number = "+917799044392";
    firebase
      .auth()
      .signInWithPhoneNumber(number)
      .then(function (e) {
        var code = prompt("Enter the otp", "");

        if (code === null) return;

        e.confirm(code)
          .then(function (result) {
            console.log(result.user);

            document.querySelector("label").textContent +=
              result.user.phoneNumber + "Number verified";
          })
          .catch(function (error) {
            console.error(error);
          });
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  setupRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "normal",
        callback: function (response) {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        },
        "expired-callback": function () {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
        },
      }
    );
  };
  testing = () => {
    // event.preventDefault();
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: function (response) {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          this.onSignInSubmit();
        },
      }
    );
  };

  onSignInSubmit = () => {
    debugger;
    var phoneNumber = "+917799044392";
    var appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        var code = window.prompt("Enter otp");
        confirmationResult
          .confirm(code)
          .then(function (result) {
            // User signed in successfully.
            var user = result.user;
            // ...
          })
          .catch(function (error) {
            // User couldn't sign in (bad verification code?)
            // ...
          });
      })
      .catch(function (error) {
        // Error; SMS not sent
        // ...
      });
  };

  render() {
    return (
      <>
        <div>
          {/* Add two inputs for "phoneNumber" and "code"  */}
          {/* <input type="tel" id="phoneNumber" />
          <input type="text" id="code" />
          <button onClick={this.handleClick}>Hey Steve Click Me</button> */}
          {/* <!-- Add two buttons to submit the inputs --> */}
          {/* <button id="sign-in-button" onClick={this.submitPhoneNumberAuth}>
            SIGN IN WITH PHONE
          </button>
          <button id="confirm-code" onClick="submitPhoneNumberAuthCode()">
            ENTER CODE
          </button> */}
        </div>
        <div>Phone Login</div>
        <div>
          <button onClick={this.toggleHidden.bind(this)}>
            Click to show modal
          </button>
          {!this.state.isHidden && (
            <h2>
              <form onSubmit={this.onSignInSubmit}>
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
      </>
    );
  }
}

const Child = () => <div className="modal">Hello, World!</div>;

export default PhoneButton;
