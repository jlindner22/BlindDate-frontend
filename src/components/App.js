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
import { getAllUsers, getMyMatches, loggedIn, getPreferences } from '../actions';
import Signup from './Signup';
import FilterForm from './FilterForm';
import FilteredProfiles from './FilteredProfiles';
// import Footer from './Footer';

class App extends React.Component {
  
  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.getAllUsers()
    this.props.getPreferences()
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
        this.props.getMyMatches()
      }
    }
  )}
}

preferences = this.props.preferences.filter(preference => preference.user_id === this.props.currentUser.id)

  state = {
    currentUser: null,
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
        relationship_type: preference.relationship_type,
        id: preference.id
      })
      
  }

  // handleChange = e => {
  //   this.setState({
  //       [e.target.name]: e.target.value
  //     })
  // }

  minRangeChange = (e) => {
    this.setState({
      minimum_age: e.target.value
    })
  }

  maxRangeChange = (e) => {
    this.setState({
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

  weedChange = (e) => {
    this.setState({
      weed: e.target.value
    })
  }

  kidsChange = (e) => {
    this.setState({
      kids: e.target.value
    })
  }

  handlePreferenceChanges = (newPreference) => {
if (newPreference.id) {
    fetch(`http://localhost:3000/api/v1/preferences/${newPreference.id}`,{
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
      }),
    })
  } else {
    fetch('http://localhost:3000/api/v1/preferences',{
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
  })
  }
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
              <Route exact path="/users" render={(routerProps) => <UserContainer currentUser={this.state.currentUser}{...routerProps}/>}/>
              <Route exact path="/matches" render={(routerProps) => <MatchesContainer {...routerProps}/>}/>
              <Route exact path="/messages" render={(routerProps) => <MessagesContainer {...routerProps}/>}/>
              <Route exact path="/users/:id" render={(routerProps) => <UserDetail {...routerProps}/>}/>
              <Route exact path="/filteredprofiles" render={(routerProps) => <FilteredProfiles currentUser={this.state.currentUser}{...routerProps}/>}/>
              <Route exact path="/filter" render={(routerProps) => <Filter {...routerProps} editPreferences={this.editPreferences}
              minRangeChange={this.minRangeChange}maxRangeChange={this.maxRangeChange}stateChange={this.stateChange}smokesChange={this.smokesChange}drinksChange={this.drinksChange}
              genderChange={this.genderChange}drugsChange={this.drugsChange}religionChange={this.religionChange}educationLevelChange={this.educationLevelChange}
              relationshipTypeChange={this.relationshipTypeChange}havePetsChange={this.havePetsChange}politicsChange={this.politicsChange}dietChange={this.dietChange}
              weedChange={this.weedChange}kidsChange={this.kidsChange}
              gender={this.state.gender}minimum_age={this.state.minimum_age}maximum_age={this.state.maximum_age}politics={this.state.politics}
              state={this.state.state}smokes={this.state.smokes}drinks={this.state.drinks}weed={this.state.weed}drugs={this.state.drugs}religion={this.state.religion}education_level={this.state.education_level}kids={this.state.kids}
              have_pets={this.state.have_pets}diet={this.state.diet}relationship_type={this.state.relationship_type}id={this.state.id}
              currentUser={this.state.currentUser}{...routerProps}handlePreferenceChanges={this.handlePreferenceChanges}
              />}/>
              <Route exact path="/profileform" render={(routerProps) => <ProfileForm setUser={this.setUser} user={this.state.currentUser}{...routerProps}/>}/>
              <Route exact path="/editfilters" render={(routerProps) => <FilterForm editPreferences={this.editPreferences} 
              minRangeChange={this.minRangeChange}maxRangeChange={this.maxRangeChange}stateChange={this.stateChange}smokesChange={this.smokesChange}drinksChange={this.drinksChange}
              genderChange={this.genderChange}drugsChange={this.drugsChange}religionChange={this.religionChange}educationLevelChange={this.educationLevelChange}
              relationshipTypeChange={this.relationshipTypeChange}havePetsChange={this.havePetsChange}politicsChange={this.politicsChange}dietChange={this.dietChange}
              weedChange={this.weedChange}kidsChange={this.kidsChange}
              gender={this.state.gender}minimum_age={this.state.minimum_age}maximum_age={this.state.maximum_age}politics={this.state.politics}
              state={this.state.state}smokes={this.state.smokes}drinks={this.state.drinks}weed={this.state.weed}drugs={this.state.drugs}religion={this.state.religion}education_level={this.state.education_level}kids={this.state.kids}
              have_pets={this.state.have_pets}diet={this.state.diet}relationship_type={this.state.relationship_type}id={this.state.id}
              currentUser={this.state.currentUser}{...routerProps}handlePreferenceChanges={this.handlePreferenceChanges}/>}/>
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
            matches: state.matches,
            preferences: state.preferences
          };
}

export default connect(mapStateToProps, {getAllUsers, getMyMatches, loggedIn, getPreferences})(App);
