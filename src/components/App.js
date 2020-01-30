import React from 'react';
// import './App.css';
import UserContainer from './UserContainer';
import { viewProfile } from '../actions';
import UserDetail from './UserDetail';
import { getAllUsers } from '../actions';
import { connect } from 'react-redux';

class App extends React.Component {
  


  // componentDidMount() {
  //   fetch('http://localhost:3000/api/v1/users')
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((users) => {
  //     console.log(users);
  //     this.props.getAllUsers(users)
  //   })
  // }
  
  render() {
    console.log(this.props.getAllUsers)
    return  (
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
        <UserContainer 
        // profiles={this.state.profiles}
        />
         </div>
         <div className="column eight wide">
           <UserDetail/>
         </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log("state", state)
  return  { profiles: state.profiles};
}

// export default App;
export default connect(mapStateToProps, getAllUsers)(App);