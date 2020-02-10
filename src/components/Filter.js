import React from 'react';
import { connect } from 'react-redux';
import { getPreferences } from '../actions';
import { Link } from 'react-router-dom'

class FilterContainer extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.getPreferences()
      }

    renderPreferences = () => {
        let preferences = this.props.preferences.filter(preference => preference.user_id === this.props.currentUser.id)
        return preferences
      }

      renderList() {
        return (this.props.preferences && this.renderPreferences(this.props.preferences).map(preference => { 
        return (
            <div className="ui middle aligned divided list">
            <div className="item">
              <div className="right floated content">
                <Link to="/editfilters">
                <button className="ui button" 
            onClick={() => this.props.editPreferences(preference)}>Edit</button>
              </Link>
              </div>
              <div className="content">
              <b>Gender:</b> {preference.gender ? preference.gender : "No preference set"}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
              <Link to="/editfilters">
                <button className="ui button" 
            onClick={() => this.props.editPreferences(preference)}>Edit</button>
              </Link> </div>
              <div className="content">
              <b>Age Range:</b> {preference.minimum_age} to {preference.maximum_age}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
            <Link to="/editfilters">
                <button className="ui button" 
            onClick={() => this.props.editPreferences(preference)}>Edit</button>
              </Link>              </div>
              <div className="content">
              <b>Location:</b> {preference.state ? preference.state : "No preference set"}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
            <Link to="/editfilters">
                <button className="ui button" 
            onClick={() => this.props.editPreferences(preference)}>Edit</button>
              </Link>              </div>
              <div className="content">
              <b>Religion:</b> {preference.religion ? preference.religion : "No preference set"}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
            <Link to="/editfilters">
                <button className="ui button" 
            onClick={() => this.props.editPreferences(preference)}>Edit</button>
              </Link>              </div>
              <div className="content">
              <b>Education Level:</b> {preference.education_level ? preference.education_level : "No preference set"}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
            <Link to="/editfilters">
                <button className="ui button" 
            onClick={() => this.props.editPreferences(preference)}>Edit</button>
              </Link>              </div>
              <div className="content">
              <b>Parent:</b> {preference.kids === true ? "Yes" : "No"}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
            <Link to="/editfilters">
                <button className="ui button" 
            onClick={() => this.props.editPreferences(preference)}>Edit</button>
              </Link>              </div>
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
            <Link to="/editfilters">
                <button className="ui button" 
            onClick={() => this.props.editPreferences(preference)}>Edit</button>
              </Link>              </div>
              <div className="content">
              <b>Owns pets:</b> {preference.have_pets === true ? "Yes" : "No"}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
            <Link to="/editfilters">
                <button className="ui button" 
            onClick={() => this.props.editPreferences(preference)}>Edit</button>
              </Link>              </div>
              <div className="content">
              <b>Diet:</b> {preference.diet ? preference.diet : "No preference set"}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
            <Link to="/editfilters">
                <button className="ui button" 
            onClick={() => this.props.editPreferences(preference)}>Edit</button>
              </Link>              </div>
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
                {myPreferences < 1 ? <Link to="/editfilters">
                <button className="ui pink basic button" 
                onClick={() => this.props.editPreferences(myPreferences)}>
                Set your filters </button> </Link> :
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
