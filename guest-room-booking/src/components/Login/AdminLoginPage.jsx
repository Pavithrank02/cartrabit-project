import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ownerlogin } from '../../utills/apiSlice'
import Background from '../../components/Background/Background'
import './Login.css'

const AdminLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const controller = new AbortController();
  const { signal } = controller;
  const dispatch = useDispatch()
  const [data, setData] = useState("");
  const Navigate = useNavigate()

  console.log("datas", data)

  useEffect(() => {

    fetchApi();
    console.log("data", data)
  }, []);
  const fetchApi = async () => {
    const response = await fetch("http://127.0.0.1:3000/get-user");
    const json = await response.json();
    setData(json)
    // console.log(json)
  };
  const handleSubmit = (e) => {
    // Prevent the default submit and page reload

    e.preventDefault();

    dispatch(ownerlogin({
      email: email,
      password: password
    }))

    setEmail("");
    setPassword("")
    // Navigate(`/dashboard/${}`)
    // Handle validations

  };
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
                  width: "80%",
                  padding: "15px",
                  border: "none",
                  outline: "none",
                  backgroundColor: "#ddd",
                  borderRadius: "5px",
                  margin: "1px"
                }}
                type="text"
                placeholder="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                style={{
                  width: "80%",
                  padding: "15px",
                  border: "none",
                  outline: "none",
                  backgroundColor: "#ddd",
                  borderRadius: "5px",
                  margin: "1px"
                }}
                type="password"
                placeholder="Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              // onChange={handleChange}
              />
              <button type="submit" onClick={handleSubmit}>
                Login
              </button>
              {/* {error && <span>{error.message}</span>} */}
            </form>
          </div>
          <div className="left">
            <h1>New to the Website!</h1>
            <p> Signup to Create New Account</p>
            <span style={{ padding: "20px 0" }}>Click the Button Below</span>

            <button>
              <Link
                to="/ownerregister"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Sign Up
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>

  )
}

export default AdminLoginPage