import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import UserContainer from './UserContainer';
import UserDetail from './UserDetail';
import MyProfile from './MyProfile';
import MatchesContainer from './MatchesContainer';
import MessagesContainer from './MessagesContainer';
import ProfileForm from './ProfileForm';
import LogIn from './LogIn';
import Home from './Home';
import Filter from './Filter';
import { getAllUsers, getMyMatches, loggedIn } from '../actions';
import Signup from './Signup';
// import Footer from './Footer';

class App extends React.Component {
  
  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.getAllUsers()
    const user_id = localStorage.user_id
    if (user_id) {
      fetch('http://localhost:3000/api/v1/auto_login', {
          headers: {
            "Authorization": user_id
          }
      })
      .then(res => res.json())
      .then(response => {
        if (response.errors) {alert(response.errors)}
      else {
        this.setState({ currentUser: response })
        // this.props.getAllUsers()
        this.props.getMyMatches()
      }
    }
  )}
}

  state = {
    currentUser: null
  }

  setUser = (user) => {
    this.setState({ currentUser: user}
      , () => { 
        localStorage.user_id = user.id
      })
      this.props.loggedIn(user)
  }

  logout = () => {
    this.setState({ currentUser: null}
      , () => {
        localStorage.removeItem("user_id")
      console.log("PROPS YO", this.props)}
    )
  }

  render() {
    console.log("app props", this.props)

    return (
      <Router>
        <NavBar logout={this.logout} currentUser={this.state.currentUser}/>
        <body>
          <div className="ui container grid">
            <div className="ui row">
              <div className="column four wide">
             </div>
           </div>
          </div>
            <Switch>
              <Route exact path="/login" render={(routerProps) => <LogIn {...routerProps} setUser={this.setUser}/>}/>
              <Route exact path="/" render={(routerProps) => <Home {...routerProps}/>}/>
              <Route exact path="/signup" render={(routerProps) => <Signup setUser={this.setUser} {...routerProps}/>}/>
              <Route exact path="/myprofile" render={(routerProps) => <MyProfile currentUser={this.state.currentUser}{...routerProps}/>}/>
              <Route exact path="/users" render={(routerProps) => <UserContainer {...routerProps}/>}/>
              <Route exact path="/matches" render={(routerProps) => <MatchesContainer {...routerProps}/>}/>
              <Route exact path="/messages" render={(routerProps) => <MessagesContainer {...routerProps}/>}/>
              <Route exact path="/users/:id" render={(routerProps) => <UserDetail {...routerProps}/>}/>
              <Route exact path="/filter" render={(routerProps) => <Filter {...routerProps}/>}/>
              <Route exact path="/profileform" render={(routerProps) => <ProfileForm setUser={this.setUser} user={this.state.currentUser}{...routerProps}/>}/>
          </Switch>
      </body>
      {/* <Footer/> */}
    </Router>
    )
  }
}

const mapStateToProps = state => {
  console.log("app state", state)
  return  { profiles: state.profiles,
            matches: state.matches};
}

export default connect(mapStateToProps, {getAllUsers, getMyMatches, loggedIn})(App);