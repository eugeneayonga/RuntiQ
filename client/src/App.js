import React, { useState, useEffect } from "react";
import Login from "./Login";
import Signup from "./Signup";
import UserHome from "./UserHome";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((data) => setUser(data));
        setLoggedIn(true);
      } else {
        response.json().then((errorData) => setErrors(errorData.errors));
      }
    });
  }, []);
  const logout = () => {
    setUser(null);
    setLoggedIn(false);
  };

  return (
    <div>
      {user ? (
        <UserHome user={user} logout={logout} />
      ) : (
        <div>
          <h1>Run Data Tracker</h1>
          <h4>
            Welcome! You can use this app to track your run progress. Enter data
            for each workout you do, then find your results!
          </h4>
          <Login setUser={setUser} errors={errors} />
          <Signup setUser={setUser} errors={errors} />
        </div>
      )}
    </div>
  );
}
export default App;
