import React from 'react';
import { connect } from 'react-redux';
import { getPreferences } from '../actions';

class Filter extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.getPreferences()
      }

    renderPreferences = () => {
        let preferences = this.props.preferences.filter(preference => preference.user_id === this.props.currentUser.id)
        return preferences
      }

    //   let myPreferences = this.props.preferences.filter(preference => preference.user_id === this.props.currentUser.id)


      renderList() {
        return (this.props.preferences && this.renderPreferences(this.props.preferences).map(preference => { 
        console.log("gender pref", preference.gender)
        return (
            <div className="ui middle aligned divided list">
            <div className="item">
              <div className="right floated content">
                <div className="ui button">Edit</div>
              </div>
              <div className="content">
              <b>Gender:</b> {preference.gender}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
                <div className="ui button">Edit</div>
              </div>
              <div className="content">
              <b>Age:</b> {preference.age}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
                <div className="ui button">Edit</div>
              </div>
              <div className="content">
              <b>Location:</b> {preference.state}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
                <div className="ui button">Edit</div>
              </div>
              <div className="content">
              <b>Religion:</b> {preference.religion}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
                <div className="ui button">Edit</div>
              </div>
              <div className="content">
              <b>Education Level:</b> {preference.education_level}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
                <div className="ui button">Edit</div>
              </div>
              <div className="content">
              <b>Parent:</b> {preference.kids}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
                <div className="ui button">Edit</div>
              </div>
              <div className="content">
              <b>Relationship Type:</b> {preference.relationship_type}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
                <div className="ui button">Edit</div>
              </div>
              <div className="content">
              <b>Political Views:</b> {preference.politics}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
                <div className="ui button">Edit</div>
              </div>
              <div className="content">
              <b>Owned pets:</b> {preference.have_pets}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
                <div className="ui button">Edit</div>
              </div>
              <div className="content">
              <b>Diet:</b> {preference.diet}
              </div>
            </div>
            <div className="item">
              <div className="right floated content">
                <div className="ui button">Edit</div>
              </div>
              <div className="content">
              <b>Habits:</b> 
                <br></br>
                <b>Smoking:</b> {preference.smokes}
                <br></br>
                <b>Drinking:</b> {preference.drinks}
                <br></br>
                <b>Marijuana:</b> {preference.weed}
                <br></br>
                <b>Other drugs:</b> {preference.drugs}
              </div>
          </div>
          </div>
            )
        }))
      };

    render() {
        let myPreferences = this.props.preferences.filter(preference => preference.user_id === this.props.currentUser.id)
        console.log("Look at dem props", this.props)
        return (
            <div className="ui container grid">
                <div className="ui row">
                <div className="column eight wide">
                {myPreferences < 1 ? "You currently have no filters set." :
                this.renderList()}
            </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("filters state", state)
    return  { profiles: state.profiles,
              currentUser: state.currentUser,
              preferences: state.preferences,
            };
  }

  export default connect(mapStateToProps, {getPreferences})(Filter);
