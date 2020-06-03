import React from 'react';
import { connect } from 'react-redux';
import { loggedIn } from '../actions';

class EditMoreAboutMe extends React.Component {

    state = {
        profileInfo: this.props.currentUser,
        morning_night: this.props.currentUser.morning_night,
        dress_style: this.props.currentUser.dress_style,
        summer_winter: this.props.currentUser.summer_winter,
        city_country_suburbs: this.props.currentUser.city_country_suburbs,
        beach_mountain: this.props.currentUser.beach_mountain,
        love_language: this.props.currentUser.love_language,
        extrovert_introvert: this.props.currentUser.extrovert_introvert,
        play_instrument: this.props.currentUser.play_instrument,
        ideal_friday: this.props.currentUser.ideal_friday,
        messy_neat: this.props.currentUser.messy_neat,
        general_planning: this.props.currentUser.general_planning,
        vacation_planning: this.props.currentUser.vacation_planning,
        vacation_type: this.props.currentUser.vacation_type,
        cat_dog: this.props.currentUser.cat_dog,
        coffee_tea: this.props.currentUser.coffee_tea,
        night_out_in: this.props.currentUser.night_out_in,
        music: this.props.currentUser.music
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        if (this.props.currentUser){
          fetch(`https://blind-date-backend.herokuapp.com/api/v1/users/${this.props.currentUser.id}`)
            .then(response => response.json())
            .then(response => this.setState({ profileInfo: response}))
        } else {return null}
    }

    reload = () => {
        window.location.reload();
    }

