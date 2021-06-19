import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route}
from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment.js'
import Orders from "./Orders";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { useEffect } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51J3yaXSB2qYygCTo1qzGyaYuXYcDhrQL1Hrcm3XBgLMXy4ySlIJQHg11Ppd8zlF9jUpC6v056uoff1tqb9XuCia100yIJhq4ei"
)

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <Router>
    <div className="App">
    
      <Switch>
      <Route path="/login">
      <Login />  
      </Route>  
      <Route path="/orders">
            <Header />
            <Orders />
          </Route>
      <Route path="/checkout">
      <Header />
      <Checkout />
      </Route>
      <Route path="/payment">
        <Header />
        <Elements stripe={promise}>
          <Payment />
        </Elements>
      </Route>
      <Route path="/">
      <Header />
      <Home />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;  
     
     
