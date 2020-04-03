import React from 'react';
import { connect } from 'react-redux';
import { getPreferences } from '../actions';
import { Link } from 'react-router-dom'
import PersonalityMatches from './PersonalityMatches';

class FilterContainer extends React.Component {

  state = {
    heart: false
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.getPreferences()
  }

  heartClicked = () => {
    this.setState({
      heart: true
    })
  }

  renderPreferences = () => {
    let preferences = this.props.preferences.filter(preference => preference.user_id === this.props.currentUser.id)
    return preferences
  }

    renderList() {
      // console.log("pref1", this.props.editPreferences)
      return (this.props.preferences && this.renderPreferences(this.props.preferences).map(preference => {
        // console.log("pref2", this.props.editPreferences) 
        return (
            <div className="ui middle aligned divided list">
            <div className="item">
              <div className="right floated content">
                <Link to="/editfilters">
                <button className="ui basic blue compact button" 
            onClick={() => this.props.editPreferences(preference)}><i className="pencil icon"></i></button>
              </Link>
              </div>
              <div className="content">
                <div className="centered">
              <b>Gender:</b> {preference.gender ? preference.gender : "No preference set"}
              </div>
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
              <Link to="/editfilters">
                <button className="ui blue compact button" 
            onClick={() => this.props.editPreferences(preference)}><i className="pencil icon"></i></button>
              </Link> </div>
              <div className="content">
              <b>Age Range:</b> {preference.minimum_age} to {preference.maximum_age}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
            <Link to="/editfilters">
                <button className="ui basic blue compact button" 
            onClick={() => this.props.editPreferences(preference)}><i className="pencil icon"></i></button>
              </Link></div>
              <div className="content">
              <b>Location:</b> {preference.state ? preference.state : "No preference set"}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
            <Link to="/editfilters">
                <button className="ui blue compact button" 
            onClick={() => this.props.editPreferences(preference)}><i className="pencil icon"></i></button>
              </Link></div>
              <div className="content">
              <b>Religion:</b> {preference.religion ? preference.religion : "No preference set"}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
            <Link to="/editfilters">
                <button className="ui basic blue compact button" 
            onClick={() => this.props.editPreferences(preference)}><i className="pencil icon"></i></button>
              </Link></div>
              <div className="content">
              <b>Education Level:</b> {preference.education_level ? preference.education_level : "No preference set"}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
            <Link to="/editfilters">
                <button className="ui blue compact button" 
            onClick={() => this.props.editPreferences(preference)}><i className="pencil icon"></i></button>
              </Link></div>
              <div className="content">
              <b>Parent:</b> {preference.kids ? preference.kids : "No preference set"}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
            <Link to="/editfilters">
                <button className="ui basic blue compact button" 
            onClick={() => this.props.editPreferences(preference)}><i className="pencil icon"></i></button>
              </Link></div>
              <div className="content">
              <b>Relationship Type:</b> {preference.relationship_type ? preference.relationship_type : "No preference set"}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
              <Link to="/editfilters">
                <button className="ui blue compact button" 
            onClick={() => this.props.editPreferences(preference)}><i className="pencil icon"></i></button>
              </Link> 
              </div>
              <div className="content">
              <b>Political Views:</b> {preference.politics  ? preference.politics : "No preference set"}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
            <Link to="/editfilters">
                <button className="ui basic blue compact button" 
            onClick={() => this.props.editPreferences(preference)}><i className="pencil icon"></i></button>
              </Link></div>
              <div className="content">
              <b>Owns pets:</b> {preference.have_pets ? preference.have_pets : "No preference set"}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
            <Link to="/editfilters">
                <button className="ui blue compact button" 
            onClick={() => this.props.editPreferences(preference)}><i className="pencil icon"></i></button>
              </Link></div>
              <div className="content">
              <b>Diet:</b> {preference.diet ? preference.diet : "No preference set"}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
            <Link to="/editfilters">
                <button className="ui basic blue compact button" 
            onClick={() => this.props.editPreferences(preference)}><i className="pencil icon"></i></button>
              </Link>
              </div>
              <div className="content">
              <u><b>Habits</b></u>
                <br></br>
                <br></br>
                <b>Smoking:</b> {preference.smokes ? preference.smokes : "No preference set"}
                <br></br>
                <b>Drinking:</b> {preference.drinks ? preference.drinks : "No preference set"}
                <br></br>
                <b>4/20 Friendly:</b> {preference.weed ? preference.weed : "No preference set"}
                <br></br>
                <b>Other drugs:</b> {preference.drugs ? preference.drugs : "No preference set"}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </div>
          </div>
          </div>
            )
      }))
    };

  render() {
    // console.log("pref3", this.props.editPreferences)
    if (this.props.currentUser) {
      let myPreferences = this.props.preferences.filter(preference => preference.user_id === this.props.currentUser.id)
      // console.log("FilterContainer props", this.props)
      return (
          <div className="ui container grid">
              <div className="ui row">
              {/* <div className="column twelve wide"> */}
              {myPreferences < 1 ? null :
              <Link to= "/filteredprofiles">
              <button className="ui blue button right floated">
                See who fits your preferences!
              </button>
              </Link>}
                <div className="tealFont"> 
                <br></br>
                <h1>Preferences</h1> 
                </div> 
                <br></br>
                <div className="ui blue link cards centerUsers">
              {myPreferences < 1 ? 
                // <div className="centerText">
                <div className="ui container grid">
                <br></br>
                {this.state.heart === true ? <PersonalityMatches/> : 
                <div className="centerText halfDown">
                  <h2 className="tealFont centerFilterContainer"> You currently have no preferences set.</h2> 
                <h4 className="centerFilterContainer">In the meantime, click on the heart to view some 
                <br></br>
                profiles that best match your personality type.</h4>
                <br></br>
                <img className="ui medium centered image centerFilterContainer" onClick={this.heartClicked} src="https://static.thenounproject.com/png/720337-200.png" alt="heart"></img>
                <br></br>
                <br></br>
                <Link to="/editfilters">
              <button className="ui blue button centerFilterContainer" 
              onClick={() => this.props.editPreferences(myPreferences)}>
              Set Filters </button> </Link> 
              <br></br>
              <br></br>
              <br></br>
                </div> }
              </div> 
              :
              this.renderList() }
              </div> 
          </div>
          </div>
          // </div>
      )
      } else {
          return "Log in to view/set your filters"
        }
  }
}

const mapStateToProps = state => {
    console.log("filters state", state)
    return  { profiles: state.profiles,
              currentUser: state.currentUser,
              preferences: state.preferences };
}

export default connect(mapStateToProps, {getPreferences})(FilterContainer);
