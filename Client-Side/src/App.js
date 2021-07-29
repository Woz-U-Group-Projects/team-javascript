import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
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
import Header from "./components/Header"

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
    <div>
      <Header></Header>
      <div className="App">
        <AuthContext.Provider value={{ authState, setAuthState }}>
          <Router>
            {!authState.status ? (
              <>
                <div class='navbar-brand flex flex-col justify-center items-center'>
                  <div >
                    <Link to="/login" className='text-blue-900 no-underline scale-0 hover:bg-blue-900 hover:text-blue-50 py-2 px-2'> Login</Link>
                    <Link to="/registration" className='text-blue-900 no-underline scale-0 hover:bg-blue-900 hover:text-blue-50 py-2 px-2'> Registration</Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className='nav'>
                  <Link to="/" className='text-blue-900 no-underline scale-0 hover:bg-blue-900 hover:text-blue-50 py-1 px-2'
                    activeClassName='bg-blue-900 text-white'> Home </Link>
                  
                  <Link to="/createpost" className='text-blue-900 no-underline scale-0 hover:bg-blue-900 hover:text-blue-50 py-1 px-2'
                    activeClassName='bg-blue-900 text-white'> Create A Post</Link>
                    
                  <Link to="/profile" className='text-blue-900 no-underline scale-0 hover:bg-blue-900 hover:text-blue-50 py-1 px-2'
                    activeClassName='bg-blue-900 text-white'> Profile</Link>
                </div>
              </>
            )}

            <div className="loggedInContainer">
              <h1>{authState.username} </h1>
              <a href="/">
              {authState.status && <button onClick={logout} className='text-blue-900 no-underline scale-0 hover:bg-blue-900 hover:text-blue-50 py-2 px-2'> Logout</button>}
              </a>
            </div>

            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/createpost" exact component={CreatePost} />
              <Route path="/post/:id" exact component={Post} />
              <Route path="/registration" exact component={Registration} />
              <Route path="/login" exact component={Login} />
              <Route path="/profile" exact component={Profile} />
              <Route path="/changepassword" exact component={ChangePassword} />
              <Route path="*" exact component={PageNotFound} />
            </Switch>
          </Router>
        </AuthContext.Provider>
      </div>
    </div>
  );
}

export default App;
