import React,{useEffect,useState} from 'react';
// import {Link} from 'react-router-dom';
import '../css/profile.css';
import Navbar from './navbar'
import {getProfile} from '../contract/contract';
const ProfilePage =  () => {
const [address, setaddress] = useState("")
const [phonenumber, setphonenumber] = useState("")
const [username, setusername] = useState("")

    useEffect(async() => {
    let all_value=    await getProfile();
    setaddress(all_value.v_address)
    setphonenumber(all_value.phonenumber)
    localStorage.setItem("userid",all_value.ad)
    setusername(all_value.ad)
    }, [])
    return(
        <div>
        <Navbar />
            <div className="container profile_container" >
                <div className="row profile" >
                    <div className="col" style={{}}>
                        <img height="400px" className="mt-5 rounded" widht="400px" src="https://media.springernature.com/original/springer-static/image/chp%3A10.1007%2F978-3-030-21905-5_31/MediaObjects/485417_1_En_31_Fig5_HTML.png"  alt="" />
                    </div>
                    <div className="col ml-5">
                        <div className="row mt-5">
                            <div className="col text-left text-primary font-weight-bolder h4" >
                                User Name
                            </div>
                            <div className="col text-left text-primary">
                                {username}
                            </div>
                        </div>
                        <div className="row mt-5">
                        <div className="col text-left text-primary font-weight-bolder h4" >
                                Delivery Address
                            </div>
                            <div className="col text-left text-primary">
                                {address}
                            </div>
                        </div>
                        <div className="row mt-5">
                        <div className="col text-left text-primary font-weight-bolder h4" >
                                Phone Number
                            </div>
                            <div className="col text-left text-primary">
                                {phonenumber}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
 }

export default ProfilePage;