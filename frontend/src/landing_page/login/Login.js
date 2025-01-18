import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/auth/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
            // window.location.href = /s://main.d38s2fcfxs6cko.amplifyapp.com/"; // Redirect to the external URL
        //  navigate("/");
        window.location.href = "http://localhost:3001/"
        //   The navigate function from react-router-dom is designed for routing within the same React application and does not support navigating to a different port or domain.

        //   To redirect to a different port or domain, you need to use the window.location object instead.
          
          
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="form_container mt-5">
      <form onSubmit={handleSubmit} className="signup-container">
        <div>
          <h3>Login</h3>
          <hr/>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <div className="button-wrapper">
        <button type="submit">Submit</button>
        <br/><br/>
        <span>
          Already have an account? <Link to={"/signup"}>Signup</Link>
        </span>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;