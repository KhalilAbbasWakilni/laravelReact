import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {

    const handleSignup = (e) => {
        e.preventDefault();
    }

  return (
    <div>
         <div className='login-signup-form animated fadeInDown'>
        <div className='form'>
            <form onSubmit={handleSignup}>
                <h1 className='title'>Create An Account</h1>
                <input type='text' placeholder='Full name'/>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='Password'/>
                <input type='password' placeholder='Confirm password'/>
                <button className='btn btn-block'>Signup</button>
                <p className='message'>
                    Already Registered? <Link to="/login">Login</Link>
                </p>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Signup