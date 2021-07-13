import React from 'react';
import Logo from '../images/blogstertemp.png'

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = { login: '' };
    }
    myChangeHandler = (event) => {
      this.setState({login: event.target.value});
    }

render() {
    return (
      <>
      <h1 className="welcome">Welcome to Blogster!</h1>

      <div className="form">
      <form id="login" name="login" method="POST" action="/users/login">
         
          <div>
              <label for="name">Username: </label>
              <input type="text" name="username" placeholder="Please enter username"required />
          </div>
          <div>
              <label for="name">Password: </label>
              <input type="password" name="password" required />
          </div>
          <div>
              <button type="submit">Submit</button>
          </div>
      </form>
      </div>

      <img src={Logo} className="brand" alt="placeholderimg" />
      </>
    );
  }
}


export default Login