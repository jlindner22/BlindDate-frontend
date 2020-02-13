import React from 'react';
import { connect } from 'react-redux';
import { viewProfile, loggedIn, getPreferences } from '../actions';
import { Link } from 'react-router-dom';

class FilteredProfiles extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.getPreferences()
  }

  renderList(){
    let myPreferences = this.props.preferences.filter(pref => pref.user_id === this.props.currentUser.id)
    if (myPreferences.length > 0){
      let prefState = myPreferences[0]
      let filtersOn = this.props.profiles.filter(prof => ((prof.gender === prefState.gender) || (prefState.gender === "All"))
        && ((prof.age <= prefState.maximum_age) || (prefState.minimum_age === 18 ))
        && ((prof.age >= prefState.minimum_age) || (prefState.maximum_age === 100))
        && ((prof.diet === prefState.diet) || (prefState.diet === "All"))
        && ((prof.religion === prefState.religion) || (prefState.religion === "All"))
        && (((prof.education_level === prefState.education_level) || (prefState.education_level === "All"))
        && ((prof.kids === prefState.kids) || prefState.kids === "All"))
        && ((prof.relationship_type === prefState.relationship_type) || (prefState.relationship_type === "All"))
        && ((prof.politics === prefState.politics) || (prefState.politics === "All"))
        && ((prof.have_pets === prefState.have_pets) || (prefState.have_pets === "All"))
        && ((prof.smokes === prefState.smokes) || (prefState.smokes === "All"))
        && ((prof.drinks === prefState.drinks) || (prefState.drinks === "All"))
        && ((prof.weed === prefState.weed) || (prefState.weed === "All"))
        && ((prof.drugs === prefState.drugs) || (prefState.drugs === "All"))
        && ((prof.state === prefState.state) || (prefState.state === "All"))
      )
      console.log("who matches?", filtersOn)
      return (this.props.preferences && filtersOn.map(profile => {
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
            <div className="extra content">
                <Link to={`/users/${profile.id}`}> <button 
                  onClick={() => this.props.viewProfile(profile)}
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
    }};
    render() {
      console.log("HELP ME PLEASE",this.props)
      let myPreferences = this.props.preferences.filter(pref => pref.user_id === this.props.currentUser.id)
      if (myPreferences.length > 0){
      let prefState = myPreferences[0]
      let filteredProfs = this.props.profiles.filter(prof => ((prof.gender === prefState.gender) || (prefState.gender === "All"))
        && ((prof.age <= prefState.maximum_age) || (prefState.minimum_age === 18 ))
        && ((prof.age >= prefState.minimum_age) || (prefState.maximum_age === 100))
        && ((prof.diet === prefState.diet) || (prefState.diet === "All"))
        && ((prof.religion === prefState.religion) || (prefState.religion === "All"))
        && (((prof.education_level === prefState.education_level) || (prefState.education_level === "All"))
        && ((prof.kids === prefState.kids) || prefState.kids === "All"))
        && ((prof.relationship_type === prefState.relationship_type) || (prefState.relationship_type === "All"))
        && ((prof.politics === prefState.politics) || (prefState.politics === "All"))
        && ((prof.have_pets === prefState.have_pets) || (prefState.have_pets === "All"))
        && ((prof.smokes === prefState.smokes) || (prefState.smokes === "All"))
        && ((prof.drinks === prefState.drinks) || (prefState.drinks === "All"))
        && ((prof.weed === prefState.weed) || (prefState.weed === "All"))
        && ((prof.drugs === prefState.drugs) || (prefState.drugs === "All"))
        && ((prof.state === prefState.state) || (prefState.state === "All"))
        ) 
        if (myPreferences.length > 0 && filteredProfs.length > 0) {
              return (
                <div>
          <div className="ui container grid">
            <div className="ui row">
            <Link to={`/users`}>
          <button className="ui basic pink button left floated">
              <i className="arrow alternate circle left pink icon"></i> Browse without filters
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
        </div>
          );
      } else if (filteredProfs.length < 1) {return (<div className="ui container grid">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    <h1> No profiles match your criteria</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
  </div>
      )} 
   } else {return (
    <div className="ui container grid">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div>
      <h1> You haven't set any filters!</h1>
      <br></br>
      </div>
      <br></br>
      <Link to="/filters">
        <button className="ui pink button">Set Preferences </button>
      </Link>
     <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </div>
  )}
  } 
}

const mapStateToProps = state => {
return  { profiles: state.profiles,
            selectedProfile: state.selectedProfile,
            currentUser: state.currentUser,
            preferences: state.preferences
        };
}
    
export default connect(mapStateToProps, {viewProfile, getPreferences, loggedIn})(FilteredProfiles);
    