import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class FilterForm extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  preferences = this.props.preferences.filter(preference => preference.user_id === this.props.currentUser.id)

  state = {
    gender: 'All',
    minimum_age: 'All',
    maximum_age: 'All',
    city: 'All',
    state: 'All',
    smokes: 'All',
    drinks: 'All',
    weed: 'All',
    drugs: 'All',
    religion: 'All',
    education_level: 'All',
    kids: 'All',
    relationship_type: 'All',
    politics: 'All',
    have_pets: 'All',
    diet: 'All',
    id: ''
  }

    renderPreferences = () => {
        let preferences = this.props.preferences.filter(preference => preference.user_id === this.props.currentUser.id)
        return preferences
    }

    renderFilterContainer = () => {
      this.props.history.push('/filters')
    }

    render() {
    console.log("filter form props", this.props)
    if (this.props.preferences.filter(preference => preference.user_id === this.props.currentUser.id).length > 0) {
      return (this.props.preferences && this.renderPreferences(this.props.preferences).map(preference => { 
        return (
            <div className="ui container grid">
                <div className="ui row">
                <div className="column eight wide">
                   <h1>Select your Preferences</h1> 
              <br></br>
              <b>Gender:</b>
              <select className="ui fluid dropdown" name="gender" onChange={this.props.genderChange} value={this.props.gender} >
                  <option defaultChecked value ="All">All</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </select>
                <br></br>
              <b>Minimum Age: </b>
              <input type="text" name="minimum_age" placeholder="Minimum Age" value={this.props.minimum_age} onChange={this.props.minRangeChange}></input>        
                <br></br>
                <b>Maximum Age: </b>
                <input type="text" name="maximum_age" placeholder="Maximum Age" value={this.props.maximum_age} onChange={this.props.maxRangeChange}></input>
                  <br></br>                 
                  <br></br>
                  <b>State:</b>
              <select className="ui fluid dropdown" name="state" onChange={this.props.stateChange} value={this.props.state}>
                  <option value="All">All</option>
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
                <br></br>
                <b>Religion:</b>
                <select className="ui fluid dropdown" name="religion" onChange={this.props.religionChange} value={this.props.religion}>
                  <option value="All">All</option>
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
                  <br></br>
                  <b>Education level:</b>
              <select className="ui fluid dropdown" name="education_level" onChange={this.props.educationLevelChange} value={this.props.education_level}>
                  <option value="All">All</option>
                  <option value="Some High School">Some High School</option>
                  <option value="High School Diploma/GED">High School Diploma/GED</option>
                  <option value="Some College">Some College</option>
                  <option value="Associate's Degree">Associate's Degree</option>
                  <option value="Bachelor's Degree">Bachelor's Degree</option>
                  <option value="Master's Degree or Higher">Master's Degree or Higher</option>
                </select>
                <br></br>
                <b>Parent:</b>
                <select className="ui fluid dropdown" name="kids" onChange={this.props.kidsChange} value={this.props.kids}>
                  <option value="All">All</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  </select>
                  <br></br>
                  <b>Relationship Type:</b>
              <select className="ui fluid dropdown" name="relationship_type" onChange={this.props.relationshipTypeChange} value={this.props.relationship_type}>
                  <option value="All">All</option>
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
                <br></br>
                <b>Political Views:</b>
                <select className="ui fluid dropdown" name="politics" onChange={this.props.politicsChange} value={this.props.politics}>
                  <option value="All">All</option>
                  <option value="Conservative">Conservative</option>
                  <option value="Liberal">Liberal</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Other">Other</option>
                  <option value="Prefer Not to Say">Prefer Not to Say</option>
                  </select>
                  <br></br>
                  <b>Owns pets:</b>
                <select className="ui fluid dropdown" name="have_pets" onChange={this.props.havePetsChange} value={this.props.have_pets}>
                  <option value="All">All</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Not right now, maybe in the future">Not right now, maybe in the future</option>
                </select>
                <br></br>
                <b>Diet:</b>
                <select className="ui fluid dropdown" name="diet" onChange={this.props.dietChange} value={this.props.diet}>
                  <option value="All">All</option>
                  <option value="Gluten-free">Gluten-free</option>
                  <option value="Kosher">Kosher</option>
                  <option value="Nothing special, I'll eat anything">Nothing special, I'll eat anything</option>
                  <option value="Pescatarian">Pescatarian</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Vegan">Vegan</option>
                  </select>
                  <br></br>
                  <b>Smoking:</b>
                <select className="ui fluid dropdown" name="smokes" onChange={this.props.smokesChange} value={this.props.smokes}>
                  <option value="All">All</option>
                  <option value="Often">Often</option>
                  <option value="Sometimes">Sometimes</option>
                  <option value="Trying to quit">Trying to quit</option>
                  <option value="Never">Never</option>
                  <option value="Prefer Not to Say">Prefer Not to Say</option>
                  </select>
                  <br></br>
                  <b>Drinking:</b>
                <select className="ui fluid dropdown" name="drinks" onChange={this.props.drinksChange} value={this.props.drinks}>
                  <option value="All">All</option>
                  <option value="A few times a week">A few times a week</option>
                  <option value="Socially">Socially</option>
                  <option value="Rarely">Rarely</option>
                  <option value="Never">Never</option>
                  <option value="Prefer Not to Say">Prefer Not to Say</option>
                  </select>
                  <br></br>
                  <b>4/20 Friendly:</b>
                <select className="ui fluid dropdown" name="weed" onChange={this.props.weedChange} value={this.props.weed}>
                  <option value="All">All</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  </select>
                  <br></br>
               <b>Other Drugs:</b>
                <select className="ui fluid dropdown" name="drugs" onChange={this.props.drugsChange} value={this.props.drugs}>
                  <option value="All">All</option>
                  <option value="Often">Often</option>
                  <option value="Socially">Socially</option>
                  <option value="Never">Never</option>
                  <option value="Prefer Not to Say">Prefer Not to Say</option>
                  </select>
                    <br></br>
                    <br></br>
                 <button className="ui pink button right floated" type="submit" onClick={()=> this.props.handlePreferenceChanges(preference)}>Submit changes </button>
                  <Link to="/filters">
                <button className="ui pink button left floated">View Preferences </button>
                 </Link>
                 {/* <Link to="/filteredprofiles">
                <button className="ui pink button left floated">See who matches these preferences!</button>
                 </Link> */}
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                  </div>
                </div>
            </div>
            )}
        ))
    } else {
        return (
            <div className="ui container grid">
                <div className="ui row">
                <div className="column eight wide">
                   <h1>Select your Preferences</h1> 
              <br></br>
              Gender:
              <select className="ui fluid dropdown" name="gender" onChange={this.props.genderChange} value={this.props.gender}>
                  <option value="All">All</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </select>
                <br></br>
                Minimum Age:
              <input type="text" name="minimum_age" placeholder="Minimum Age" value={this.props.minimum_age} onChange={this.props.minRangeChange}></input>        
                <br></br>
              Maximum Age:
                <input type="text" name="maximum_age" placeholder="Maximum Age" value={this.props.maximum_age} onChange={this.props.maxRangeChange}></input>
                  <br></br>                 
                  <br></br>
              State:
              <select className="ui fluid dropdown" name="state" onChange={this.props.stateChange} value={this.props.state}>
                  <option value="All">All</option>
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
                <br></br>
                Religion:
                <select className="ui fluid dropdown" name="religion" onChange={this.props.religionChange} value={this.props.religion}>
                  <option value="All">All</option>
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
                  <br></br>
              Education level:
              <select className="ui fluid dropdown" name="education_level" onChange={this.props.educationLevelChange} value={this.props.education_level}>
                  <option value="All">All</option>
                  <option value="Some High School">Some High School</option>
                  <option value="High School Diploma/GED">High School Diploma/GED</option>
                  <option value="Some College">Some College</option>
                  <option value="Associate's Degree">Associate's Degree</option>
                  <option value="Bachelor's Degree">Bachelor's Degree</option>
                  <option value="Master's Degree or Higher">Master's Degree or Higher</option>
                </select>
                <br></br>
                Parent:
                <select className="ui fluid dropdown" name="kids" onChange={this.props.kidsChange} value={this.props.kids}>
                  <option value="All">All</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  </select>
                  <br></br>
              Relationship Type:
              <select className="ui fluid dropdown" name="relationship_type" onChange={this.props.relationshipTypeChange} value={this.props.relationship_type}>
                  <option value="All">All</option>
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
                <br></br>
                Political Views:
                <select className="ui fluid dropdown" name="politics" onChange={this.props.politicsChange} value={this.props.politics}>
                  <option value="All">All</option>
                  <option value="Conservative">Conservative</option>
                  <option value="Liberal">Liberal</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Other">Other</option>
                  <option value="Prefer Not to Say">Prefer Not to Say</option>
                  </select>
                  <br></br>
              Owns pets:
              <select className="ui fluid dropdown" name="have_pets" onChange={this.props.havePetsChange} value={this.props.have_pets}>
                  <option value="All">All</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Not right now, maybe in the future">Not right now, maybe in the future</option>
                </select>
                <br></br>
                Diet:
                <select className="ui fluid dropdown" name="diet" onChange={this.props.dietChange} value={this.props.diet}>
                  <option value="All">All</option>
                  <option value="Gluten-free">Gluten-free</option>
                  <option value="Kosher">Kosher</option>
                  <option value="Nothing special, I'll eat anything">Nothing special, I'll eat anything</option>
                  <option value="Pescatarian">Pescatarian</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Vegan">Vegan</option>
                  </select>
                  <br></br>
                Smoking:
                <select className="ui fluid dropdown" name="smokes" onChange={this.props.smokesChange} value={this.props.smokes}>
                  <option value="All">All</option>
                  <option value="Often">Often</option>
                  <option value="Sometimes">Sometimes</option>
                  <option value="Trying to quit">Trying to quit</option>
                  <option value="Never">Never</option>
                  <option value="Prefer Not to Say">Prefer Not to Say</option>
                  </select>
                  <br></br>
                Drinking:
                <select className="ui fluid dropdown" name="drinks" onChange={this.props.drinksChange} value={this.props.drinks}>
                  <option value="All">All</option>
                  <option value="A few times a week">A few times a week</option>
                  <option value="Socially">Socially</option>
                  <option value="Rarely">Rarely</option>
                  <option value="Never">Never</option>
                  <option value="Prefer Not to Say">Prefer Not to Say</option>
                  </select>
                  <br></br>
                4/20 Friendly:
                <select className="ui fluid dropdown" name="weed" onChange={this.props.weedChange} value={this.props.weed}>
                  <option value="All">All</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  </select>
                  <br></br>
                Other Drugs:
                <select className="ui fluid dropdown" name="drugs" onChange={this.props.drugsChange} value={this.props.drugs}>
                  <option value="All">All</option>
                  <option value="Often">Often</option>
                  <option value="Socially">Socially</option>
                  <option value="Never">Never</option>
                  <option value="Prefer Not to Say">Prefer Not to Say</option>
                </select>
                    <br></br>
                    <br></br>
                  <Link to="/filters">
                <button className="ui button left floated">Go back </button>
                 </Link>
                 <button className="ui pink button left floated" type="submit" onClick={()=> this.props.handlePreferenceChanges(this.props)}>Submit preferences </button>
                  </div>
                </div>
            </div>
    )}
  }
}

const mapStateToProps = state => {
  console.log("filters state", state)
  return { currentUser: state.currentUser,
                  preferences: state.preferences }
}

export default connect(mapStateToProps)(FilterForm);
