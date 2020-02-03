import React from 'react';
import { newUser } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ProfileForm extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
        // console.log("name:", this.state.name)
        // console.log("age:", this.state.age)
      }
    
    state = {
        firstPartComplete: false,
        secondPartComplete: false,
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
        myProfile: []
    }

    goToSecondPage = () => {
        this.setState({
            firstPartComplete: true
        })
      }

      goToThirdPage = () => {
        this.setState({
            secondPartComplete: true
        })
      }

      handleText = (e) => {
        // console.log("handle name", e.target.name)
        // console.log("handle value", e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        }
        )}

      handleSubmit = (e, user) => {
        // console.log("handle submit")  
        // console.log("e",e)  
        // console.log("user",user)  
        e.preventDefault()
          this.props.newUser(user)
          this.props.history.push('/myprofile')
      }

  render() {

    // console.log("my profile props", this.props)
    // console.log("new user", this.state)

      if (this.state.firstPartComplete === false) {
        return (
        <div className="ui container grid">
            <div className="ui row">
                <form className="ui form">
                    <h4 className="ui dividing header">Basic Information</h4>
                        <div className="field">
                            <div className="two fields">
                                <div className="field">
                                 <input onChange={this.handleText} type="text" name="name" placeholder="First Name" value={this.state.name}></input>
                                </div>
                                <div className="field">
                                 <input type="text" name="age" placeholder="Age" value={this.state.age} onChange={this.handleText}></input>
                                </div>
                                <select className="ui fluid dropdown" name="gender" onChange={this.handleText} value={this.state.gender}>
                                <option value="">Gender</option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                                </select>
                            </div>
                        </div>
                        <div className="field">
                         <label>Contact Information</label>
                            <div className="fields">
                                <div className="ten wide field">
                                    <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleText}></input>
                                </div>
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
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                                </select>
                            </div>
                    </div>
                <div className="field">
                    <br></br>
                <h4 className="ui dividing header">Choose An Avatar!</h4>
                            <div className="fields">
                            <div className="eight wide field">
                                <input type="text" name="avatar" placeholder="Paste URL Here" value={this.state.avatar} onChange={this.handleText}></input>
                            </div>
                            </div>
                </div>

                <button className="ui basic button right floated" onClick={this.goToSecondPage}>
                    Next Page
                </button>
                </form>
            </div>
        </div>
        )
    } else if (this.state.firstPartComplete === true && this.state.secondPartComplete === false) 
    //second page starts here
        { return (
            <div className="ui container grid">
                <div className="ui row">
                    <form className="ui form">
                        <h4 className="ui dividing header">About Me</h4>
                            <div className="field">
                                <label>What I'm Looking For: </label>
                                <div className="fields">
                                <div className="field">
                                    <select className="ui fluid dropdown" name="relationship_type" onChange={this.handleText} value={this.state.relationship_type}>
                                        <option value="">Please answer</option>
                                        <option value="Business/Networking">Business/Networking</option>
                                        <option value="Companion">Companion</option>
                                        <option value="Dating">Dating</option>
                                        <option value="Friendship">Friendship</option>
                                        <option value="Hookups">Hookups</option>
                                        <option value="Long-Term Relationshp">Long-Term Relationshp</option>
                                        <option value="Marriage">Marriage</option>
                                        <option value="Not Sure">Not Sure</option>
                                        <option value="Unspecified">Unspecified</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                            <div className="field">
                                <label>The religion I most strongly identify with is: </label>
                                <div className="fields">
                                <div className="field">
                                    <select className="ui fluid dropdown" onChange={this.handleText} name="religion" value={this.state.religion}>
                                        <option value="">Please answer</option>
                                        <option value="Agnostic">Agnostic</option>
                                        <option value="Atheist">Atheist</option>
                                        <option value="Buddhist">Buddhist</option>
                                        <option value="Catholic">Catholic</option>
                                        <option value="Christian">Christian</option>
                                        <option value="Hindu">Hindu</option>
                                        <option value="Jewish">Jewish</option>
                                        <option value="Other">Other</option>
                                        <option value="Spiritual">Spiritual</option>
                                        <option value="Prefer Not to Say">Prefer Not to Say</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                            <div className="field">
                                <label>Politically, my views are: </label>
                                <div className="fields">
                                <div className="field">
                                    <select className="ui fluid dropdown" onChange={this.handleText} name="politics" value={this.state.politics}>
                                        <option value="">Please answer</option>
                                        <option value="Conservative">Conservative</option>
                                        <option value="Liberal">Liberal</option>
                                        <option value="Moderate">Moderate</option>
                                        <option value="Other">Other</option>
                                        <option value="Prefer Not to Say">Prefer Not to Say</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                            <div className="field">
                                <label>My highest level of education attained is: </label>
                                <div className="fields">
                                <div className="field">
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
                                </div>
                            </div>
                            <div className="field">
                                <label>Which college(s) did you attend?</label>
                                <div className="field">
                                    <input type="text" name="college" placeholder="College Name" value={this.state.college} onChange={this.handleText}></input>
                                </div>
                            </div>
                            <div className="field">
                                <label>My type of employment is: </label>
                                <div className="fields">
                                <div className="field">
                                    <select className="ui fluid dropdown" onChange={this.handleText} name="occupation" value={this.state.occupation}>
                                        <option value="">Please answer</option>
                                        <option value="Employed Full-Time">Employed Full-Time</option>
                                        <option value="Employed Part-Time">Employed Part-Time</option>
                                        <option value="Student">Student</option>
                                        <option value="Unemployed">Unemployed</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                            <div className="field">
                                <label>My diet is: </label>
                                <div className="fields">
                                <div className="field">
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
                                </div>
                            </div>
                            <div className="field">
                                <label>Any children: </label>
                                <div className="fields">
                                <div className="field">
                                    <select className="ui fluid dropdown" onChange={this.handleText} name="kids" value={this.state.kids}>
                                        <option value="">Please answer</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                            <div className="field">
                                <label>Any pets owned: </label>
                                <div className="fields">
                                <div className="field">
                                    <select className="ui fluid dropdown" onChange={this.handleText} name="have_pets" value={this.state.have_pets}>
                                        <option value="">Please answer</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="Not right now, maybe in the future">Not right now, maybe in the future</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                            <h4 className="ui dividing header">My Habits</h4>
                            <div className="field">
                                <label>Drinking: </label>
                                <div className="fields">
                                <div className="field">
                                    <select className="ui fluid dropdown" onChange={this.handleText} name="drinks" value={this.state.drinks}>
                                        <option value="">Please answer</option>
                                        <option value="A few times a week">A few times a week</option>
                                        <option value="Socially">Socially</option>
                                        <option value="Rarely">Rarely</option>
                                        <option value="Never">Never</option>
                                        <option value="Prefer Not to Say">Prefer Not to Say</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                            <div className="field">
                                <label>Smoking: </label>
                                <div className="fields">
                                <div className="field">
                                    <select className="ui fluid dropdown" onChange={this.handleText} name="smokes" value={this.state.smokes}>
                                        <option value="">Please answer</option>
                                        <option value="Often">Often</option>
                                        <option value="Sometimes">Sometimes</option>
                                        <option value="Trying to quit">Trying to quit</option>
                                        <option value="Never">Never</option>
                                        <option value="Prefer Not to Say">Prefer Not to Say</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                            <div className="field">
                                <label>4/20 Friendly: </label>
                                <div className="fields">
                                <div className="field">
                                    <select className="ui fluid dropdown" onChange={this.handleText} name="weed" value={this.state.weed}>
                                        <option value="">Please answer</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                            <div className="field">
                                <label>Other drugs: </label>
                                <div className="fields">
                                <div className="field">
                                    <select className="ui fluid dropdown" onChange={this.handleText} name="drugs" value={this.state.drugs}>
                                        <option value="">Please answer</option>
                                        <option value="Often">Often</option>
                                        <option value="Socially">Socially</option>
                                        <option value="Never">Never</option>
                                        <option value="Prefer Not to Say">Prefer Not to Say</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                            

                        <button className="ui basic button right floated" onClick={this.goToThirdPage}>
                            Next Page
                        </button>
                    </form>
                </div>
            </div>
        )}

