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
import FilterForm from './FilterForm';
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
    currentUser: null,
    gender: '',
    minimum_age: '',
    maximum_age: '',
    city: '',
    state: '',
    smokes: '',
    drinks: '',
    weed: '',
    drugs: '',
    religion: '',
    education_level: '',
    kids: '',
    relationship_type: '',
    politics: '',
    have_pets: '',
    diet: '',
    id: ''
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

  editPreferences = (preference) => {
    this.setState({
        gender: preference.gender,
        minimum_age: preference.minimum_age,
        maximum_age: preference.maximum_age,
        politics: preference.politics,
        state: preference.state,
        smokes: preference.smokes,
        drinks: preference.drinks,
        weed: preference.weed,
        drugs: preference.drugs,
        religion: preference.religion,
        education_level: preference.education_level,
        kids: preference.kids,
        have_pets: preference.have_pets,
        diet: preference.diet,
        relationship_type: preference.diet,
        id: preference.id
      })
  }

  ageRangeChange = (e) => {
    this.setState({
      minimum_age: e.target.value,
      maximum_age: e.target.value
    })
  }

  stateChange = (e) => {
    this.setState({
      state: e.target.value
    })
  }

  smokesChange = (e) => {
    this.setState({
      smokes: e.target.value
    })
  }

  drinksChange = (e) => {
    this.setState({
      drinks: e.target.value
    })
  }

  genderChange = (e) => {
    this.setState({
      gender: e.target.value
    })
  }

  drugsChange = (e) => {
    this.setState({
      drugs: e.target.value
    })
  }

  religionChange = (e) => {
    this.setState({
      religion: e.target.value
    })
  }

  educationLevelChange = (e) => {
    this.setState({
      education_level: e.target.value
    })
  }

  relationshipTypeChange = (e) => {
    this.setState({
      relationship_type: e.target.value
    })
  }

  politicsChange = (e) => {
    this.setState({
      politics: e.target.value
    })
  }
  
  havePetsChange = (e) => {
    this.setState({
      have_pets: e.target.value
    })
  }

  dietChange = (e) => {
    this.setState({
      diet: e.target.value
    })
  }

  weedChange = () => {
    this.setState({
      weed: !this.state.weed
    })
  }

  kidsChange = () => {
    this.setState({
      kids: !this.state.kids
    })
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
              <Route exact path="/editfilters" render={(routerProps) => <FilterForm editPreferences={this.editPreferences} currentUser={this.state.currentUser}{...routerProps}/>}/>
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

