import React from 'react';
import { connect } from 'react-redux';
import { loggedIn } from '../actions';

class ProfileForm extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    state = {
        page: 1,
        name: '',
        email: '',
        avatar: '',
        gender: '',
        age: '',
        phone_number: '',
        city: '',
        state: '', 
        smokes: '',
        drinks: '',
        weed: '',
        drugs: '',
        religion: '',
        occupation: '',
        college: '',
        education_level: '',
        kids: '',
        relationship_type: '',
        politics: '',
        have_pets: '',
        morning_night: '',
        dress_style: '',
        messy_neat: '',
        general_planning: '',
        vacation_planning: '',
        vacation_type: '',
        cat_dog: '',
        coffee_tea: '',
        summer_winter: '',
        city_country_suburbs: '',
        beach_mountain: '',
        night_out_in: '',
        diet: '',
        extrovert_introvert: '',
        love_language: '',
        music: '',
        play_instrument: '',
        ideal_friday: '',
    }

    goToFirstPage = () => {
        this.setState({page: 1 })
        window.scrollTo(0, 0)
    }

    goToSecondPage = () => {
        this.setState({page: 2})
        window.scrollTo(0, 0)
    }

    goToThirdPage = () => {
        this.setState({page: 3})
        window.scrollTo(0, 0)
    }

    goToFourthPage = () => {
        this.setState({page: 4})
        window.scrollTo(0, 0)
    }

    handleText = (e) => {
        this.setState({[e.target.name]: e.target.value}, console.log(e.target.value))
    }

    userBasicInfo = (user, e) => {
        // console.log("profile form user", user)
        // console.log(this.state)
        e.preventDefault()
        fetch(`https://blind-date-backend.herokuapp.com/api/v1/users/${user.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              "Accepts": "application/json",
            },             
            body: JSON.stringify({ 
                name: this.state.name,
                email: this.state.email,
                avatar: this.state.avatar,
                gender: this.state.gender,
                age: this.state.age,
                phone_number: this.state.phone_number,
                city: this.state.city,
                state: this.state.state
            })   
        })
            .then(response => response.json())
            .then(response => console.log(response))
            this.goToSecondPage()
        }

    userPageTwoInfo = (user, e) => {
        // console.log("profile form user", user)
        // console.log(this.state)
        e.preventDefault()
        fetch(`https://blind-date-backend.herokuapp.com/api/v1/users/${user.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              "Accepts": "application/json",
            },             
            body: JSON.stringify({ 
                smokes: this.state.smokes,
                drinks: this.state.drinks,
                weed: this.state.weed,
                drugs: this.state.drugs,
                religion: this.state.religion,
                occupation: this.state.occupation,
                diet: this.state.diet,
                college: this.state.college,
                education_level: this.state.education_level,
                kids: this.state.kids,
                relationship_type: this.state.relationship_type,
                politics: this.state.politics,
                have_pets: this.state.have_pets
            })   
        })
            .then(response => response.json())
            .then(response => console.log(response))
            this.goToThirdPage()
    }

    userPageThreeInfo = (user, e) => {
        // console.log(this.state)
        e.preventDefault()
        fetch(`https://blind-date-backend.herokuapp.com/api/v1/users/${user.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              "Accepts": "application/json",
            },             
            body: JSON.stringify({ 
                morning_night: this.state.morning_night,
                dress_style: this.state.dress_style,
                summer_winter: this.state.summer_winter,
                city_country_suburbs: this.state.city_country_suburbs,
                beach_mountain: this.state.beach_mountain,
                love_language: this.state.love_language,
                extrovert_introvert: this.state.extrovert_introvert,
                play_instrument: this.state.play_instrument,
                ideal_friday: this.state.ideal_friday
            })   
        })
            .then(response => response.json())
            .then(response => console.log(response))
            this.goToFourthPage()
    }

    userPageFourInfo = (user, e) => {
        e.preventDefault()
        fetch(`https://blind-date-backend.herokuapp.com/api/v1/users/${user.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              "Accepts": "application/json",
            },             
            body: JSON.stringify({ 
                messy_neat: this.state.messy_neat,
                general_planning: this.state.general_planning,
                vacation_planning: this.state.vacation_planning,
                vacation_type: this.state.vacation_type,
                cat_dog: this.state.cat_dog,
                coffee_tea: this.state.coffee_tea,
                night_out_in: this.state.night_out_in,
                music: this.state.music
            })   
        })
            .then(response => response.json())
            .then(response => console.log(response))
            this.props.history.push('/users')
    }

  render() {
      console.log("USER", this.props.user)
      console.log("PROFILE FORM PROPS",this.props)
       if (this.state.page === 1) {
        return (
        <div className="ui container grid">
            <div className="ui row">
                <form className="ui form" onSubmit={(e) => this.userBasicInfo(this.props.user, e)}>
                     <br></br>
                     <br></br>
                    <h3 className="ui dividing header tealFont">Basic Information</h3>
                        <div className="field">
                            <div className="two fields">
                                <div className="field">
                                 <input onChange={this.handleText} type="text" name="name" placeholder="First Name" value={this.state.name}></input>
                                </div>
                                <div className="field">
                                 <input type="text" name="age" placeholder="Age" onChange={this.handleText} value={this.state.age}></input>
                                </div>
                                <select className="ui fluid dropdown" name="gender" onChange={this.handleText} value={this.state.gender}>
                                <option value="">Gender</option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                                </select>
                            </div>
                        </div>
                        <div className="field">
                         <label>Account Information</label>
                            <div className="fields">
                                <div className="ten wide field">
                                    <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleText}></input>
                                </div>
                            </div>
                            <div className="fields">
                                <div className="ten wide field">
                                    <input type="text" name="phone_number" placeholder="Phone Number (no spaces or symbols)" value={this.state.phone_number} onChange={this.handleText}></input>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                         <label>Current Location</label>
                            <div className="fields">
                            <div className="eight wide field">
                                <input type="text" name="city" placeholder="City" value={this.state.city} onChange={this.handleText}></input>
                            </div>
                                <select className="ui fluid dropdown" name="state" onChange={this.handleText} value={this.state.state}>
                                <option value="">State</option>
                                <option value="Alabama">Alabama</option>
                                <option value="Alaska">Alaska</option>
                                <option value="Arizona">Arizona</option>
                                <option value="Arkansas">Arkansas</option>
                                <option value="California">California</option>
                                <option value="Colorado">Colorado</option>
                                <option value="Connecticut">Connecticut</option>
                                <option value="Delaware">Delaware</option>
                                <option value="District Of Columbia">District Of Columbia</option>
                                <option value="Florida">Florida</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Hawaii">Hawaii</option>
                                <option value="Idaho">Idaho</option>
                                <option value="Illinois">Illinois</option>
                                <option value="Indiana">Indiana</option>
                                <option value="Iowa">Iowa</option>
                                <option value="Kansas">Kansas</option>
                                <option value="Kentucky">Kentucky</option>
                                <option value="Louisiana">Louisiana</option>
                                <option value="Maine">Maine</option>
                                <option value="Maryland">Maryland</option>
                                <option value="Massachusetts">Massachusetts</option>
                                <option value="Michigan">Michigan</option>
                                <option value="Minnesota">Minnesota</option>
                                <option value="Mississippi">Mississippi</option>
                                <option value="Missouri">Missouri</option>
                                <option value="Montana">Montana</option>
                                <option value="Nebraska">Nebraska</option>
                                <option value="Nevada">Nevada</option>
                                <option value="New Hampshire">New Hampshire</option>
                                <option value="New Jersey">New Jersey</option>
                                <option value="New Mexico">New Mexico</option>
                                <option value="New York">New York</option>
                                <option value="North Carolina">North Carolina</option>
                                <option value="orth Dakota">North Dakota</option>
                                <option value="Ohio">Ohio</option>
                                <option value="Oklahoma">Oklahoma</option>
                                <option value="Oregon">Oregon</option>
                                <option value="Pennsylvania">Pennsylvania</option>
                                <option value="hode Island">Rhode Island</option>
                                <option value="South Carolina">South Carolina</option>
                                <option value="South Dakota">South Dakota</option>
                                <option value="Tennessee">Tennessee</option>
                                <option value="Texas">Texas</option>
                                <option value="Utah">Utah</option>
                                <option value="Vermont">Vermont</option>
                                <option value="Virginia">Virginia</option>
                                <option value="Washington">Washington</option>
                                <option value="West Virginia">West Virginia</option>
                                <option value="Wisconsin">Wisconsin</option>
                                <option value="Wyoming">Wyoming</option>
                                </select>
                            </div>
                    </div>
                <div className="field">
                    <br></br>
                <h3 className="ui dividing header tealFont">Choose an avatar!</h3>
                            <div className="fields">
                            <div className="twelve wide field">
                                <input type="text" name="avatar" placeholder="Paste URL Here" value={this.state.avatar} onChange={this.handleText}></input>
                            </div>
                            </div>
                </div>
                <input className="ui teal button right floated" type="submit" value="Next Page"></input>
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
                </form>
            </div>
        </div>
        )} 
    //end of first page
    else if (this.state.page === 2) 
    //second page starts here
        { return (
            <div className="ui container grid">
                <div className="ui row">
                    <form className="ui form" onSubmit={(e) => this.userPageTwoInfo(this.props.user, e)}>
                        <br></br>
                        <h2 className="ui dividing header tealFont">About me</h2>
                            <div className="field">
                                <label>What I'm looking for</label>
                                    <select className="ui fluid dropdown" name="relationship_type" onChange={this.handleText} value={this.state.relationship_type}>
                                        <option value="">Please answer</option>
                                        <option value="Business/Networking">Business/Networking</option>
                                        <option value="Companion">Companion</option>
                                        <option value="Dating">Dating</option>
                                        <option value="Friendship">Friendship</option>
                                        <option value="Hookups">Hookups</option>
                                        <option value="Long-Term Relationship">Long-Term Relationship</option>
                                        <option value="Marriage">Marriage</option>
                                        <option value="Not sure">Not sure</option>
                                        <option value="Other">Other</option>
                                    </select>         
                            </div>
                            <div className="field">
                                <label>I would classify my religious beliefs as</label>
                                    <select className="ui fluid dropdown" onChange={this.handleText} name="religion" value={this.state.religion}>
                                        <option value="">Please answer</option>
                                        <option value="Agnostic">Agnostic</option>
                                        <option value="Atheist">Atheist</option>
                                        <option value="Buddhist">Buddhist</option>
                                        <option value="Cao Dai">Cao Dai</option>
                                        <option value="Catholic">Catholic</option>
                                        <option value="Christian">Christian</option>
                                        <option value="Hindu">Hindu</option>
                                        <option value="Jainism">Jainism</option>
                                        <option value="Jewish">Jewish</option>
                                        <option value="Muslim">Muslim</option>
                                        <option value="Other">Other</option>
                                        <option value="Shinto">Shinto</option>
                                        <option value="Sikh">Sikh</option>
                                        <option value="Spiritual">Spiritual</option>
                                        <option value="Taoism">Taoism</option>
                                        <option value="Prefer not to say">Prefer not to say</option>
                                    </select>
                            </div>
                            <div className="field">
                                <label>Politically, my views are</label>
                                    <select className="ui fluid dropdown" onChange={this.handleText} name="politics" value={this.state.politics}>
                                        <option value="">Please answer</option>
                                        <option value="Conservative">Conservative</option>
                                        <option value="Liberal">Liberal</option>
                                        <option value="Moderate">Moderate</option>
                                        <option value="Other">Other</option>
                                        <option value="Prefer not to say">Prefer not to say</option>
                                    </select>
                            </div>
                            <div className="field">
                                <label>My highest level of education attained</label>
                                    <select className="ui fluid dropdown" onChange={this.handleText} name="education_level" value={this.state.education_level}>
                                        <option value="">Please answer</option>
                                        <option value="Some High School">Some High School</option>
                                        <option value="High School Diploma/GED">High School Diploma/GED</option>
                                        <option value="Some College">Some College</option>
                                        <option value="Associate's Degree">Associate's Degree</option>
                                        <option value="Bachelor's Degree">Bachelor's Degree</option>
                                        <option value="Master's Degree or Higher">Master's Degree or Higher</option>
                                    </select>
                            </div>
                            <div className="field">
                                <label> Name of school(s) I attended</label>
                                <div className="field">
                                    <input type="text" name="college" placeholder="College Name" value={this.state.college} onChange={this.handleText}></input>
                                </div>
                            </div>
                            <div className="field">
                                <label>My employment</label>
                                    <select className="ui fluid dropdown" onChange={this.handleText} name="occupation" value={this.state.occupation}>
                                        <option value="">Please answer</option>
                                        <option value="Employed Full-Time">Employed Full-Time</option>
                                        <option value="Employed Part-Time">Employed Part-Time</option>
                                        <option value="Student">Student</option>
                                        <option value="Unemployed">Unemployed</option>
                                        <option value="Other">Other</option>
                                    </select>
                            </div>
                            <div className="field">
                                <label>My diet</label>
                                    <select className="ui fluid dropdown" onChange={this.handleText} name="diet" value={this.state.diet}>
                                        <option value="">Please answer</option>
                                        <option value="Gluten-free">Gluten-free</option>
                                        <option value="Kosher">Kosher</option>
                                        <option value="Nothing special, I'll eat anything">Nothing special, I'll eat anything</option>
                                        <option value="Pescatarian">Pescatarian</option>
                                        <option value="Vegetarian">Vegetarian</option>
                                        <option value="Vegan">Vegan</option>
                                    </select>
                            </div>
                            <div className="field">
                                <label>Any children</label>
                                    <select className="ui fluid dropdown" onChange={this.handleText} name="kids" value={this.state.kids}>
                                        <option value="">Please answer</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                            </div>
                            <div className="field">
                                <label>Any pets owned </label>
                                    <select className="ui fluid dropdown" onChange={this.handleText} name="have_pets" value={this.state.have_pets}>
                                        <option value="">Please answer</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="Not right now, maybe in the future">Not right now, maybe in the future</option>
                                    </select>
                            </div>
                            <h3 className="ui dividing header tealFont">My habits</h3>
                            <div className="field">
                                <label>Drinking </label>
                                    <select className="ui fluid dropdown" onChange={this.handleText} name="drinks" value={this.state.drinks}>
                                        <option value="">Please answer</option>
                                        <option value="Often">Often</option>
                                        <option value="Socially">Socially</option>
                                        <option value="Sometimes">Sometimes</option>
                                        <option value="Rarely">Rarely</option>
                                        <option value="Never">Never</option>
                                        <option value="Prefer not to say">Prefer not to say</option>
                                    </select>
                            </div>
                            <div className="field">
                                <label>Smoking</label>
                                    <select className="ui fluid dropdown" onChange={this.handleText} name="smokes" value={this.state.smokes}>
                                        <option value="">Please answer</option>
                                        <option value="Often">Often</option>
                                        <option value="Sometimes">Sometimes</option>
                                        <option value="Rarely">Rarely</option>
                                        <option value="Trying to quit">Trying to quit</option>
                                        <option value="Never">Never</option>
                                        <option value="Prefer not to say">Prefer not to say</option>
                                    </select>
                            </div>
                            <div className="field">
                                <label>4/20 Friendly</label>
                                    <select className="ui fluid dropdown" onChange={this.handleText} name="weed" value={this.state.weed}>
                                        <option value="">Please answer</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                            </div>
                            <div className="field">
                                <label>Other drugs</label>
                                    <select className="ui fluid dropdown" onChange={this.handleText} name="drugs" value={this.state.drugs}>
                                        <option value="">Please answer</option>
                                        <option value="Often">Often</option>
                                        <option value="Socially">Socially</option>
                                        <option value="Sometimes">Sometimes</option>
                                        <option value="Rarely">Rarely</option>
                                        <option value="Never">Never</option>
                                        <option value="Prefer not to say">Prefer not to say</option>
                                    </select>
                            </div>
                            <input className="ui teal button right floated" type="submit" value="Next Page" ></input>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                        </form>
                </div>
            </div>
        )}
