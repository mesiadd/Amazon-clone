
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import { auth } from "./firebase";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
const promise = loadStripe(
  "pk_test_51NZvP2JdtNr8s3QfwQFF3lEo80scf3H2Cf0vdXt4pk5ovyPdTMKiNM6TYE7PA8xegnFUx4tIny9jMdiNOOqtB4WY00OSD8EV1K"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/Orders"
            element={
              <>
                <Header /> <Orders/>
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Header /> <Login />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />

          <Route
            path="/"
            element={
              <>
                <Header /> <Home />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header /> <Checkout />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
