import React from 'react'
import './Registration.css'
import { Link } from 'react-router-dom'
import Background from '../Background'

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState("");
  const [file, setFile] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("Male");
  // useEffect(() => {
  //   fetchApi();
  //   console.log(data);
  // }, [data]);
  // const fetchApi = async () => {
  //   const response = await fetch("http://127.0.0.1:3000/login");
  //   const json = await response.json();
  //   setData(json);
  //   console.log(json)
  // };
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
  const handlePhone = (e) => {
    setPhone(e.target.value);
    setSubmitted(false);
  };

  const handleRadio = (event) => {
    setGender(event.target.value);
    console.log(event.target.value);
  };
const handleInputChange = (e) => {
  setFile(e.target.files)

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
                placeholder="City"
                id="city"
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handlePassword}
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