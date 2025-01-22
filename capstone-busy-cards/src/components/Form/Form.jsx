import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import './Form.scss';
const URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api"

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function Form  () {
const navigate = useNavigate();
const [errorMessage, setErrorMessage] = useState("");
  const [isRegister, setIsRegister] = useState(true); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const toggleForm = () => {
    setIsRegister((prev) => !prev);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' }); 
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (isRegister && formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }


    if (!formData.email || !formData.password) {
        setErrorMessage("You must provide a username and a password");
        return;
      }
    if (!emailRegex.test(formData.email)) {
        setErrorMessage(
          "The email address is not valid. Expected format: x@x.xx");
        
        return;
  }

  try{
    const endpoint = isRegister ? `${URL}/register` : `${URL}/login`
    const{data} = await axios.post(
        endpoint,
        {
            email:formData.email,
            password:formData.password,
            ...(isRegister ? { name: formData.name } : {}),
        }
    );
    if(isRegister) {
        setTimeout(() =>{
            setErrorMessage("");
            toggleForm();
        }, 2000);
        
    } else{
        localStorage.setItem("authToken", data.authToken);
      
        setTimeout(() =>{
            console.log("Redirecting to /digitalCard");
            navigate("/digitalCard");
        }, 2000);
    }
  

  
  } catch (error) {
    const message =
      error.response?.data?.message || "An error occurred. Please try again.";
    setErrorMessage(message);
    alert(message);
  }
};

  return (
    <div className="auth-container">
       
      <div className="form-header">
      <h1>{isRegister ? 'Create a new account' : 'Login'}</h1>
        <p>
          {isRegister ? 'Already a member?' : 'New here?'}{' '}
          <span className="toggle-link" onClick={toggleForm}>
            {isRegister ? 'Sign in' : 'Register'}
          </span>
        </p>
      </div>

         {/* Error Message Display */}
         {errorMessage && (
        <p className="error-message">
          {errorMessage}
        </p>
      )}

      <form className="auth-form" onSubmit={handleSubmit}>
        {isRegister && (
          <div className="form-group">
            <label htmlFor="name">Enter your name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>

        {isRegister && (
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
            />
              <div className="form-group">
               
                <input type="checkbox" id="privacy" name="privacy" value="Policy"  required/>
                <label htmlFor="privacy">
                    I've read and agree with Terms or Service and our Privacy Policy
                </label>
               
              </div>
          </div>
        )}


        <button type="submit" className="submit-btn">
          {isRegister ? 'Create account' : 'Login'}
        </button>
      </form>
    </div>
  );
};
export default Form


