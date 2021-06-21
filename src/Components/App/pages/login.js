// import React from 'react';
// import {Link} from 'react-router-dom';
import '../css/login.css'
import {useEffect,useState} from 'react';
import {login} from '../contract/contract';
const LoginPage =  () => {

  const [userName, setuserName] = useState("")
  const [password, setpassword] = useState("")

 const loginFunc=async()=>{
  await login(userName,password) 
 }

    return(
        <>
        <div className="container text-center my-5">
          <h1> welcome to the online shopping</h1>
          <p className style={{color: '#0072ff'}}>powerd by - blockchain</p>
        </div>
        <div className="container my-5 register-form">
          <div className="note">
            <p>Login Page</p>
          </div>
          <div className="form-content">
            <p> Enter the Username and Password</p>
            <div className="row text-center">
              <div className="col-md-6">
                <div className="form-group">
                  <input type="text" className="form-control" onChange={(e)=>setuserName(e.target.value)}  placeholder="UserName"  />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" onChange={(e)=>setpassword(e.target.value)} placeholder="Password"  />
                </div>
                <div className="form-group">
                <a href="/signup">new user? do you want to register ? click here</a>

                <button type="button" className="btn btn-primary ml-5" onClick={()=>{loginFunc()}}>Login</button>
 </div>
              </div>

              <div className="col" style={{marginTop:-40}}>
                <img height="200px" width="200px" style={{borderRadius:20}} src="https://cdn4.vectorstock.com/i/1000x1000/09/48/online-shopping-e-commerce-bitcoin-blockchain-vector-21280948.jpg"  alt="" /> 
              </div>
            </div>
          </div>
        </div>
      </>

    );
 }
export default LoginPage;