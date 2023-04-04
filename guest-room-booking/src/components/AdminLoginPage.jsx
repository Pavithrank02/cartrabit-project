import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import Background from './Background'

const AdminLoginPage = () => {
  return (
    <>
    <Background />

    <div className='Card'>
      <div className='Card_header'>
        <div className='Card-text-A'>
          <Link to='/'>
            Admin Login
          </Link>
        </div>
        <div className='Card-text-C'>
          <Link to='/customer'>
            Customer Login
          </Link>
        </div>
      </div>
      <div className='Card_body'>
        <div className="right">
          <h1>Sign in your account!</h1>
          <p>Login with your personal details for continue</p>
          <form>
            <input
              style={{
                width: "100%",
                padding: "15px",
                border: "none",
                outline: "none",
                backgroundColor: "#ddd",
                borderRadius: "5px",
                margin: "5px"
              }}
              type="text"
              placeholder="Username"
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
                margin: "5px"
              }}
              type="password"
              placeholder="Password"
              id="password"
            // onChange={handleChange}
            />
            <button >
              Login
            </button>
            {/* {error && <span>{error.message}</span>} */}
          </form>
        </div>
        <div className="left">
          <h1>Welcome Back!</h1>
          <p>to continue please login with your personal account information</p>
          <span style={{ padding: "20px 0" }}>Don't have a account?</span>

          <button>
            {/* <NavLink
            to="/register"
            style={{ color: "inherit", textDecoration: "none" }}
          > */}
            Sign Up
            {/* </NavLink> */}
          </button>
        </div>
      </div>
    </div>
  </>
    
  )
}

export default AdminLoginPage