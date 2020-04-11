import React from 'react';
import { connect } from 'react-redux';
import { matchProfile, loggedIn, getMyMatches } from '../actions';
import { Link } from 'react-router-dom';
import UserContainer from './UserContainer';

class UserDetail extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.getMyMatches()
  }
    
  state = {
    clickedInfoButton: false,
    matched: false
  }

  toggleInfo = () => {
    this.setState({ clickedInfoButton: !this.state.clickedInfoButton })
  }

  componentDidUpdate() {
    // this.props.getMyMatches()
    let liked = this.props.likeProfile.map(profile => profile.potential_match_id == this.props.selectedProfile.id)
    console.log(liked)
    // let myMatches = this.props.matches.filter(match => match.user_id.id === this.props.currentUser.id)

    if (liked === [true]) {
      this.setState({matched: true}, console.log("new matched state", this.state.matched))
    } else {
      return null
    }
  }

  render() {
    let profile = this.props.selectedProfile
    let someHighSchool = "Some High School"
    let diploma = "High School Diploma/GED"
    let myMatches = this.props.matches.filter(match => match.user_id.id === this.props.currentUser.id)
      if (profile) {
        return (
          <div>
          <br></br>
          <br></br>
          <br></br>
          <div className="centerText">
          <h1 className="loginFont"> <i className="star icon"></i><b>Meet {profile.name}</b> <i className="star icon"></i></h1>
          </div>
          <br></br>
          <br></br>
        <div className="flex-container">
          <div className="biggerProfileFont flexDivs">
          <h3 className="tealFont"> Personal Info & Habits </h3>
            <b>Religion:</b>  {profile.religion}
            <br></br>
            <b>Diet:</b>  {profile.diet}
            <br></br>
            <b>Politics:</b>  {profile.politics}
            <br></br>
            <b>Pets:</b> {profile.have_pets}
            <br></br>
            <b>Parent:</b> {profile.kids}
            <br></br>
            <b>Drinking:</b>  {profile.drinks}
            <br></br>
            <b>Smoking:</b>  {profile.smokes}
            <br></br>
            <b>4/20 Friendly:</b>  {profile.weed}
            <br></br>
            <b>Other drugs:</b>  {profile.drugs}
            <br></br>
            <br></br>
          </div>
        <div className="flexDivs">
            <img className="ui medium bordered image" src={profile.avatar} alt="Avatar"/>   
        </div>
                <br></br>
                <br></br>
              <div className="biggerProfileFont flexDivs">
                <h2 className="tealFont">About me</h2>
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
            {profile.education_level === diploma || profile.education_level === someHighSchool ? null : <div> <b>College:</b> {profile.college} </div>}
            <br></br>
            <b>My political views:</b> {profile.politics}
            <br></br>
            <b>Pets:</b> {profile.have_pets}
            <br></br>
            <b>My diet is:</b> {profile.diet}
            <br></br>
            <br></br>
            <button className="large ui blue button"
            onClick={this.toggleInfo}> {this.state.clickedInfoButton === false ? "See more about me!" : "See less about me!"}</button>
            <br></br>    
            <br></br>          
            <div>
            {this.state.clickedInfoButton === false ? null :
            <div className="column fourteen wide fixedMoreProfile">
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
            <b>Can play an instrument:</b> {profile.play_instrument === true ? <i className="music icon"></i> : "No" }           
            <br></br>
            <br></br>
            <div className="smallerTealFont">My planning style</div>             
            <br></br>
            <b>In general:</b> {profile.general_planning}
            <br></br>
            <b>For a vacation:</b> {profile.vacation_planning}
            <br></br>
            <br></br>
            <br></br>                  
            <br></br>
            <br></br>                  
            <br></br>
            <br></br>             
          </div> }
         </div>
        </div>
        </div>
        <div className="centerUserDetailButtons">
            <Link to={`/users`}>
            <button className="large ui basic teal button ">
            <i className="arrow alternate circle left blue icon"></i> Browse all profiles 
            </button>
            </Link>
            <br></br> 
          
              {myMatches.map(match => match.potential_match.id).includes(profile.id) 
              ?  
              <div>
                <br></br> 
              <div className="biggerMatchFont">You're a match!
              </div>
              </div> : 
              <div> 
                <br></br>  
            <button onClick={() => this.props.matchProfile(profile.id, this.props.currentUser)}
              className="large ui blue button "> <i className="user plus icon"></i>Match with {profile.name}! 
            </button> </div>} 
                <br></br>
                {myMatches.length > 0 ? 
            <Link to={`/matches`}> 
            <button className="large ui basic blue button ">
            <i className="arrow alternate circle left blue icon"></i> Browse your matches 
            </button>
            </Link> : null}
              </div>
              <br></br>
              <br></br>
      </div>

    )} else {return (
      <UserContainer/>
    )
    }
  }
}

const mapStateToProps = state => {
  return { selectedProfile: state.selectedProfile, 
            likeProfile: state.likeProfile,
            currentUser: state.currentUser,
            matches: state.matches }
}

export default connect(mapStateToProps, {matchProfile, loggedIn, getMyMatches})(UserDetail);