import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import axiosClient from '../axios-client';
import { useStateContext } from '../contexts/ContextProvider';

const Signup = () => {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    
    const {setUser , setToken} = useStateContext();

    const handleSignup = (e) => {
        e.preventDefault();
        const newUser = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        }
        axiosClient.post('/signup' , newUser)
        .then(({data} )=> {
            setUser(data.user);
            setToken(data.token);
        }).catch(err => {
            const response = err.response;
            if(response && response.status === 433) {
                console.log(response.data.errors);
            }
        })
    }

  return (
    <div>
         <div className='login-signup-form animated fadeInDown'>
        <div className='form'>
            <form onSubmit={handleSignup}>
                <h1 className='title'>Create An Account</h1>
                <input ref={nameRef} type='text' placeholder='Full name'/>
                <input ref={emailRef} type='email' placeholder='Email'/>
                <input ref={passwordRef} type='password' placeholder='Password'/>
                <input ref={passwordConfirmationRef} type='password' placeholder='Confirm password'/>
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