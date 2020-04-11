import React from 'react';
import { connect } from 'react-redux';
import { loggedIn } from '../actions';
import { Link } from 'react-router-dom'
import UserContainer from './UserContainer';

class MyProfile extends React.Component {

  state = {
    moreButton: false,
    profileInfo: this.props.currentUser
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    if (this.props.currentUser){
      fetch(`'http://localhost:3000/api/v1/users/${this.props.currentUser.id}`)
        .then(response => response.json())
        .then(response => this.setState({ profileInfo: response}))
    } else {return null}
  }

  toggleInfo = () => {
    this.setState({ moreButton: !this.state.moreButton })
  }

  render() {
    console.log("my profile props", this.props)
    let props = this.state.profileInfo
    let someHighSchool = "Some High School"
    let diploma = "High School Diploma/GED"
      if (props) {
        return (
          <div>
            <br></br>
            <br></br>
            <br></br>
              <div className="centerText">
              <h1 className="loginFont"> <i className="star icon"></i><b>Meet {props.name}</b> <i className="star icon"></i></h1>
              </div>
              <br></br>
              <br></br>
            <div className="flex-container">
            <div className="biggerProfileFont flexDivs">
                <h3 className="tealFont"> Personal Info & Habits</h3>
                  <b>Religion:</b>  {props.religion}
                  <br></br>
                  <b>Diet:</b>  {props.diet}
                  <br></br>
                  <b>Politics:</b>  {props.politics}
                  <br></br>
                  <b>Pets:</b> {props.have_pets}
                  <br></br>
                  <b>Parent:</b> {props.kids}
                  <br></br>
                  <b>Drinking:</b>  {props.drinks}
                  <br></br>
                  <b>Smoking:</b>  {props.smokes}
                  <br></br>
                  <b>4/20 Friendly:</b>  {props.weed}
                  <br></br>
                  <b>Other drugs:</b>  {props.drugs}
                  <br></br>
                  <br></br>
                  <Link to='/editprofile'>
                  <button className="large ui blue button">Edit Profile</button>
                  </Link>    
              </div>
              <div className="flexDivs">
                <img className="ui medium bordered image" src={props.avatar} alt="Avatar"/>
              </div>
              <div className="flexDivs biggerProfileFont">
                <h2 className="tealFont">About me</h2>
                    <b>Age:</b> {props.age}
                    <br></br>
                    <b>Currently living in:</b> {props.city}, {props.state}            
                    <br></br>
                    <b>I'm looking for: </b>{props.relationship_type}
                    <br></br>
                    <b>Parent:</b> {props.kids}
                    <br></br>
                    <b>Employment type:</b> {props.occupation}
                    <br></br>
                    <b>Education Level:</b> {props.education_level}
                    <br></br>
                    {props.education_level === diploma || props.education_level === someHighSchool ? null : <div> <b>College:</b> {props.college} </div>}
                    <br></br>
                    <br></br>
                    <button className="large ui blue button"
                    onClick={this.toggleInfo}> {this.state.moreButton === false ? "See more about me!" : "See less about me!"}</button>
                    <br></br>
                    <br></br>
                      <div>
                      {this.state.moreButton === false ? null :
                        <div className="column fourteen wide fixedMoreProfile">
                        <b> Morning or night:</b> {props.morning_night}
                        <br></br>
                        <b>How I dress:</b> {props.dress_style}
                        <br></br>
                        <b>Neat or messy:</b> {props.messy_neat}
                        <br></br>
                        <b>My ideal vacation:</b> {props.vacation_type}
                        <br></br>
                        <b>Stay in or night out:</b> {props.night_out_in}
                        <br></br>
                        <b>Cats or dogs:</b> {props.cat_dog}
                        <br></br>
                        <b>How I like to spend my Friday nights:</b> {props.ideal_friday}
                        <br></br>
                        <b>Coffee or tea:</b> {props.coffee_tea}
                        <br></br>
                        <b>Summer or winter:</b> {props.summer_winter}
                        <br></br>
                        <b>Where I would like to live:</b> {props.city_country_suburbs}
                        <br></br>
                        <b>Beach or mountains:</b> {props.beach_mountain}
                        <br></br>
                        <b>My personality type:</b> {props.extrovert_introvert}
                        <br></br>
                        <b>My love language:</b> {props.love_language}
                        <br></br>
                        <b>My favorite kind of music:</b> {props.music}
                        <br></br>
                        <b>Can play an instrument:</b> {props.play_instrument === true ? <i className="music icon"></i> : "No" }           
                        <br></br>
                        <br></br>
                        <div className="smallerTealFont">My planning style</div>             
                        <br></br>
                        <b>In general:</b> {props.general_planning}
                        <br></br>
                        <b>For a vacation:</b> {props.vacation_planning} 
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                </div>
                        }
              </div>
              </div>
              </div>
            </div>
    )
  } else if (!props) {
      return ( <div><UserContainer/></div> )        
    }
  }
}


const mapStateToProps = state => {
    console.log("my profile state", state)
    return { currentUser: state.currentUser,
              profiles: state.profiles };
  }

export default connect(mapStateToProps, {loggedIn})(MyProfile);