//second page ends here, third page starts
    else if (this.state.page === 3) { 
    return  (  
        <div className="ui container grid">
            <div className="ui row">
                <form className="ui form" 
                onSubmit={(e) => this.userPageThreeInfo(this.props.user, e)}>
                    <br></br>
                    <h2 className="ui dividing header tealFont">More about me!</h2>
                        <div className="field">
                            <div className="field">
                                <label>Are you a morning or night person? </label>
                                <select className="ui fluid dropdown" onChange={this.handleText} name="morning_night" value={this.state.morning_night}>
                                    <option value="">Please answer</option>
                                    <option value="Morning person">Morning person</option>
                                    <option value="Night owl">Night owl</option>
                                    <option value="It depends on the day">It depends on the day</option>
                                </select>
                        </div>
                    </div>
                    <div className="field">
                            <div className="field">
                                <label>How do you usually dress? </label>
                                <select className="ui fluid dropdown" onChange={this.handleText} name="dress_style" value={this.state.dress_style}>
                                    <option value="">Please answer</option>
                                    <option value="Casual and comfortable, nothing too exciting">Casual and comfortable, nothing too exciting</option>
                                    <option value="Bold, I like to stand out">Bold, I like to stand out</option>
                                    <option value="It depends on the day">It depends on the day</option>
                                </select>
                        </div>
                    </div>
                    <div className="field">
                            <div className="field">
                                <label>Do you prefer summer or winter?</label>
                                <select className="ui fluid dropdown" onChange={this.handleText} name="summer_winter" value={this.state.summer_winter}>
                                    <option value="">Please answer</option>
                                    <option value="Summer">Summer</option>
                                    <option value="Winter">Winter</option>
                                    <option value="Both">Both</option>
                                    <option value="Neither">Neither</option>
                                </select>
                            </div>
                    </div>
                    <div className="field">
                            <div className="field">
                                <label>Where would you prefer to live? </label>
                                <select className="ui fluid dropdown" onChange={this.handleText} name="city_country_suburbs" value={this.state.city_country_suburbs}>
                                    <option value="">Please answer</option>
                                    <option value="City">City</option>
                                    <option value="Country">Country</option>
                                    <option value="Suburbs">Suburbs</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                    </div>
                    <div className="field">
                            <div className="field">
                                <label>Beach or mountain?</label>
                                <select className="ui fluid dropdown" onChange={this.handleText} name="beach_mountain" value={this.state.beach_mountain}>
                                    <option value="">Please answer</option>
                                    <option value="Beach">Beach</option>
                                    <option value="Mountain">Mountain</option>
                                    <option value="Depends on the day">Depends on the day</option>
                                    <option value="Neither">Neither</option>
                                </select>
                            </div>
                    </div>
                    <div className="field">
                            <div className="field">
                                <label>What is your love language? </label>
                                <select className="ui fluid dropdown" onChange={this.handleText} name="love_language" value={this.state.love_language}>
                                    <option value="">Please answer</option>
                                    <option value="Acts of Service">Acts of Service</option>
                                    <option value="Physical Touch">Physical Touch</option>
                                    <option value="Quality Time">Quality Time</option>
                                    <option value="Receiving Gifts">Receiving Gifts</option>
                                    <option value="Words of Affirmation">Words of Affirmation</option>
                                    <option value="Not sure">Not sure</option>
                                </select>
                                <a href='https://www.5lovelanguages.com/quizzes/' target="_blank" rel="noopener noreferrer">Take the quiz here</a> 
                            </div>
                    </div>
                    <div className="field">
                            <div className="field">
                                <label>What is your personality type?</label>
                                <select className="ui fluid dropdown" onChange={this.handleText} name="extrovert_introvert" value={this.state.extrovert_introvert}>
                                    <option value="">Please answer</option>
                                    <option value="ENFJ">ENFJ</option>
                                    <option value="ENFP">ENFP</option>
                                    <option value="ENTJ">ENTJ</option>
                                    <option value="ENTP">ENTP</option>
                                    <option value="ESFJ">ESFJ</option>
                                    <option value="ESFP">ESFP</option>
                                    <option value="ESTJ">ESTJ</option>
                                    <option value="ESTP">ESTP</option>
                                    <option value="INFJ">INFJ</option>
                                    <option value="INFP">INFP</option>
                                    <option value="INTJ">INTJ</option>
                                    <option value="INTP">INTP</option>
                                    <option value="ISFJ">ISFJ</option>
                                    <option value="ISFP">ISFP</option>
                                    <option value="ISTJ">ISTJ</option>
                                    <option value="ISTP">ISTP</option>
                                    <option value="Not sure">Not sure</option>
                                </select>
                                <a href='https://www.truity.com/test/type-finder-personality-test-new' target="_blank" rel="noopener noreferrer">Take the quiz here</a> 
                            </div>
                    </div>
                    <div className="field">
                            <div className="field">
                                <label>Can you play any instruments?</label>
                                <select className="ui fluid dropdown" onChange={this.handleText} name="play_instrument" value={this.state.play_instrument}>
                                    <option value="">Please answer</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                    </div>
                    <div className="field">
                            <div className="field">
                                <label>Describe your ideal Friday night</label>
                                <select className="ui fluid dropdown" onChange={this.handleText} name="ideal_friday" value={this.state.ideal_friday}>
                                    <option value="">Please answer</option>
                                    <option value="Going out to a bar">Going out to a bar</option>
                                    <option value="Staying in to watch a movie">Staying in to watch a movie</option>
                                    <option value="Dinner party">Dinner party</option>
                                    <option value="Go out dancing">Go out dancing</option>
                                    <option value="Spend time with family">Spend time with family</option>
                                    <option value="Curling up with a good book">Curling up with a good book</option>
                                    <option value="Going to a concert">Going to a concert</option>
                                    <option value="Trying a new restaurant">Trying a new restaurant</option>
                                    <option value="Game night">Game night</option>
                                </select>
                            </div> 
                            </div> 
                        <input className="ui teal button right floated" type="submit" value="Next Page"/>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                </form>
            </div>
            </div>
        )}
