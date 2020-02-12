import React from 'react';
import { connect } from 'react-redux';
import { loggedIn } from '../actions';


class MyProfile extends React.Component {

    state = {
        moreButton: false,
        profileInfo: this.props.currentUser
    }

    componentDidMount() {
      window.scrollTo(0, 0)
      // this.props.getAllUsers()
      if (this.props.currentUser){
      fetch(`http://localhost:3000/api/v1/users/${this.props.currentUser.id}`)
       .then(response => response.json())
       .then(response => this.setState({ profileInfo: response}))
      } else {return null}
      }

    toggleInfo = () => {
      this.setState({
          moreButton: !this.state.moreButton
      })
    }

    render() {
      console.log("my profile props", this.props)
        let props = this.state.profileInfo
        let noCollege = "Some High School" || "High School Diploma/GED";
      console.log("Hi JEN", props)
        if (props) {
    return (
      <div>
        <div className="ui container grid">
            <div className="ui center row">
                <div className="column twelve wide">
            <h1> <b>Meet {props.name}!</b> </h1>
            <h2>About Me</h2>
            <b>Age:</b> {props.age}
            <br></br>
            <b>Currently living in:</b> {props.city}, {props.state}            
            <br></br>
            <b>I'm looking for: </b>{props.relationship_type}
            <br></br>
            {props.kids === true ? "I am a parent" : "I am not a parent"}
            <br></br>
            <b>Religion:</b> {props.religion}
            <br></br>
            <b>Employment type:</b> {props.occupation}
            <br></br>
            <b>Education Level:</b> {props.education_level}
            <br></br>
            {props.education_level === noCollege ? null : `College: ${props.college}`}
            <br></br>
            <b>My political views:</b> {props.politics}
            <br></br>
            <b>Pets:</b> {props.have_pets}
            <br></br>
            <b>My diet is:</b> {props.diet}
            <br></br>
            <br></br>
            <button className="ui pink button"
            onClick={this.toggleInfo}> {this.state.moreButton === false ? "See more about me!" : "See less about me!"}</button>
            <br></br>
            <br></br>
            <div>
            {this.state.moreButton === false ? null :
            <div>
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
            {props.play_instrument === true ? "I can play an instrument" : null }
            <br></br>
            <br></br>
            <u>My planning style</u>             
            <br></br>
            <b>In general:</b> {props.general_planning}
            <br></br>
            <b>For a vacation:</b> {props.vacation_planning}
            <br></br>
        </div>}
           <h3> <u>Habits </u></h3>
           <b>Drinking:</b>  {props.drinks}
            <br></br>
            <b>Smoking:</b>  {props.smokes}
            <br></br>
            <b>4/20 Friendly:</b>  {props.weed === "True" ? "Yes" : "No"}
            <br></br>
            <b>Other drugs:</b>  {props.drugs}
            <br></br>
            <br></br>
         </div>
        </div>
      </div>
      <div className="profilepic">
      <img className="ui centered large bordered image" src={props.avatar} alt="Oops, this image is broken!"/>
      </div>
      </div>
      </div>
        )
    } else {return "Please log in to view your profile"}
  }
}

const mapStateToProps = state => {
    console.log("my profile state", state)
    return  { currentUser: state.currentUser,
              profiles: state.profiles};
  }

export default connect(mapStateToProps, { loggedIn})(MyProfile);