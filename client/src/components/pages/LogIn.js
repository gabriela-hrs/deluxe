import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import '../../index.scss';

export default function LogIn() {
    const [userInfo, setuserInfo] = useState({
        username: '',
        password: ''
    })

    const navigate = useNavigate()
    axios.defaults.withCredentials = true
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3001/login', userInfo)
        .then(res => {
            if(res.data.Status === "Successfully logged in user!") {
                navigate('/')
            } else {
                alert(res.data.Error)
            }
        })
        .catch(error => console.log(error))
    }

    return (
      <>
        <div className="account-form-container">
          <form className="account-form" onSubmit={handleSubmit}>
            <h2 className="title">LOG IN</h2>
            <label htmlFor='userName'>USERNAME:</label>
            <input required type='text' id='userName' name='userName' onChange={e => setuserInfo({...userInfo, username: e.target.value})} />
            <label htmlFor='userPassword'>PASSWORD:</label>
            <input required type='password' id='userPassword' name='userPassword' onChange={e => setuserInfo({...userInfo, password: e.target.value})} />
            <button type='submit' className="btn">LOG IN</button>
            <p>Don't have an account? <Link to='/register' className="account-link">REGISTER NOW!</Link></p>
          </form>
        </div>
      </>
  );
}