    handleSubmit = (user, e) => {
        e.preventDefault()
        fetch(`https://blind-date-backend.herokuapp.com/api/v1/users/${user}`,{
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            },
            body: JSON.stringify({
            gender: this.state.gender,
            morning_night: this.state.morning_night,
            dress_style: this.state.dress_style,
            summer_winter: this.state.summer_winter,
            city_country_suburbs: this.state.city_country_suburbs,
            beach_mountain: this.state.beach_mountain,
            love_language: this.state.love_language,
            extrovert_introvert: this.state.extrovert_introvert,
            play_instrument: this.state.play_instrument,
            ideal_friday: this.state.ideal_friday,
            messy_neat: this.state.messy_neat,
            general_planning: this.state.general_planning,
            vacation_planning: this.state.vacation_planning,
            vacation_type: this.state.vacation_type,
            cat_dog: this.state.cat_dog,
            coffee_tea: this.state.coffee_tea,
            night_out_in: this.state.night_out_in,
            music: this.state.music
            })
        }) .then(response => response.json())
        .then(response => console.log(response))
    }

    handleText = e => {
        this.setState({
            [e.target.name]: e.target.value
          }, console.log(e.target.value)
          )
    }

    render() {
        let props = this.props.currentUser
        return (
            <div>
                <br></br>
                <div className="ui container grid">
                <div className="ui row">
                <form className="ui form" onSubmit={(e) => this.handleSubmit(props.id, e)}>
                <h2 className="grayFont centerText">More about me</h2>
                    <br></br>
                    <b>Are you a morning or night person?</b>
                    <select className="ui fluid dropdown" onChange={this.handleText} name="morning_night" value={this.state.morning_night}>
                        <option value="">Please answer</option>
                        <option value="Morning person">Morning person</option>
                        <option value="Night owl">Night owl</option>
                        <option value="It depends on the day">It depends on the day</option>
                    </select>
                    <br></br>
                    <br></br>
                    <b>How do you usually dress?</b>
                    <select className="ui fluid dropdown" onChange={this.handleText} name="dress_style" value={this.state.dress_style}>
                        <option value="">Please answer</option>
                        <option value="Casual and comfortable, nothing too exciting">Casual and comfortable, nothing too exciting</option>
                        <option value="Bold, I like to stand out">Bold, I like to stand out</option>
                        <option value="It depends on the day">It depends on the day</option>
                    </select>
                    <br></br>
                    <br></br>
                    <b>Do you prefer summer or winter?</b>
                    <select className="ui fluid dropdown" onChange={this.handleText} name="summer_winter" value={this.state.summer_winter}>
                        <option value="">Please answer</option>
                        <option value="Summer">Summer</option>
                        <option value="Winter">Winter</option>
                        <option value="Both">Both</option>
                        <option value="Neither">Neither</option>
                    </select>
                    <br></br>
                    <br></br>
                    <b>Where would you prefer to live?</b>
                    <select className="ui fluid dropdown" onChange={this.handleText} name="city_country_suburbs" value={this.state.city_country_suburbs}>
                        <option value="">Please answer</option>
                        <option value="City">City</option>
                        <option value="Country">Country</option>
                        <option value="Suburbs">Suburbs</option>
                        <option value="Other">Other</option>
                    </select>
                    <br></br>
                    <br></br>
                    <b>Beach or mountain?</b>
                    <select className="ui fluid dropdown" onChange={this.handleText} name="beach_mountain" value={this.state.beach_mountain}>
                        <option value="">Please answer</option>
                        <option value="Beach">Beach</option>
                        <option value="Mountain">Mountain</option>
                        <option value="Depends on the day">Depends on the day</option>
                        <option value="Neither">Neither</option>
                    </select>
                    <br></br>
                    <br></br>
                    <b>What is your love language?</b>
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
                    <br></br>
                    <br></br>
                    <b>What is your personality type?</b>
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
                    <br></br>
                    <br></br> 
                    <b>Can you play any instruments?</b>
                    <select className="ui fluid dropdown" onChange={this.handleText} name="play_instrument" value={this.state.play_instrument}>
                        <option value="">Please answer</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <br></br>
                    <br></br>
                    <b>Describe your ideal Friday night</b>
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
                    <br></br>
                    <br></br>
                    <b>Would you rather spend your night in or out?</b>
                    <select className="ui fluid dropdown" onChange={this.handleText} name="night_out_in" value={this.state.night_out_in}>
                        <option value="">Please answer</option>
                        <option value="Going Out">Going Out</option>
                        <option value="Staying In">Staying In</option>
                        <option value="A little of both">A little of both</option>
                        <option value="Depends on my mood">Depends on my mood</option>
                    </select>
                    <br></br>
                    <br></br>
                    <b>Describe your planning style</b>
                    <select className="ui fluid dropdown" onChange={this.handleText} name="general_planning" value={this.state.general_planning}>
                        <option value="">Please answer</option>
                        <option value="I’m definitely more of a planner">I’m definitely more of a planner</option>
                        <option value="I just let things work themselves out, I like to be spontaneous">I just let things work themselves out, I like to be spontaneous</option>
                        <option value="I can plan if I'm in the right mood">I can plan if I'm in the right mood</option>
                    </select>
                    <br></br>
                    <br></br>
                    <b>How would you plan for a vacation?</b>
                    <select className="ui fluid dropdown" onChange={this.handleText} name="vacation_planning" value={this.state.vacation_planning}>
                        <option value="">Please answer</option>
                        <option value="As little as possible, I want to pack and go">As little as possible, I want to pack and go</option>
                        <option value="I plan them far in advance and schedule everything">I plan them far in advance and schedule everything</option>
                        <option value="I arrange the destination and dates, but leave the schedule pretty open">I arrange the destination and dates, but leave the schedule pretty open</option>
                    </select>
                    <br></br>
                    <br></br>
                    <b>Cats or dogs?</b>
                    <select className="ui fluid dropdown" onChange={this.handleText} name="cat_dog" value={this.state.cat_dog}>
                        <option value="">Please answer</option>
                        <option value="Cat">Cat</option>
                        <option value="Dog">Dog</option>
                        <option value="Both">Both</option>
                        <option value="Neither">Neither</option>
                    </select>
                    <br></br>
                    <br></br>
                    <b>Coffee or tea?</b>
                    <select className="ui fluid dropdown" onChange={this.handleText} name="coffee_tea" value={this.state.coffee_tea}>
                        <option value="">Please answer</option>
                        <option value="Coffee">Coffee</option>
                        <option value="Tea">Tea</option>
                        <option value="Both">Both</option>
                        <option value="Neither">Neither</option>
                    </select>
                    <br></br>
                    <br></br>
                    <b>Would you describe yourself as messy or neat?</b>
                    <select className="ui fluid dropdown" onChange={this.handleText} name="messy_neat" value={this.state.messy_neat}>
                        <option value="">Please answer</option>
                        <option value="Messy">Messy</option>
                        <option value="Neat">Neat</option>
                        <option value="Somewhere in the middle">Somewhere in the middle</option>
                    </select>
                    <br></br>
                    <br></br>
                    <b>What is your favorite type of music?</b>
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
                    <br></br>
                    <br></br>
                    <b>Describe your ideal vacation</b>
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
                    <br></br>
                    <br></br>
                     <input className="ui basic teal button left floated" type="button" value="Go Back" onClick={this.reload}/>
                     <input className="ui teal button right floated" type="submit" value="Save Changes" onClick={this.reload}/>
                </form>
                </div>
                <br></br>
                <br></br>
                </div> 
                <br></br>
                <br></br>
                <br></br>
            </div>
        )
    }
}

    const mapStateToProps = state => {
    console.log("edit profile state", state)
    return { currentUser: state.currentUser,
             profiles: state.profiles
             };
  }

export default connect(mapStateToProps, {loggedIn})(EditMoreAboutMe);
