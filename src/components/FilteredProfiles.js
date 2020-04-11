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
      return (this.props.preferences && filtersOn.map(profile => {
          return (
            <div className="card">
            <div className="image">
              <img className="ui image" src={profile.avatar} alt="Avatar" />
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
                      className="ui blue basic button">
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
      if (this.props.currentUser) {
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
        if (filteredProfs.length > 0) {
          return (
            <div>
              <br></br>
          <div className="ui container">
            <br></br>
            <br></br>
            <Link to={`/users`}>
          <button className="ui basic blue button left floated">
              <i className="arrow alternate circle left blue icon"></i> Browse all profiles
          </button>
          </Link>
          <br></br>
          <br></br>
          <br></br>
            <div className="ui teal link cards centerUsers">
                {this.renderList()}
            </div>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
          );
      } else if (filteredProfs.length < 1) {
        return (
          <div className="filteredRight">
          <div className="noPrefsDown">
          <h1 className="tealFont centerFilterMessage"> No profiles match your criteria!</h1>
          <img className="centerKimPic ui large image" src="https://cdn.shopify.com/s/files/1/0094/8142/0858/products/KimK_01_2400x.png?v=1572195311" alt="crying kim"></img>
          <Link to="/filters">
            <button className="ui blue button centerFilterButton">Change Preferences </button>
          </Link>
        <br></br>
        <br></br>
        <br></br>
        </div> 
        </div>
      )} 
  } else {
      return (
      <div className="filteredRight">
        <div className="noPrefsDown">
        <h1 className="tealFont centerFilterMessage"> You haven't set any filters!</h1>
        <img className="centerFilterPic" src="https://i.imgflip.com/1o12mo.jpg" alt="crying"></img>
        <br></br>
        <br></br>
        <Link to="/filters">
          <button className="ui blue button centerFilterButton">Set Preferences </button>
        </Link>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </div> 
      </div>
      )}
    } else {
      return (
        <div className="loader">
        <div className="ui segment">
            <div className="ui active dimmer">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
                <div className="ui large text loader">Loading</div>
            <p></p>
            <p></p>
            <p></p>
            </div>
            </div>
        </div>
        )
    }
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
    