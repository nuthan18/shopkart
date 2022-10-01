import React, { useEffect} from "react";
import './App.css';
import Header from './Header';
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Footer from "./Footer";

function App() {
  // magic context api code
  const [{}, dispatch] = useStateValue();


  // use effect is kind of if statement in react
  useEffect(() => {
    // will only run omce when the app component loads

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);
      if(authUser){
        // the user logged in || the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])


  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
