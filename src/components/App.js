import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserContainer from './UserContainer';
import UserDetail from './UserDetail';
import { getAllUsers } from '../actions';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import MyProfile from './MyProfile';
import MatchesContainer from './MatchesContainer';
import MessagesContainer from './MessagesContainer';
import ProfileForm from './ProfileForm';


class App extends React.Component {
  
  render() {
    console.log("get all users", this.props)
    console.log(this.props.getAllUsers)
    return (
      <Router>
        <NavBar/>
        <body>
      <div className="ui container grid">
        <div className="ui row">
          <div className="column four wide">
         </div>
        </div>
      </div>
        <Switch>
      <Route exact path="/" render={(routerProps) => <ProfileForm {...routerProps}/>}/>
      <Route exact path="/myprofile" render={(routerProps) => <MyProfile {...routerProps}/>}/>
      <Route exact path="/users" render={(routerProps) => <UserContainer {...routerProps}/>}/>
      <Route exact path="/matches" render={(routerProps) => <MatchesContainer {...routerProps}/>}/>
      <Route exact path="/messages" render={(routerProps) => <MessagesContainer {...routerProps}/>}/>
      <Route exact path="/users/:id" render={(routerProps) => <UserDetail {...routerProps}/>}/>
    </Switch>
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