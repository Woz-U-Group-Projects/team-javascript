import React from 'react'

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = { home: '' };
    }
    myChangeHandler = (event) => {
      this.setState({home: event.target.value});
    }
    render() {
      return (
        <>
       <h1>Blogs go here</h1>
    
        
        </>
      );
    }
  }

export default Home