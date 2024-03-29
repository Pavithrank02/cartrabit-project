import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../utills/apiSlice";
import Background from '../../components/Background/Background'
import './Registration.css'

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setData(e.target.value);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
    setSubmitted(false);
  };
  const handleCity = (e) => {
    setCity(e.target.value);
    setSubmitted(false);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setError(true);
    } else {
      dispatch(register({
        name: name,
        email: email,
        password: password,
        phone: phone,

      }));
      setError(false);

    }

  }
  return (
    <>
      <Background />

      <div className="mainContainer">
        <div className="contentArea">
          <div className="rightSide">
            <h1>Create an Account!</h1>
            <p>
              Create your own personal <br /> account with your personal details
              carefully
            </p>
            <form>
              <input
                style={{
                  width: "100%",
                  padding: "15px",
                  border: "none",
                  outline: "none",
                  backgroundColor: "#ddd",
                  borderRadius: "5px",
                }}
                type="text"
                value={name}
                placeholder="Customer Name"
                id="username"
                onChange={handleName}
              />
              <input
                style={{
                  width: "100%",
                  padding: "15px",
                  border: "none",
                  outline: "none",
                  backgroundColor: "#ddd",
                  borderRadius: "5px",
                }}
                type="email"
                value={email}
                placeholder="Email"
                id="email"
                onChange={handleEmail}
              />

              <input
                style={{
                  width: "100%",
                  padding: "15px",
                  border: "none",
                  outline: "none",
                  backgroundColor: "#ddd",
                  borderRadius: "5px",
                }}
                type="text"
                value={phone}
                placeholder="Phone"
                id="phone"
                onChange={handlePhone}
              />

              <input
                style={{
                  width: "100%",
                  padding: "15px",
                  border: "none",
                  outline: "none",
                  backgroundColor: "#ddd",
                  borderRadius: "5px",
                }}
                type="text"
                value={city}
                placeholder="City"
                id="city"
                onChange={handleCity}
              />

              <input
                style={{
                  width: "100%",
                  padding: "15px",
                  border: "none",
                  outline: "none",
                  backgroundColor: "#ddd",
                  borderRadius: "5px",
                }}
                type="text"
                value={address}
                placeholder="Address"
                id="country"
                onChange={handleAddress}
              />

              <input
                style={{
                  width: "100%",
                  padding: "15px",
                  border: "none",
                  outline: "none",
                  backgroundColor: "#ddd",
                  borderRadius: "5px",
                }}
                type="password"
                value={password}
                placeholder="Password"
                id="password"
                onChange={handlePassword}
              />

              <button onClick={handleSubmit} type="submit">
                Sign up
              </button>
              {/* {error && <span>{error.message}</span>} */}
            </form>
          </div>
          <div className="leftSide">
            <h1>Hello There!</h1>
            <p>Create your own personal account carefully</p>
            <span style={{ padding: "20px 0" }}>Already have a account?</span>
            <button>
              <Link
                to="/customer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Login
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Registration