import React from "react";
// import {Link} from 'react-router-dom';
import Navbar from "./navbar";
import { useEffect, useState } from "react";
import "../css/orders.css";
import { getOrdersCountFunc, OrderDetails } from "../contract/contract";
// import Content from '../../Ordcom';
// const value=getAccount()

const OrdersPage = () => {
  var orderCount;
  var orderList;
  const [orderListDetails, setorderListDetails] = useState([]);
  useEffect(async () => {
    getUserCountFunc();
    orderList = await OrderDetails();
    setorderListDetails(orderList);
    orderCount = await getOrdersCountFunc();
    console.log(orderCount);
  }, []);
  var value;
  const getUserCountFunc = async () => {
    // value=await getAccount()
    // console.log(value)
  };

  const username = localStorage.getItem("username");
  return (
    <>
      <Navbar />

      <div className="container-fluid mb-5 mt-0 d-flex justify-content-center">
        <div className="card card-1">
          <div className="card-header bg-white">
            <div className="media flex-sm-row flex-column-reverse justify-content-between ">
              <div className="col my-auto">
                <h4 className="mb-0">
                  Thanks for your Order,
                  <span
                    className="change-color"
                    style={{ textTransform: "capitalize" }}
                  >
                    {username}
                  </span>{" "}
                  !
                </h4>
              </div>
              <div className="col-auto text-center my-auto pl-0 pt-sm-4">
                {" "}
                <img
                  className="img-fluid my-auto align-items-center mb-0 pt-3"
                  src="data:image/jpeg;base64,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"
                  width={115}
                  height={115}
                />
                <p className="mb-4 pt-0 Glasses mt-3">Books For Everyone</p>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row mt-5">
              <div className="col">
                <div className="row">
                  <div className="">
                    <div className="card-body" style={{ width: 1400 }}>
                      {orderListDetails.map((v, index) => (
                        <>
                          <p className="text-success mt-5"> {v[1]} </p>

                          <div className="media justify-content-between">
                            <div className="sq align-self-center  ">
                              <div className="row">
                                <div className="col">
                                {" "}
                              <img
                                className="img-fluid my-auto align-self-center mr-2 mr-md-4 pl-0 p-0 m-0"
                                src={v[8]}
                                width={135}
                                height={135}
                              />{" "}
                                </div>
                                <div className="col align-self-center">
                                <p className="text-success">From : <span className="text-dark">{v[4]}</span></p>
                                <p className="text-success">To : <span className="text-dark">{v[5]}</span></p>
                                </div>
                              </div>
                              
                            </div>
                            <div className="row my-auto align-self-center text-left">
                              <div className="col">
                                <p className="text-success"> Book Name</p>
                                <p>{v[3]}</p>
                              </div>
                              <div className="col">
                                <p className="text-success"> Order Status</p>
                                <p>True</p>
                              </div>

                              <div className="col">
                                <p className="text-success"> Gas Used</p>
                                <p>{v[7]}</p>
                              </div>
                              <div className="col">
                                <p className="text-success"> Cost</p>
                                <p>{v[2]}</p>
                              </div>
                            </div>
                          </div>
                        </>
                      ))}
                      {/* <Content count={orderCount}></Content> */}
                      {/* note */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OrdersPage;
