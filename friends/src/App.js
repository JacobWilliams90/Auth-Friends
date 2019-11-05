import React from "react";
import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import SignIn from "./components/Login";
import FriendsList from "./components/FriendsList";
import ProtectedRoute from "./components/ProtectedRoute";
import Logout from "./components/Logout";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/signin" component={SignIn} />
      <ProtectedRoute exact path="/friends" component={FriendsList} />
      <Route exact path="/logout" component={Logout} />
    </div>
  );
}

export default App;
