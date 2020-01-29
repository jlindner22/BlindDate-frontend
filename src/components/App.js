import React from 'react';
// import './App.css';
import UserContainer from './UserContainer'
import { viewProfile } from '../actions'

class App extends React.Component {
  
  state = {
    profiles: []
  }

  router = type => {
    switch(type){
      case "LIKE":
        this.setState({ likes: this.state.likes + 1})
        default: 
          break;
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      this.setState({
        profiles: data
      })
    });
  }
  
  render() {
    return  (
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
        <UserContainer 
        // profiles={this.state.profiles}
        />
         </div>
        </div>
      </div>
    )
  }
}


export default App;
