import React,{useEffect} from "react";
// import Login from './login';
import "../css/home.css";
import { Redirect } from 'react-router';
import Navbar from "./navbar";
import data from "../Data/data";
// import { render} from "@testing-library/react";
import {Web3,logingas,getProfile,getOrdersCountFunc,register_order} from "../contract/contract"
// import {getProfile} from '../contract/contract';

const buynowFunction=async(v)=>{
  console.log('value',await getOrdersCountFunc())
  console.log(v)
  if (window.confirm('Are you sure you want to Buy this Book?')) {
    var value=String(v.price/100)
    Web3.eth.sendTransaction({
      from: localStorage.getItem("userid"),
      to:logingas, 
      value: Web3.utils.toWei(value,"ether")
    }).then(e=>{
      value=Web3.utils.toWei(value,"ether")
      register_order(localStorage.getItem("username"),e.transactionHash,value,v.title,e.from,e.to,e.status,e.gasUsed,v.image)
	  alert("ordered taken successfully ..!");
    }).catch(e=>{
      console.log(e)
    })
  } else {
    // Do nothing!
    console.log('false');
  }
 
}
const priceConvert=(price)=>{
  return (price)/100 ;
}
const DataContainer= data.map((v,index) =>(

  <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={index}>
    <div className="box card">
       <div className="box cardImg">
         <img src={v.image} />
       </div>
       <div className="info">
         <p className="text-dark"> {v.title}</p>
         <p>
           <span>Ξ {priceConvert(v.price)} </span> 
         </p>
         <button className="btn btn-primary" onClick={()=>buynowFunction(v)} >BuyNow</button>
       </div>
     </div>
   </div>
))

const HomePage = () => {
  useEffect(async()=>{
    var all_value=await getProfile();
    localStorage.setItem("userid",all_value.ad)
    },[])
  return (
    <>
    {localStorage.getItem("username")!=null?
    <>
      <Navbar />

      <div className="container">
        <div className="row mb-5">
          {DataContainer}
        </div>
      </div>
    </>:
    <Redirect to="/login" />
  }
    </>
  );

  // return localStorage.getItem("username") ? (
  //   <div>
  //     <Button />
  //   </div>
  // ) : (
  //   // <Redirect to="/login" />

  // );
};
export default HomePage;