//third page ends here, fourth page starts 
    else if (this.state.page === 4) { 
        return  (  
        <div className="ui container grid">
            <div className="ui row">
                <form className="ui form" onSubmit={(e) => this.userPageFourInfo(this.props.user, e)}> 
                    <br></br>
                    <h2 className="ui dividing header tealFont">More about me!</h2>
                        <div className="field"></div>
                    <div className="field">
                            <div className="field">
                                <label>Would you rather spend your night in or out?</label>
                                <select className="ui fluid dropdown" onChange={this.handleText} name="night_out_in" value={this.state.night_out_in}>
                                    <option value="">Please answer</option>
                                    <option value="Going Out">Going Out</option>
                                    <option value="Staying In">Staying In</option>
                                    <option value="A little of both">A little of both</option>
                                    <option value="Depends on my mood">Depends on my mood</option>
                                </select>
                            </div>
                    </div>
                    <div className="field">
                            <div className="field">
                                <label> Describe your planning style</label>
                                <select className="ui fluid dropdown" onChange={this.handleText} name="general_planning" value={this.state.general_planning}>
                                    <option value="">Please answer</option>
                                    <option value="I’m definitely more of a planner">I’m definitely more of a planner</option>
                                    <option value="I just let things work themselves out, I like to be spontaneous">I just let things work themselves out, I like to be spontaneous</option>
                                    <option value="I can plan if I'm in the right mood">I can plan if I'm in the right mood</option>
                                </select>
                            </div>
                    </div>
                    <div className="field">
                            <div className="field">
                                <label> How would you plan for a vacation?</label>
                                <select className="ui fluid dropdown" onChange={this.handleText} name="vacation_planning" value={this.state.vacation_planning}>
                                    <option value="">Please answer</option>
                                    <option value="As little as possible, I want to pack and go">As little as possible, I want to pack and go</option>
                                    <option value="I plan them far in advance and schedule everything">I plan them far in advance and schedule everything</option>
                                    <option value="I arrange the destination and dates, but leave the schedule pretty open">I arrange the destination and dates, but leave the schedule pretty open</option>
                                </select>
                            </div>
                    </div>
                    <div className="field">
                            <div className="field">
                                <label> Cats or dogs?</label>
                                <select className="ui fluid dropdown" onChange={this.handleText} name="cat_dog" value={this.state.cat_dog}>
                                    <option value="">Please answer</option>
                                    <option value="Cat">Cat</option>
                                    <option value="Dog">Dog</option>
                                    <option value="Both">Both</option>
                                    <option value="Neither">Neither</option>
                                </select>
                            </div>
                    </div>
                    <div className="field">
                            <div className="field">
                                <label> Coffee or tea?</label>
                                <select className="ui fluid dropdown" onChange={this.handleText} name="coffee_tea" value={this.state.coffee_tea}>
                                    <option value="">Please answer</option>
                                    <option value="Coffee">Coffee</option>
                                    <option value="Tea">Tea</option>
                                    <option value="Both">Both</option>
                                    <option value="Neither">Neither</option>
                                </select>
                            </div>
                    </div>
                    <div className="field">
                            <div className="field">
                                <label>Would you describe yourself as messy or neat?</label>
                                <select className="ui fluid dropdown" onChange={this.handleText} name="messy_neat" value={this.state.messy_neat}>
                                    <option value="">Please answer</option>
                                    <option value="Messy">Messy</option>
                                    <option value="Neat">Neat</option>
                                    <option value="Somewhere in the middle">Somewhere in the middle</option>
                                </select>
                            </div>
                    </div>
                    <div className="field">
                            <div className="field">
                                <label> What is your favorite type of music?</label>
                                <select className="ui fluid dropdown" onChange={this.handleText} name="music" value={this.state.music}>
                                    <option value="">Please answer</option>
                                    <option value="Musicals">Musicals</option>
                                    <option value="Opera">Opera</option>
                                    <option value="Orchestral music">Orchestral music</option>
                                    <option value="Folk music">Folk music</option>
                                    <option value="Easy Listening">Easy Listening</option>
                                    <option value="Spiritual">Spiritual</option>
                                    <option value="World music">World music</option>
                                    <option value="Jazz">Jazz</option>
                                    <option value="Rock">Rock</option>
                                    <option value="Metal/Hard Rock">Metal/Hard Rock</option>
                                    <option value="Reggae">Reggae</option>
                                    <option value="Rap">Rap</option>
                                    <option value="Dance">Dance</option>
                                    <option value="House">House</option>
                                    <option value="Blues">Blues</option>
                                    <option value="Hip Hop">Hip Hop</option>
                                    <option value="Pop">Pop</option>
                                    <option value="Alternative">Alternative</option>
                                    <option value="Country">Country</option>
                                    <option value="Electro">Electro</option>
                                    <option value="Gospel">Gospel</option>
                                    <option value="Latin">Latin</option>
                                    <option value="R&B">R&B</option>
                                    <option value="Funk">Funk</option>
                                    <option value="Soul">Soul</option>
                                    <option value="Classical">Classical</option>
                                </select>
                            </div>
                    </div>
                    <div className="field">
                            <div className="field">
                                <label> Describe your ideal vacation</label>
                                <select className="ui fluid dropdown" onChange={this.handleText} name="vacation_type" value={this.state.vacation_type}>
                                    <option value="">Please answer</option>
                                    <option value="Beach">Beach</option>
                                    <option value="Educational tour">Educational tour</option>
                                    <option value="Cruise">Cruise</option>
                                    <option value="Resort">Resort</option>
                                    <option value="Staycation">Staycation</option>
                                    <option value="City trip">City trip</option>
                                    <option value="Lazy vacation">Lazy vacation</option>
                                    <option value="Camping">Camping</option>
                                    <option value="Adventure vacation">Adventure vacation</option>
                                    <option value="Hiking">Hiking</option>
                                    <option value="Spa vacation">Spa vacation</option>
                                    <option value="Group travel">Group travel</option>
                                    <option value="Food tour">Food tour</option>
                                </select>
                            </div>
                    </div>     
                     <button className="ui teal button right floated" type="submit">
                    Submit Profile
                </button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                </form>
            </div>
        </div>        
    )}  
  }
}

const mapStateToProps = state => {
    console.log("Profile form state", state)
    return { currentUser: state.currentUser};
}

export default connect(mapStateToProps, {loggedIn})(ProfileForm);
