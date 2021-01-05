import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {  }

  name = () => {
    let myjson = null
    fetch('http://localhost:8000/index')
    .then(res => {
      console.log(res.json)
      return res.json()
    })
    .then(json => {
      console.log(json.username);
      myjson = json
    })
    return myjson
  }

  render() { 
    return ( 
      <React.Fragment>
      <h1>Hi</h1>
      {this.name()}
      </React.Fragment>
     );
  }
}
 
export default App;