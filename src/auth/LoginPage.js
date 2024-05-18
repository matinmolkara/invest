import React from 'react'
import Header from '../components/Header'
import LoginTitle from '../components/auth/LoginTitle'
import { Link } from 'react-router-dom'
import {useRef, useState, useEffect,useContext} from "react";
import AuthContext from '../context/AuthProvider';
import axios from '../api/axios';
import styles from '../styles/login.module.css'
const LOGIN_URL = '/auth'

const LoginPage = () => {


const {setAuth} = useContext(AuthContext);

 const userRef = useRef();
 const errRef = useRef();

const [user,setUser] = useState('');
const [pwd,setPwd] = useState('')
const [errMsg,setErrMsg] = useState('');

const[success, setSuccess] = useState(false);

useEffect(()=>{
  userRef.current.focus();
},[])

useEffect(() => {
  setErrMsg('');
},[user,pwd])


const handleSubmit = async (e) =>{
  e.preventDefault();
  try{
    const response = await axios.post(LOGIN_URL, 
      JSON.stringify({user,pwd},
        {
          headers: { 'Content-Type' : 'application/json'},
          withCredentials: true
        }
      )
    );
    console.log(JSON.stringify(response?.data));
    const accessToken = response?.data?.accessToken;
    const roles = response?.data?.roles;
    setAuth({user,pwd,roles,accessToken})
    setUser('');
    setPwd('');
    setSuccess(true);
  } catch (err){
    if (!err?.response) {
      setErrMsg('No Server Response');
  } else if (err.response?.status === 400) {
      setErrMsg('Missing Username or Password');
  } else if (err.response?.status === 401) {
      setErrMsg('Unauthorized');
  } else {
      setErrMsg('Login Failed');
  }
  errRef.current.focus();
  }
 
}

  return (
    

   
    <section className={styles.pageHeader}>
        <Header />
        <LoginTitle title="Sign up account"/>
        {success ? (
      <div>
      <h1>You are logged in!</h1>
      <p>
        <Link to="/">
          Go to Home
        </Link>
      </p>
      </div>
    ) : (
        <div className={styles.loginForm}>
          <div className="container">
            <div className="row">
              <div className={styles.loginFform0}>
                <div className={styles.loginForm00}>
                  <div className="row">
                    <h3>
                      Sign in to your account
                    </h3>
                   
                  </div>
                  <p ref={errRef} className={errMsg ? 'errmsg' : "offscreen"} aria-live="assertive">
                    {errMsg}
                  </p>
                  <form 
                    onSubmit={handleSubmit}
                  className="row g-1">
                    <div className="col-12">
                        <label htmlFor="username" 
                        className="form-label">
                          Username:
                         
                          </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="username" 
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            
                            placeholder="Enter your username" 
                        />
                        
          
                      </div>
                  
                    <div className="col-12">
                      <label htmlFor="password" 
                      className="form-label">
                        Password:
                        
                      </label>
                      <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required 
                        placeholder="Enter your Password"
                     />
                    
                    </div>         
                    <div className="col-12 mt-5">
                      <button 
                        type="submit"
                        className="btn btn-primary"
                        
                      >
                       Login
                        
                      </button>
                    </div>
                    <div className="col-12">
                      <div className="">
                        <span>Don't have an account?</span><span>
                          <Link to='/register'>Register now</Link>
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
         )}
    </section>
   
 
  )
}

export default LoginPage