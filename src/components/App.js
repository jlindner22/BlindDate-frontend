import React from 'react'
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
import FilterContainer from './FilterContainer';
import { getAllUsers, getMyMatches, loggedIn, getPreferences } from '../actions';
import Signup from './Signup';
import FilterForm from './FilterForm';
import FilteredProfiles from './FilteredProfiles';
import EditProfilePage from './EditProfilePage';
import Footer from './Footer';

class App extends React.Component {
  
  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.getAllUsers()
    this.props.getPreferences()
    const user_id = localStorage.getItem('user_id')
    if (user_id) {
      fetch('https://blind-date-backend.herokuapp.com/api/v1/auto_login', {
          headers: {
            "Authorization": user_id
          }
      })
      .then(res => res.json())
      .then(response => {
        if (response.errors) {alert(response.errors)}
      else {
        this.setState({ currentUser: response })
        this.props.loggedIn(response)
        this.props.getMyMatches()
        }
      }
    )}
  }

  preferences = this.props.preferences.filter(preference => preference.user_id === this.props.currentUser.id)

  state = {
    currentUser: null,
    home: true,
    gender: this.preferences.gender,
    minimum_age: this.preferences.minimum_age,
    maximum_age: this.preferences.maximum_age,
    city: this.preferences.city,
    state: this.preferences.state,
    smokes: this.preferences.smokes,
    drinks: this.preferences.drinks,
    weed: this.preferences.weed,
    drugs: this.preferences.drugs,
    religion: this.preferences.religion,
    education_level: this.preferences.education_level,
    kids: this.preferences.kids,
    relationship_type: this.preferences.relationship_type,
    politics: this.preferences.politics,
    have_pets: this.preferences.have_pets,
    diet: this.preferences.diet,
    id: this.preferences.id
  }

  setUser = (user) => {
    this.setState({ 
      currentUser: user,
      home: null
    }
      , () => { 
        localStorage.user_id = user.id
      })
      this.props.loggedIn(user)
  }

  logout = () => {
    this.setState({ 
      currentUser: null, 
      home: null
    }
      , () => {
        localStorage.removeItem("user_id")
     }
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
        relationship_type: preference.relationship_type,
        id: preference.id
      }) 
  }

  handleChange = e => {
    this.setState({
        [e.target.name]: e.target.value
      })
  }

  handlePreferenceChanges = (newPreference) => {
    if (newPreference.id) {
    fetch(`https://blind-date-backend.herokuapp.com/api/v1/preferences/${newPreference.id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        gender: this.state.gender,
        minimum_age: this.state.minimum_age,
        maximum_age: this.state.maximum_age,
        state: this.state.state,
        smokes: this.state.smokes,
        drinks: this.state.drinks,
        weed: this.state.weed,
        drugs: this.state.drugs,
        religion: this.state.religion,
        education_level: this.state.education_level,
        kids: this.state.kids,
        relationship_type: this.state.relationship_type,
        politics: this.state.politics,
        have_pets: this.state.have_pets,
        diet: this.state.diet
      })
    }) .then(response => response.json())
    .then(response => console.log(response))
    if (window.confirm("Your changes have been submitted! Would you like to view your preferences?")) {
      window.history.back()
    } else {
      return null
    }
  } else {
    fetch('https://blind-date-backend.herokuapp.com/api/v1/preferences',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        user_id: this.state.currentUser.id,
        gender: this.state.gender,
        minimum_age: this.state.minimum_age,
        maximum_age: this.state.maximum_age,
        state: this.state.state,
        smokes: this.state.smokes,
        drinks: this.state.drinks,
        weed: this.state.weed,
        drugs: this.state.drugs,
        religion: this.state.religion,
        education_level: this.state.education_level,
        kids: this.state.kids,
        relationship_type: this.state.relationship_type,
        politics: this.state.politics,
        have_pets: this.state.have_pets,
        diet: this.state.diet
      }),
    })
      .then(response => response.json())
      .then(response => {
      console.log(response)
      if (window.confirm("Your changes have been submitted! Would you like to view your preferences?")) {
        window.history.back()
      } else {
        return null
      }    
    })
  }
}

changeBackgroundToTeal = () => {
  // this.setState({ home: true })
}

changeBackgroundToGray = () => {
  // this.setState({ home: false })
}

  render() {
    console.log("app props", this.props)
    return (
      <Router>
        <NavBar logout={this.logout} currentUser={this.state.currentUser} />
        <body className={this.state.currentUser && !this.state.home ? 'background-gray' : 'background-teal'}>
          <div className="ui container grid">
          </div>
            <Switch>
              <Route exact path="/login" render={(routerProps) => <LogIn {...routerProps} setUser={this.setUser} currentUser={this.state.currentUser} />}/>
              <Route exact path="/" render={(routerProps) => <Home currentUser={this.state.currentUser}{...routerProps} home={this.state.home} changeBackgroundToTeal={this.changeBackgroundToTeal}/>}/>
              <Route exact path="/signup" render={(routerProps) => <Signup setUser={this.setUser} currentUser={this.state.currentUser} {...routerProps} />}/>
              <Route exact path="/myprofile" render={(routerProps) => <MyProfile currentUser={this.state.currentUser}{...routerProps}/>}/>
              <Route exact path="/users" render={(routerProps) => <UserContainer currentUser={this.state.currentUser}{...routerProps} home={this.state.home} changeBackgroundToGray={this.changeBackgroundToGray}/>}/>
              <Route exact path="/matches" render={(routerProps) => <MatchesContainer {...routerProps}/>}/>
              <Route exact path="/messages" render={(routerProps) => <MessagesContainer {...routerProps}/>}/>
              <Route exact path="/users/:id" render={(routerProps) => <UserDetail {...routerProps}/>}/>
              <Route exact path="/editprofile" render={(routerProps) => <EditProfilePage currentUser={this.state.currentUser} logout={this.logout} {...routerProps}/>}/>
              <Route exact path="/filteredprofiles" render={(routerProps) => <FilteredProfiles currentUser={this.state.currentUser}{...routerProps}/>}/>
              <Route exact path="/filters" render={(routerProps) => <FilterContainer {...routerProps} editPreferences={this.editPreferences}
              handleChange={this.handleChange} gender={this.state.gender} minimum_age={this.state.minimum_age} maximum_age={this.state.maximum_age} politics={this.state.politics}
              state={this.state.state} smokes={this.state.smokes} drinks={this.state.drinks}weed={this.state.weed} drugs={this.state.drugs} religion={this.state.religion}education_level={this.state.education_level}kids={this.state.kids}
              have_pets={this.state.have_pets} diet={this.state.diet} relationship_type={this.state.relationship_type} id={this.state.id} currentUser={this.state.currentUser} {...routerProps} handlePreferenceChanges={this.handlePreferenceChanges}/>}/>
              <Route exact path="/profileform" render={(routerProps) => <ProfileForm setUser={this.setUser} user={this.state.currentUser} {...routerProps}/>}/>
              <Route exact path="/editfilters" render={(routerProps) => <FilterForm editPreferences={this.editPreferences} 
              handleChange={this.handleChange} gender={this.state.gender}minimum_age={this.state.minimum_age} maximum_age={this.state.maximum_age} politics={this.state.politics}
              state={this.state.state} smokes={this.state.smokes}drinks={this.state.drinks} weed={this.state.weed} drugs={this.state.drugs} religion={this.state.religion} education_level={this.state.education_level} 
              kids={this.state.kids} have_pets={this.state.have_pets} diet={this.state.diet} relationship_type={this.state.relationship_type} id={this.state.id}
              currentUser={this.state.currentUser} {...routerProps}handlePreferenceChanges={this.handlePreferenceChanges}/>}/>
          </Switch>
      </body>
      <footer>
      <Footer/>
      </footer>
    </Router>
    )
  }
}

const mapStateToProps = state => {
  console.log("app state", state)
  return  { profiles: state.profiles,
            matches: state.matches,
            preferences: state.preferences,
            currentUser: state.currentUser
          };
}

export default connect(mapStateToProps, {getAllUsers, getMyMatches, loggedIn, getPreferences})(App);
