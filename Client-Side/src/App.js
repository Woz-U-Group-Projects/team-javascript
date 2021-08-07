import React from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import { Fa } from 'react-icons/fa';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import { AuthContext } from "./helpers/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";

//Pages
import Home from "./pages/Home"
import Registration from "./pages/Registration"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Post from "./pages/Post"
import CreatePost from "./pages/CreatePost"
import PageNotFound from "./pages/PageNotFound";
import ChangePassword from "./pages/ChangePassword";

//Components
import Navbar from "./components/Navbar";

function App() {
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            status: true,
          });
        }
      });
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ username: "", id: 0, status: false });
  };

  return (
    <div className='h-full'>
      <Navbar></Navbar>
      <div className="App">
        <AuthContext.Provider value={{ authState, setAuthState }}>
          <Router>
            
                {!authState.status ? (
                  <>
                  <Link to="/login"> Login</Link>
                  <Link to="/registration"> Registration</Link>
                  </>
                ) : (
                  <>
                    <Link to="/"> Home Page</Link>
                    <Link to="/createpost"> Create A Post</Link>
                  </>
                )}
            
              <div className="loggedInContainer">
                <h1>{authState.username} </h1>
                {authState.status && <button onClick={logout}> Logout</button>}
              </div>
          
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/createpost" exact component={CreatePost} />
              <Route path="/post/:id" exact component={Post} />
              <Route path="/registration" exact component={Registration} />
              <Route path="/login" exact component={Login} />
              <Route path="/profile/:id" exact component={Profile} />
              <Route path="/changepassword" exact component={ChangePassword} />
              <Route path="*" exact component={PageNotFound} />
            </Switch>
          </Router>
        </AuthContext.Provider>
      </div>
      <footer className='bg-blue-100 py-4 px-1 text-center'>
          <h3>Blogster</h3>
          <h6>All Rights Reserved</h6>
          <div className='flex'></div>
      </footer>
    </div>
  );
}

export default App;
