import React, { useState } from 'react'
import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState(null)

  const navigate = useNavigate()
  axios.defaults.withCredentials = true;

  function handleSubmit(event) {
    event.preventDefault()
    axios.post('http://localhost:3000/auth/adminlogin', values)
    .then(result => {
      if(result.data.loginStatus) {
        navigate('/dashboard')

      } else {
        setError(result.data.Error)

      }
      
    })
    .catch(err => console.log(err))

  }
  
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
      <div className='p-3 rounded w-25 border loginForm'>
        <div className='text-warning'>
          {error && error}
        </div>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit} >
          <div className='mb-3'>
            <label htmlFor="email"><strong>Email:</strong></label>
            <input 
            className="form-control rounded-0" 
            type="text" name="email" 
            autoComplete="off" 
            placeholder="Enter Email Address"
            onChange={(e) => setValues({...values, email: e.target.value})} />
          </div>
          <div className='mb-3'>
            <label htmlFor="password"><strong>Password:</strong></label>
            <input 
            className="form-control rounded-0" 
            type="password" name="password" 
            placeholder="Enter Password"
            onChange={(e) => setValues({...values, password: e.target.value})} />
          </div>
          <button className='btn btn-success w-100 rounded-0 mb-2'>Sign In</button>
          <div className='mb-1'>
            <input type="checkbox" name="tick" id="tick" className='me-2' />
            <label htmlFor="password" ><strong>By clicking here, I state that I have read and understood the terms and conditions</strong></label>
           
          </div>
        </form>
      </div>
      
    </div>
  )
}

export default Login;
