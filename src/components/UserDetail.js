import React from 'react';
import { connect } from 'react-redux';
import { matchProfile, loggedIn, getMyMatches } from '../actions';
import { Link } from 'react-router-dom';

class UserDetail extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.getMyMatches()
  }
    
  state = {
      clickedInfoButton: false
  }

  toggleInfo = () => {
    this.setState({ clickedInfoButton: !this.state.clickedInfoButton })
  }

  render() {
    console.log("user detail props", this.props)
    // console.log("user detail current user", this.props.currentUser)
    // console.log("selected", this.props.selectedProfile)
    // console.log("potential match id", profile.id)
    
    let profile = this.props.selectedProfile
    let someHighSchool = "Some High School"
    let diploma = "High School Diploma/GED"
    let myMatches = this.props.matches.filter(match => match.user_id.id === this.props.currentUser.id)


    if (profile) {return (
      <div>
        <div className="ui container grid">
            <div className="ui row">
                <div className="column twelve wide">
            <h1><b>Meet {profile.name}!</b></h1>
            <h2>About Me</h2>
            <b>Age:</b> {profile.age}
            <br></br>
            <b>Currently living in:</b> {profile.city}, {profile.state}            
            <br></br>
            <b>I'm looking for: </b>{profile.relationship_type}
            <br></br>
            <b>Parent:</b> {profile.kids}
            <br></br>
            <b>Religion:</b> {profile.religion}
            <br></br>
            <b>Employment type:</b> {profile.occupation}
            <br></br>
            <b>Education Level:</b> {profile.education_level}
            <br></br>
            {profile.education_level === diploma || profile.education_level === someHighSchool ? null : `College: ${profile.college}`}
            <br></br>
            <b>My political views:</b> {profile.politics}
            <br></br>
            <b>Pets:</b> {profile.have_pets}
            <br></br>
            <b>My diet is:</b> {profile.diet}
            <br></br>
            <br></br>
            <button className="ui pink button"
            onClick={this.toggleInfo}> {this.state.clickedInfoButton === false ? "See more about me!" : "See less about me!"}</button>
            <br></br>    
            <br></br>          
            <div>
            {this.state.clickedInfoButton === false ? null :
            <div>
            <br></br>
            <b> Morning or night:</b> {profile.morning_night}
            <br></br>
           <b>How I dress:</b> {profile.dress_style}
            <br></br>
           <b>Neat or messy:</b> {profile.messy_neat}
            <br></br>
            <b>My ideal vacation:</b> {profile.vacation_type}
            <br></br>
            <b>Stay in or night out:</b> {profile.night_out_in}
            <br></br>
            <b>Cats or dogs:</b> {profile.cat_dog}
            <br></br>
            <b>How I like to spend my Friday nights:</b> {profile.ideal_friday}
            <br></br>
            <b>Coffee or tea:</b> {profile.coffee_tea}
            <br></br>
            <b>Summer or winter:</b> {profile.summer_winter}
            <br></br>
            <b>Where I would like to live:</b> {profile.city_country_suburbs}
            <br></br>
            <b>Beach or mountains:</b> {profile.beach_mountain}
            <br></br>
            <b>My personality type:</b> {profile.extrovert_introvert}
            <br></br>
            <b>My love language:</b> {profile.love_language}
            <br></br>
            <b>My favorite kind of music:</b> {profile.music}
            <br></br>
            {profile.play_instrument === true ? "I can play an instrument" : null }           
            <br></br>
            <br></br>
            <u>My planning style</u>             
            <br></br>
            <b>In general:</b> {profile.general_planning}
            <br></br>
            <b>For a vacation:</b> {profile.vacation_planning}
            <br></br>
            </div> }
            <h3> <u>Habits </u></h3>
           <b>Drinking:</b>  {profile.drinks}
            <br></br>
            <b>Smoking:</b>  {profile.smokes}
            <br></br>
            <b>4/20 Friendly:</b>  {profile.weed}
            <br></br>
            <b>Other drugs:</b>  {profile.drugs}
            <br></br>
            <br></br>
            {myMatches > 0 ? 
            <Link to={`/matches`}> 
            <button className="ui basic pink button">
            <i className="arrow alternate circle left pink icon"></i> Browse your matches 
            </button>
            </Link> : null}
            <Link to={`/users`}>
            <button className="ui basic pink button">
            <i className="arrow alternate circle left pink icon"></i> Browse all profiles 
            </button>
            </Link>
            {myMatches.map(match => match.potential_match.id).includes(profile.id) ?  <b>          You're a match!</b> :   
            <button 
              onClick={() => this.props.matchProfile(profile.id, this.props.currentUser)}
                    className="ui pink button">
                      Match with {profile.name}! <i className="heart red icon"></i>
            </button>}
         </div>
        </div>
      </div>
      <div className="profilepic">
      <img className="ui centered large bordered image" src={profile.avatar} alt="Oops, this image is broken!"/>
    </div>
      </div>
      </div>
    )}
    else {return <Link to={`/users`}>
    <button className="ui basic pink button">
    <i className="arrow alternate circle left pink icon"></i> Browse all profiles 
    </button>
    </Link>}
        }
}

const mapStateToProps = state => {
    console.log("detail state", state)
  return { selectedProfile: state.selectedProfile, 
            likeProfile: state.likeProfile,
            currentUser: state.currentUser,
            matches: state.matches
    }
}

export default connect(mapStateToProps, {matchProfile, loggedIn, getMyMatches})(UserDetail);