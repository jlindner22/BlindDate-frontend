import React from 'react';
import { connect } from 'react-redux';
import { getPreferences } from '../actions';
import { Link } from 'react-router-dom'

class FilterContainer extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.getPreferences()
      }

    //   state = {
    //     gender: '',
    //     minimum_age: '',
    //     maximum_age: '',
    //     city: '',
    //     state: '',
    //     smokes: '',
    //     drinks: '',
    //     weed: '',
    //     drugs: '',
    //     religion: '',
    //     education_level: '',
    //     kids: '',
    //     relationship_type: '',
    //     politics: '',
    //     have_pets: '',
    //     diet: '',
    //     id: ''
    //   }

    //   editPreferences = (preference) => {
    //     this.setState({
    //         gender: preference.gender,
    //         minimum_age: preference.minimum_age,
    //         maximum_age: preference.maximum_age,
    //         politics: preference.politics,
    //         state: preference.state,
    //         smokes: preference.smokes,
    //         drinks: preference.drinks,
    //         weed: preference.weed,
    //         drugs: preference.drugs,
    //         religion: preference.religion,
    //         education_level: preference.education_level,
    //         kids: preference.kids,
    //         have_pets: preference.have_pets,
    //         diet: preference.diet,
    //         relationship_type: preference.diet,
    //         id: preference.id
    //       })
    //   }

    //   ageRangeChange = (e) => {
    //     this.setState({
    //       minimum_age: e.target.value,
    //       maximum_age: e.target.value
    //     })
    //   }
  
    //   stateChange = (e) => {
    //     this.setState({
    //       state: e.target.value
    //     })
    //   }

    //   smokesChange = (e) => {
    //     this.setState({
    //       smokes: e.target.value
    //     })
    //   }

    //   drinksChange = (e) => {
    //     this.setState({
    //       drinks: e.target.value
    //     })
    //   }

    //   genderChange = (e) => {
    //     this.setState({
    //       gender: e.target.value
    //     })
    //   }

    //   drugsChange = (e) => {
    //     this.setState({
    //       drugs: e.target.value
    //     })
    //   }

    //   religionChange = (e) => {
    //     this.setState({
    //       religion: e.target.value
    //     })
    //   }

    //   educationLevelChange = (e) => {
    //     this.setState({
    //       education_level: e.target.value
    //     })
    //   }

    //   relationshipTypeChange = (e) => {
    //     this.setState({
    //       relationship_type: e.target.value
    //     })
    //   }

    //   politicsChange = (e) => {
    //     this.setState({
    //       politics: e.target.value
    //     })
    //   }
      
    //   havePetsChange = (e) => {
    //     this.setState({
    //       have_pets: e.target.value
    //     })
    //   }

    //   dietChange = (e) => {
    //     this.setState({
    //       diet: e.target.value
    //     })
    //   }
  
    //   weedChange = () => {
    //     this.setState({
    //       weed: !this.state.weed
    //     })
    //   }

    //   kidsChange = () => {
    //     this.setState({
    //       kids: !this.state.kids
    //     })
    //   }

    renderPreferences = () => {
        let preferences = this.props.preferences.filter(preference => preference.user_id === this.props.currentUser.id)
        return preferences
      }

      renderList() {
        return (this.props.preferences && this.renderPreferences(this.props.preferences).map(preference => { 
        // console.log("gender pref", preference.gender)
        return (
            <div className="ui middle aligned divided list">
            <div className="item">
              <div className="right floated content">
                <Link to="/editfilters"><div className="ui button">Edit</div></Link>
              </div>
              <div className="content">
              <b>Gender:</b> {preference.gender ? preference.gender : "No preference set"}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
                <Link to="/editfilters"><div className="ui button">Edit</div></Link>
              </div>
              <div className="content">
              <b>Age Range:</b> {preference.minimum_age} to {preference.maximum_age}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
                <Link to="/editfilters"><div className="ui button">Edit</div></Link>
              </div>
              <div className="content">
              <b>Location:</b> {preference.state ? preference.state : "No preference set"}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
                <Link to="/editfilters"><div className="ui button">Edit</div></Link>
              </div>
              <div className="content">
              <b>Religion:</b> {preference.religion ? preference.religion : "No preference set"}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
                <Link to="/editfilters"><div className="ui button">Edit</div></Link>
              </div>
              <div className="content">
              <b>Education Level:</b> {preference.education_level ? preference.education_level : "No preference set"}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
                <Link to="/editfilters"><div className="ui button">Edit</div></Link>
              </div>
              <div className="content">
              <b>Parent:</b> {preference.kids === true ? "Yes" : "No"}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
                <Link to="/editfilters"><div className="ui button">Edit</div></Link>
              </div>
              <div className="content">
              <b>Relationship Type:</b> {preference.relationship_type ? preference.relationship_type : "No preference set"}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
               <Link to="/editfilters"><div className="ui button">Edit</div></Link> 
              </div>
              <div className="content">
              <b>Political Views:</b> {preference.politics  ? preference.politics : "No preference set"}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
                <Link to="/editfilters"><div className="ui button">Edit</div></Link>
              </div>
              <div className="content">
              <b>Owns pets:</b> {preference.have_pets === true ? "Yes" : "No"}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
                <Link to="/editfilters"><div className="ui button">Edit</div></Link>
              </div>
              <div className="content">
              <b>Diet:</b> {preference.diet ? preference.diet : "No preference set"}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
                <Link to="/editfilters"><div className="ui button">Edit</div></Link>
              </div>
              <div className="content">
              <u><b>Habits</b></u>
                <br></br>
                <br></br>
                <b>Smoking:</b> {preference.smokes ? preference.smokes : "No preference set"}
                <br></br>
                <b>Drinking:</b> {preference.drinks ? preference.drinks : "No preference set"}
                <br></br>
                <b>4/20 Friendly:</b> {preference.weed === true ? "Yes" : "No"}
                <br></br>
                <b>Other drugs:</b> {preference.drugs ? preference.drugs : "No preference set"}
              </div>
          </div>
          </div>
            )
        }))
      };

    render() {
        if (this.props.currentUser) {
        let myPreferences = this.props.preferences.filter(preference => preference.user_id === this.props.currentUser.id)
        console.log("Look at dem props", this.props)
        return (
            <div className="ui container grid">
                <div className="ui row">
                <div className="column eight wide">
                   <h1>PREFERENCES</h1> 
                {myPreferences < 1 ? <button className="ui pink basic button">Set your filters </button>  :
                this.renderList()}
            </div>
            </div>
            </div>
        )
        } else {return "Log in to view/set your filters"}
    }
}

const mapStateToProps = state => {
    console.log("filters state", state)
    return  { profiles: state.profiles,
              currentUser: state.currentUser,
              preferences: state.preferences,
            };
  }

  export default connect(mapStateToProps, {getPreferences})(FilterContainer);
