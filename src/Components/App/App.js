import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    // Link
  } from "react-router-dom";
import LoginPage from './pages/login';
import HomePage from './pages/home';
import SignupPage from './pages/signup';
import ProfilePage from './pages/profile';
import OrdersPage from './pages/orders';
import TransactPage from './pages/transact';

// import AdminPage from './pages/admin';

const App =()=>{
   const isAlreadyLoggedIn =()=>{
    let auth= localStorage.getItem("email");
    console.log(auth)
    if(auth){
        return true;
    }else{
        return false;
    }
   }
       return(
         <Router>
        <Switch>
       
        <Route exact path="/" render={() => (
            
            isAlreadyLoggedIn() ? (
             <Redirect to="/home" />
            ) : (
                <LoginPage />
              )
          )} />
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/home">
            <HomePage />
          </Route>
          <Route exact path="/transact">
            <TransactPage />
          </Route>
          <Route exact path="/signup">
            <SignupPage />
          </Route><Route exact path="/profile">
            <ProfilePage />
          </Route>
          <Route exact path="/orders">
            <OrdersPage />
          </Route>
        </Switch>
    </Router>
    );
}

export default App;