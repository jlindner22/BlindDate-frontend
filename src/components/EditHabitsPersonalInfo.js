import React from 'react';
import { connect } from 'react-redux';
import { loggedIn } from '../actions';

class EditHabitsPersonalInfo extends React.Component {

    state = {
        profileInfo: this.props.currentUser,
        smokes: this.props.currentUser.smokes,
        drinks: this.props.currentUser.drinks,
        weed: this.props.currentUser.weed,
        drugs: this.props.currentUser.drugs,
        religion: this.props.currentUser.religion,
        occupation: this.props.currentUser.occupation,
        diet: this.props.currentUser.diet,
        college: this.props.currentUser.college,
        education_level: this.props.currentUser.education_level,
        kids: this.props.currentUser.kids,
        relationship_type: this.props.currentUser.relationship_type,
        politics: this.props.currentUser.politics,
        have_pets: this.props.currentUser.have_pets
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
                <h2 className="grayFont centerText">Habits & Personal Information</h2>
                    <br></br>
                    <br></br>
                    <b>What I'm looking for</b>
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
                    <br></br>
                    <br></br>
                    <b>The religion I most strongly identify with</b>
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
                    <br></br>
                    <br></br>
                    <b>Politically, my views are</b>
                    <select className="ui fluid dropdown" onChange={this.handleText} name="politics" value={this.state.politics}>
                        <option value="">Please answer</option>
                        <option value="Conservative">Conservative</option>
                        <option value="Liberal">Liberal</option>
                        <option value="Moderate">Moderate</option>
                        <option value="Other">Other</option>
                        <option value="Prefer not to say">Prefer not to say</option>
                    </select>                    
                    <br></br>
                    <br></br>
                    <b>My highest level of education attained</b>
                    <select className="ui fluid dropdown" onChange={this.handleText} name="education_level" value={this.state.education_level}>
                        <option value="">Please answer</option>
                        <option value="Some High School">Some High School</option>
                        <option value="High School Diploma/GED">High School Diploma/GED</option>
                        <option value="Some College">Some College</option>
                        <option value="Associate's Degree">Associate's Degree</option>
                        <option value="Bachelor's Degree">Bachelor's Degree</option>
                        <option value="Master's Degree or Higher">Master's Degree or Higher</option>
                    </select>
                    <br></br>
                    <br></br>
                    <b>Name of school(s) I attended</b>
                    <input type="text" name="college" placeholder="College Name" value={this.state.college} onChange={this.handleText}></input>
                    <br></br>
                    <br></br>
                    <br></br>
                    <b>My employment</b>
                    <select className="ui fluid dropdown" onChange={this.handleText} name="occupation" value={this.state.occupation}>
                        <option value="">Please answer</option>
                        <option value="Employed Full-Time">Employed Full-Time</option>
                        <option value="Employed Part-Time">Employed Part-Time</option>
                        <option value="Student">Student</option>
                        <option value="Unemployed">Unemployed</option>
                        <option value="Other">Other</option>
                    </select>
                    <br></br>
                    <br></br>
                    <b>My diet</b>
                    <select className="ui fluid dropdown" onChange={this.handleText} name="diet" value={this.state.diet}>
                        <option value="">Please answer</option>
                        <option value="Gluten-free">Gluten-free</option>
                        <option value="Kosher">Kosher</option>
                        <option value="Nothing special, I'll eat anything">Nothing special, I'll eat anything</option>
                        <option value="Pescatarian">Pescatarian</option>
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="Vegan">Vegan</option>
                    </select>
                    <br></br>
                    <br></br>
                    <b>Any children</b>  <i className="child icon"></i>
                    <select className="ui fluid dropdown" onChange={this.handleText} name="kids" value={this.state.kids}>
                        <option value="">Please answer</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <br></br>
                    <br></br>
                    <b>Any pets owned</b> <i className="paw icon"></i>
                    <select className="ui fluid dropdown" onChange={this.handleText} name="have_pets" value={this.state.have_pets}>
                        <option value="">Please answer</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="Not right now, maybe in the future">Not right now, maybe in the future</option>
                    </select>
                    <br></br>
                    <br></br>
                    <h4 className="ui dividing header grayFont">My Habits</h4>
                    <b>Drinking</b> <i className="glass martini icon"></i>
                    <select className="ui fluid dropdown" onChange={this.handleText} name="drinks" value={this.state.drinks}>
                        <option value="">Please answer</option>
                        <option value="Often">Often</option>
                        <option value="Socially">Socially</option>
                        <option value="Sometimes">Sometimes</option>
                        <option value="Rarely">Rarely</option>
                        <option value="Never">Never</option>
                        <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                    <br></br>
                    <br></br>
                    <b>Smoking</b> <i className="cloud icon"></i>
                    <select className="ui fluid dropdown" onChange={this.handleText} name="smokes" value={this.state.smokes}>
                        <option value="">Please answer</option>
                        <option value="Often">Often</option>
                        <option value="Sometimes">Sometimes</option>
                        <option value="Rarely">Rarely</option>
                        <option value="Trying to quit">Trying to quit</option>
                        <option value="Never">Never</option>
                        <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                    <br></br>
                    <br></br>
                    <b>4/20 Friendly</b> <i className="thumbs up icon"></i>
                    <select className="ui fluid dropdown" onChange={this.handleText} name="weed" value={this.state.weed}>
                        <option value="">Please answer</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <br></br>
                    <br></br>
                    <b>Other drugs</b> <i className="pills icon"></i>
                    <select className="ui fluid dropdown" onChange={this.handleText} name="drugs" value={this.state.drugs}>
                        <option value="">Please answer</option>
                        <option value="Often">Often</option>
                        <option value="Socially">Socially</option>
                        <option value="Sometimes">Sometimes</option>
                        <option value="Rarely">Rarely</option>
                        <option value="Never">Never</option>
                        <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                    <br></br>
                    <br></br>
                     <input className="ui basic teal button left floated" type="button" value="Go Back" onClick={this.reload}/>
                     <input className="ui teal button right floated" type="submit" value="Save Changes" onClick={this.reload}/>
                </form>
                    </div>
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

export default connect(mapStateToProps, {loggedIn})(EditHabitsPersonalInfo);
