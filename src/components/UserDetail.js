import React from 'react';
import { connect } from 'react-redux';
import { matchProfile, loggedIn } from '../actions';
import { Link } from 'react-router-dom';

class UserDetail extends React.Component {

    state = {
        clickedInfoButton: false
    }

    componentDidMount() {
        window.scrollTo(0, 0)
      }

      toggleInfo = () => {
        this.setState({
            clickedInfoButton: !this.state.clickedInfoButton
        }
        // , ()=>console.log("button clicked", this.state.clickedInfoButton)
        )}

  render() {
    console.log("user detail props", this.props)
    console.log("user detail current user", this.props.currentUser)
    // console.log("selected", this.props.selectedProfile)
    
    let profile = this.props.selectedProfile
    let noCollege = "Some High School" || "High School Diploma/GED"
    
    console.log("potential match id", profile.id)
    // return (this.props.profile && this.props.profile.map(profile => {
    return (
      <div>
        <div className="ui container grid">
            <div className="ui row">
                <div className="column twelve wide">
         <b>Meet {profile.name}!</b>
            <br></br>
            Age {profile.age}
            <br></br>
           Currently living in {profile.city}, {profile.state}            
           <br></br>
         <img className="ui centered medium bordered image" src={profile.avatar} alt="Oops, this image is broken!"/>
            <br></br>
            About me:
            <br></br>
            I'm looking for: {profile.relationship_type}
            <br></br>
            {profile.kids === true ? "I am a parent" : "I am not a parent"}
            <br></br>
            Religion: {profile.religion}
            <br></br>
            Employment type: {profile.occupation}
            <br></br>
            Education Level: {profile.education_level}
            <br></br>
            {profile.education_level === noCollege ? null : `College: ${profile.college}`}
            <br></br>
            My political views: {profile.politics}
            <br></br>
            Pets: {profile.have_pets}
            <br></br>
            My diet is {profile.diet}
            <br></br>
            <br></br>

            <button className="ui pink button"
            onClick={this.toggleInfo}> See more about me! </button>
            <br></br>
          
            <div>
            {this.state.clickedInfoButton === false ? null :
            <div>
                <br></br>
            Morning or night: {profile.morning_night}
            How I dress: {profile.dress_style}
            <br></br>
            Neat or messy: {profile.messy_neat}
            <br></br>
            <br></br>
            My planning style:             
            <br></br>
            In general: {profile.general_planning}
            <br></br>
            For a vacation: {profile.vacation_planning}
            <br></br>
            My ideal vacation: {profile.vacation_type}
            <br></br>
            Stay in or night out: {profile.night_out_in}
            <br></br>
            Cats or dogs: {profile.cat_dog}
            <br></br>
            How I like to spend my Friday nights: {profile.ideal_friday}
            <br></br>
            Coffee or tea: {profile.coffee_tea}
            <br></br>
            Summer or winter: {profile.summer_winter}
            <br></br>
            Where I would like to live: {profile.city_country_suburbs}
            <br></br>
            Beach or mountains: {profile.beach_mountain}
            <br></br>
            My personality type: {profile.extrovert_introvert}
            <br></br>
            My love language: {profile.love_language}
            <br></br>
            My favorite kind of music: {profile.music}
            <br></br>
            {profile.play_instrument === true ? "I can play an instrument" : null }
            
            </div> }
            <br></br>
            Habits: 
            <br></br>
            Drinking: {profile.drinks}
            <br></br>
            Smoking: {profile.smokes}
            <br></br>
            4/20 Friendly: {profile.weed === "True" ? "Yes" : "No"}
            <br></br>
            Other drugs: {profile.drugs}
            <br></br>
            <br></br>
            <Link to={`/users`}>
            <button className="ui basic pink button">
                    Go Back 
          </button>
          </Link>
          {/* remove Match button if already matched */}
          {/* {this.props.likeProfile.includes(props.id == this.props.id) ? "Match" : "No Match"} */}
            <button 
            onClick={() => this.props.matchProfile(profile.id, this.props.currentUser)}
                  className="ui pink button">
                    Match with {profile.name}! <a><i className="heart red icon"></i></a>
          </button>
         </div>
        </div>
      </div>
      </div>
      </div>
    )}
    // ))}
    
}

const mapStateToProps = state => {
    console.log("detail state", state)
  return { selectedProfile: state.selectedProfile, 
            likeProfile: state.likeProfile,
            currentUser: state.currentUser,
            matches: state.matches
        }
}

export default connect(mapStateToProps, {matchProfile, loggedIn})(UserDetail);