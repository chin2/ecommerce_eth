import React,{useState,useEffect} from "react";
// import {Link} from 'react-router-dom';
import "../css/login.css";
import {register,getUserCountFunc} from '../contract/contract';



const SignupPage = () => {
const [username,setusername]=useState("")
const [password, setpassword] = useState("")
const [phoneNumber, setphoneNumber] = useState("")
const [address, setaddress] = useState("")
const[count,setCount]=useState(5)
useEffect(()=>{
  getUserAccountCount()

},[])

const getUserAccountCount=async()=>{
  let userAccountValue=await getUserCountFunc()
  setCount(userAccountValue)
  console.log(userAccountValue)
}


const registerFunc=async()=>{
  // console.log("registerFunc",username,address,phoneNumber,password)
  await register(count,username,address,phoneNumber,password)
 

}
  return (
    <>
      <div className="container text-center my-5">
        <h1> welcome to the online shopping</h1>
        <p className style={{ color: "#0072ff" }}>
          powerd by - blockchain
        </p>
      </div>
      <div className="container my-5 register-form">
        <div className="note">
          <p>Sign Up</p>
        </div>
        <div className="form-content">
          
          <div className="row text-center">
            <div className="col-md-6">
              <div className="form-group">
                <input

                  type="text"
                  className="form-control"
                  placeholder="UserName"
                  onChange={(e)=>setusername(e.target.value)}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"

                  onChange={(e)=>setaddress(e.target.value)}

                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phonenumber"
                  onChange={(e)=>setphoneNumber(e.target.value)}

                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e)=>setpassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <a href="/login">Already have an account ? click here</a>

                <button type="submit" className="btn btn-primary ml-5" onClick={()=>registerFunc()}>
                  Register
                </button>
              </div>
            </div>

            <div className="col" style={{ marginTop: 0 }}>
              <img
                height="200px"
                style={{ borderRadius: 20 }}
                width="200px"
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
