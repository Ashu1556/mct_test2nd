import React, { useState, useContext } from "react";
import "../Style/login.scss";
import { useDispatch, useSelector } from "react-redux";

import { Authoentication } from "../Context";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [storeUser, setStoreUser] = useState([]);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  let dispatch = useDispatch();

  const { setUser, setIsLoggedIn } = useContext(Authoentication);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(name)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    const minPasswordLength = 8;
    if (password.length < minPasswordLength) {
      setPasswordError(
        `Password should be at least ${minPasswordLength} characters long`
      );
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = () => {
    const userStore = {
      Name: name,
      Password: password,
      status: "false",
    };
    setStoreUser([...storeUser, userStore]);
    setIsLoggedIn(true);
    setUser(name);

    dispatch({
      type: "user_data",
      payload: userStore,
    });
  };
  return (
    <div className="container">
      <h2>Login Your account</h2>
      <div className="div_container">
        <form onSubmit={handleSubmit} className="login_container">
          <input
            type="text"
            value={name}
            placeholder="enter your  email"
            onChange={(e) => setName(e.target.value)}
            onBlur={validateEmail}
          />
          {emailError && <span className="error">{emailError}</span>}

          <input
            type="password"
            value={password}
            placeholder="enter your password"
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validatePassword}
          />
          {passwordError && <span className="error">{passwordError}</span>}

          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