//second page ends here, third page starts

    else if (this.state.firstPartComplete === true && this.state.secondPartComplete === true) 
    { return  (  
       
        <div className="ui container grid">
            <div className="ui row">
                <form className="ui form">
                    <h4 className="ui dividing header">More About Me!</h4>
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
                                <label>Do do you prefer summer or winter?</label>
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
                                <label>Where would you most like to live? </label>
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
                                <label>What's your love language? </label>
                                <select className="ui fluid dropdown" onChange={this.handleText} name="love_language" value={this.state.love_language}>
                                    <option value="">Please answer</option>
                                    <option value="Acts of Service">Acts of Service</option>
                                    <option value="Physical Touch">Physical Touch</option>
                                    <option value="Quality Time">Quality Time</option>
                                    <option value="Receiving Gifts">Receiving Gifts</option>
                                    <option value="Words of Affirmation">Words of Affirmation</option>
                                    <option value="Not Sure">Not Sure</option>
                                </select>
                                <a href='https://www.5lovelanguages.com/quizzes/' target="_blank">Take the quiz here</a> 
                            </div>
                    </div>
                    <div className="field">
                            <div className="field">
                                <label>Are you an extrovert or an introvert?</label>
                                <select className="ui fluid dropdown" onChange={this.handleText} name="extrovert_introvert" value={this.state.extrovert_introvert}>
                                    <option value="">Please answer</option>
                                    <option value="A little of both">A little of both</option>
                                    <option value="Extrovert">Extrovert</option>
                                    <option value="Introvert">Introvert</option>
                                    <option value="Somewhere in the middle">Somewhere in the middle</option>
                                </select>
                            </div>
                    </div>
                    <div className="field">
                            <div className="field">
                                <label>Do you play any instruments?</label>
                                <select className="ui fluid dropdown" onChange={this.handleText} name="play_instrument" value={this.state.play_instrument}>
                                    <option value="">Please answer</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                    </div>
                    <div className="field">
                            <div className="field">
                                <label>What's your ideal Friday night?</label>
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
                                <label> What's your planning style like?</label>
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
                                <label> Are you a cat person or a dog person?</label>
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
                                <label> Do you prefer coffee or tea?</label>
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
                                <label> What's your favorite type of music?</label>
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
                                <label> What's your ideal type of vacation?</label>
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
                    {/* <Link to='/myprofile'> */}
                        <div className="ui submit button right floated" onClick={(e) => this.handleSubmit(e,this.state)}>Submit</div>
                        {/* </Link> */}
                </form>
            </div>
        </div>        
    )}  
  }
}

const mapStateToProps = state => {
    console.log("state", state)
    return  { newUser: state.newUser};
  }

  const mapDispatchToProps = dispatch => {
    return  {
        newUser: (user) => dispatch(newUser(user))
    };
  }

//   export default ProfileForm;
  export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
