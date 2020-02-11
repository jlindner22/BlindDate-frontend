import React from 'react';
import { connect } from 'react-redux';
import { viewProfile, loggedIn, getPreferences } from '../actions';
import { Link } from 'react-router-dom';

class UserContainer extends React.Component {
  
  state = {
    allProfiles: [],
    filteredProfiles: []
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.getPreferences()
    this.setState({ allProfiles: this.props.profiles })
  }

  females = this.props.profiles.filter(prof => prof.gender == "Female")

  // myPreferences = this.props.preferences.filter(pref => pref.user_id.id === this.props.currentUser.id)

  // myPreferences = () => {
  //   if (this.props.preferences) {
  //   let preferences = this.props.preferences.filter(pref => pref.user_id.id === this.props.currentUser.id)
  //   return preferences } else {return "Log in to view your preferences"}
  // }

  renderPreferredProfiles = () => {
    // // if (this.props.preferences) {
    //   let preferred = this.props.profiles.filter(pref => pref.state === this.myPreferences.state)
    //   console.log(preferred)
      // return preferred 
      let myPreferences = this.props.preferences.filter(pref => pref.user_id === this.props.currentUser.id)
     let prefState = myPreferences[0]
    // } else {return this.props.profiles}
    // }
  }

  // renderPreferredProfiles()

  renderList() {
    let myPreferences = this.props.preferences.filter(pref => pref.user_id === this.props.currentUser.id)
    let prefState = myPreferences[0]
    let females = this.props.profiles.filter(prof => prof.gender == "Female")
// debugger
   //  let preferred = this.props.profiles.filter(pref => pref.state === this.myPreferences.state)
     console.log("Preferred State", myPreferences[0])
     console.log("Pref State", prefState)
     console.log("females", females)
     console.log("user container props", this.props)
    return (this.props.profiles && this.props.profiles.map(profile => {
      return (
        <div className="card">
      <div className="image">
        <img className="ui image" src={profile.avatar} alt="Try again later!" />
      </div>
      <div className="content">
        <a className="header">{profile.name}</a>
        <div className="meta">
          <span className="date">Age {profile.age} 
    </span>
        </div>
        <div className="description">
          {profile.name} lives in {profile.city}, {profile.state}.
        </div>
      </div>
      <div className="extra content"><Link to={`/users/${profile.id}`}> 
        <button onClick={() => this.props.viewProfile(profile)}
                className="ui pink basic button">
                  View Profile!
        </button></Link>
        <div className="ui right floated">
        {profile.gender !== "Female" ? <i className="mars icon" ></i>  :  <i className="venus icon"></i> }
        </div>
      </div>
    </div>
      );
    }))
  };

    render() {
//      let myPreferences = this.props.preferences.filter(pref => pref.user_id === this.props.currentUser.id)
//      let prefState = myPreferences[0]
//      let females = this.props.profiles.filter(prof => prof.gender == "Female")
// // debugger
//     //  let preferred = this.props.profiles.filter(pref => pref.state === this.myPreferences.state)
//       console.log("Preferred State", myPreferences[0])
//       console.log("Pref State", prefState)
//       console.log("females", females)
//       console.log("user container props", this.props)
      return (
        <div>
        <br></br>
        <div className="ui container grid">
          <br></br>
          <Link to= "/filter">
          <button className="ui pink button">
          View/Set Preferences
        </button>
        </Link>
        <br></br>
        <br></br>
        <br></br>

          <div className="ui link cards">
          {this.renderList()}
          </div>
        </div>
        </div>
      )
    }
  }

  const mapStateToProps = state => {
    return  { profiles: state.profiles,
              selectedProfile: state.selectedProfile,
              currentUser: state.currentUser,
              preferences: state.preferences
            };
  }

  export default connect(mapStateToProps, {viewProfile, getPreferences, loggedIn})(UserContainer);
