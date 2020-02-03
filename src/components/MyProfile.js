import React from 'react';
import { newUser } from '../actions';
import { connect } from 'react-redux';

class MyProfile extends React.Component {

    state = {
        moreButton: false
    }

    componentDidMount() {
        window.scrollTo(0, 0)
      }

      toggleInfo = () => {
        this.setState({
            moreButton: !this.state.moreButton
        })
      }

    render() {

        let props = this.props.newUser

        // console.log("my profile props", this.props)
        let noCollege = "Some High School" || "High School Diploma/GED"

    return (
      <div>
        <div className="ui container grid">
            <div className="ui row">
                <div className="column twelve wide">
         <b>Meet {props.name}!</b>
            <br></br>
            Age {props.age}
            <br></br>
           Currently living in {props.city}, {props.state}            
           <br></br>
         <img className="ui centered medium bordered image" src={props.avatar} alt="Oops, this image is broken!"/>
            <br></br>
            About me:
            <br></br>
            I'm looking for: {props.relationship_type}
            <br></br>
            {props.kids === true ? "I am a parent" : "I am not a parent"}
            <br></br>
            Religion: {props.religion}
            <br></br>
            Employment type: {props.occupation}
            <br></br>
            Education Level: {props.education_level}
            <br></br>
            {props.education_level === noCollege ? null : `College: ${props.college}`}
            <br></br>
            My political views: {props.politics}
            <br></br>
            Pets: {props.have_pets}
            <br></br>
            My diet is {props.diet}
            <br></br>
            <br></br>

            <button className="ui pink button"
            onClick={this.toggleInfo}> See more about me! </button>
            <br></br>
          
            <div>
            {this.state.moreButton === false ? null :
            <div>
                <br></br>
            Morning or night: {props.morning_night}
            How I dress: {props.dress_style}
            <br></br>
            Neat or messy: {props.messy_neat}
            <br></br>
            <br></br>
            My planning style:             
            <br></br>
            In general: {props.general_planning}
            <br></br>
            For a vacation: {props.vacation_planning}
            <br></br>
            My ideal vacation: {props.vacation_type}
            <br></br>
            Stay in or night out: {props.night_out_in}
            <br></br>
            Cats or dogs: {props.cat_dog}
            <br></br>
            How I like to spend my Friday nights: {props.ideal_friday}
            <br></br>
            Coffee or tea: {props.coffee_tea}
            <br></br>
            Summer or winter: {props.summer_winter}
            <br></br>
            Where I would like to live: {props.city_country_suburbs}
            <br></br>
            Beach or mountains: {props.beach_mountain}
            <br></br>
            My personality type: {props.extrovert_introvert}
            <br></br>
            My love language: {props.love_language}
            <br></br>
            My favorite kind of music: {props.music}
            <br></br>
            {props.play_instrument === true ? "I can play an instrument" : null }
            </div> }
            <br></br>
            Habits: 
            <br></br>
            Drinking: {props.drinks}
            <br></br>
            Smoking: {props.smokes}
            <br></br>
            4/20 Friendly: {props.weed === "True" ? "Yes" : "No"}
            <br></br>
            Other drugs: {props.drugs}
            <br></br>
            <br></br>

            <button 
            // onClick={() => this.props.likeProfile(likedProfiles)}
                  className="ui pink button">
                    Match with {props.name}!
          </button>
         </div>
        </div>
      </div>
      </div>
      </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("my profile state", state)
    console.log("new user email", state.newUser.email)

    // debugger
    return  { newUser: state.newUser};
  }

//   const mapDispatchToProps = dispatch => {
//     return  {
//         newUser: (user) => dispatch(newUser(user))
//     };
//   }

//   export default MyProfile
export default connect(mapStateToProps)(MyProfile);