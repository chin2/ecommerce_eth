import React from 'react';
// import {Link} from 'react-router-dom';


const Navbar =  () => {
    const logoutFunc=()=>{
        console.log('working lout')
        localStorage.removeItem("username")
        localStorage.removeItem("userid")
        window.location.href = "http://localhost:3000/login"
    }
    return(
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <a className="navbar-brand ml-5" style={{color:'blue'}} href="#">E-commerce</a>
             <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              

                <ul className="navbar-nav ml-auto mt-2 mr-4 mt-lg-0">
                    <li className="nav-item">
                    <a className="nav-link mr-4" href="/home"><i class="fa fa-home" aria-hidden="true"></i> Home <span className="sr-only">(current)</span></a>
                    </li>
                   
                    <li className="nav-item dropdown">
                    <a className="nav-link mr-4" href="/orders"><i class="fa fa-cart-plus" aria-hidden="true"></i> Orders</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link mr-4" href="/profile"><i class="fas fa-user mr-2"></i>Profile</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link mr-4" href='/transact' > <i class="fa fa-angle-double-up" aria-hidden="true"></i> Transact</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link mr-4 btn btn-danger text-white"  onClick={()=>{logoutFunc()}}> <i class="fa fa-sign-out-alt" aria-hidden="true"></i> Logout</a>
                    </li>
                </ul>
            </div>
      </nav>
      
      
      
    );
 }

export default Navbar;