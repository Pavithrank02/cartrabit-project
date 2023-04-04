import React from 'react'
import './Registration.css'
import { Link } from 'react-router-dom'
import Background from '../Background'

const Registration = () => {
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
                placeholder="Customer Name"
                id="username"
              // onChange={handleChange}
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
                placeholder="Email"
                id="email"
              // onChange={handleChange}
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
                placeholder="Phone"
                id="phone"
              // onChange={handleChange}
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
                placeholder="City"
                id="city"
              // onChange={handleChange}
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
                placeholder="Country"
                id="country"
              // onChange={handleChange}
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
                placeholder="Password"
                id="password"
              // onChange={handleChange}
              />

              <button >
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
                to="/login"
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