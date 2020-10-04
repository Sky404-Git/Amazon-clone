import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputEmailEvent = (e) => {
    setEmail(e.target.value);
  };

  const inputPasswordEvent = (e) => {
    setPassword(e.target.value);
  };

  //This prevent default will prevent the page from refreshing
  const signIn = (e) => {
    e.preventDefault();
    //signin with email and password, if done authentication push to main page.
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    //some fancy firebase register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //create user with email and password, then do authorisation, if authorised push to the main page.
        //it means a new user is successfully created with email and password
        //console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      //if not show error message
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail:</h5>
          <input type="text" value={email} onChange={inputEmailEvent} />
          <h5>Password:</h5>
          <input
            type="password"
            value={password}
            onChange={inputPasswordEvent}
          />
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the Akash's AMAZON FAKE Conditions of the
          Use and Sale. Please see our Privacy Notice, our Cookies Notice and
          our Interest-Based Ads Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Clone Account
        </button>
      </div>
    </div>
  );
}
export default Login;
