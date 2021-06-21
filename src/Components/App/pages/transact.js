import React,{useEffect,useState} from "react";
// import {Link} from 'react-router-dom';
import Navbar from "./navbar";
import { TotalOrderDetails } from "../contract/contract";

const  TransactPage=()=>{
    var orderList;
    const [orderListDetails, setorderListDetails] = useState([]);
    useEffect(async () => {
        orderList = await TotalOrderDetails();
        setorderListDetails(orderList);

      }, []);
return (
   <>
    <Navbar />
    <div className="container mt-5 table-responsive">

    <h1>Transaction Details...</h1>

    <table className="table table-hover">
        <caption>Total Transaction in this E-commerce Technology.</caption>
        <thead>
        <tr>
            <th> Transaction Hash </th>
            <th> From </th>
            <th> To </th>
            <th> Transaction Cost </th>
            <th> GasPrice </th>
        </tr>
        </thead> 
        <tbody>

        {orderListDetails.map((v, index) => (
 <tr key={index}>
 <td> {v[1]} </td>
 <td> {v[4]} </td>
 <td> {v[5]} </td>
 <td> {v[2]} </td>
 <td> {v[7]} </td>

</tr>
        ))}
        
      </tbody>
    </table>
    </div>
</>
)
}

export  default  TransactPage