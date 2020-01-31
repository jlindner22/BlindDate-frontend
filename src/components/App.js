import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserContainer from './UserContainer';
import { viewProfile } from '../actions';
import UserDetail from './UserDetail';
import { getAllUsers } from '../actions';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import Home from './Home';
import MatchesContainer from './MatchesContainer';
import MessagesContainer from './MessagesContainer';


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
    return (
      <Router>
        <NavBar/>
        <body>
        <Switch>
      <Route exact path="/" render={(routerProps) => <Home {...routerProps}/>}/>
      <Route exact path="/users" render={(routerProps) => <UserContainer {...routerProps}/>}/>
      <Route exact path="/matches" render={(routerProps) => <MatchesContainer {...routerProps}/>}/>
      <Route exact path="/messages" render={(routerProps) => <MessagesContainer {...routerProps}/>}/>
      <Route exact path="/users/:id" render={(routerProps) => <UserDetail {...routerProps}/>}/>
    </Switch>
      <div className="ui container grid">
        <div className="ui row">
          <div className="column twelve wide">
         </div>
        </div>
      </div>
      </body>
    </Router>
    )
  }
}

const mapStateToProps = state => {
  console.log("state", state)
  return  { profiles: state.profiles};
}

// export default App;
export default connect(mapStateToProps, getAllUsers)(App);