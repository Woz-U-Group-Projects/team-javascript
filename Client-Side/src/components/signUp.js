import React from 'react';
import Logo from '../images/blogstertemp.png'

class Signup extends React.Component {
    constructor(props) {
      super(props);
      this.state = { username: '' };
    }
    myChangeHandler = (event) => {
      this.setState({username: event.target.value});
    }
    render() {
      return (
        <>
        <h1 className="welcome">Welcome! Please sign up</h1>

        <div className="form">
        <form id="signup" name="signup" method="POST" action="/users/signup">
            <div>
                <label for="name">First Name: </label>
                <input type="text" name="firstName" required />
            </div>
            <div>
                <label for="name">Last Name: </label>
                <input type="text" name="lastName" required />
            </div>
            <div>
                <label for="name">Email: </label>
                <input type="text" name="email" required />
            </div>
            <div>
                <label for="name">Username: </label>
                <input type="text" name="username" placeholder="Enter your desired username"required />
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

export default Signup
