import React from 'react';
import { connect } from 'react-redux';
import { viewProfile, loggedIn, getPreferences } from '../actions';
import { Link } from 'react-router-dom';

class PersonalityMatches extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.getPreferences()
  }

    renderList() {
       let myPersonality = this.props.currentUser.extrovert_introvert
       let profiles = this.props.profiles
       let suggested;
       switch (myPersonality) {
        case 'ESFP':
           suggested = profiles.filter(pers => pers.extrovert_introvert === "ESFJ" || pers.extrovert_introvert === "ESTP" || pers.extrovert_introvert === "ISFP")
           break;
         case 'ESTP':
            suggested = profiles.filter(pers => pers.extrovert_introvert === "ESTJ" || pers.extrovert_introvert === "ESFP" || pers.extrovert_introvert === "INFJ")
            break;
         case 'ESTJ':
            suggested = profiles.filter(pers => pers.extrovert_introvert === "ESTP" || pers.extrovert_introvert === "ESFJ" || pers.extrovert_introvert === "ISTJ")           
            break;
         case 'ESFJ':
            suggested = profiles.filter(pers => pers.extrovert_introvert === "ISTP" || pers.extrovert_introvert === "ESTJ" || pers.extrovert_introvert === "ESTP")
           break;
         case 'ISTJ':
            suggested = profiles.filter(pers => pers.extrovert_introvert === "INFJ" || pers.extrovert_introvert === "ISTP" || pers.extrovert_introvert === "ISFJ")
            break;
         case 'ISTP':
            suggested = profiles.filter(pers => pers.extrovert_introvert === "ISFP" || pers.extrovert_introvert === "INFP" || pers.extrovert_introvert === "ESFP")
            break;
         case 'ISFJ':
            suggested = profiles.filter(pers => pers.extrovert_introvert === "ESFJ" || pers.extrovert_introvert === "ISFP" || pers.extrovert_introvert === "ISTJ")
            break;
         case 'ISFP':
            suggested = profiles.filter(pers => pers.extrovert_introvert === "ESFP" || pers.extrovert_introvert === "ISFJ" || pers.extrovert_introvert === "ESFJ")
            break;
         case 'ENTJ':
            suggested = profiles.filter(pers => pers.extrovert_introvert === "INTJ" || pers.extrovert_introvert === "ENTP" || pers.extrovert_introvert === "ENFJ")
            break;
         case 'ENTP':
            suggested = profiles.filter(pers => pers.extrovert_introvert === "ENTJ" || pers.extrovert_introvert === "ENFP" || pers.extrovert_introvert === "ENFJ")
            break;
         case 'ENFJ':
            suggested = profiles.filter(pers => pers.extrovert_introvert === "ENFJ" || pers.extrovert_introvert === "INFJ" || pers.extrovert_introvert === "ENFP")
            break;
         case 'ENFP':
            suggested = profiles.filter(pers => pers.extrovert_introvert === "ENTJ" || pers.extrovert_introvert === "INTJ" || pers.extrovert_introvert === "INTP")
            break;
         case 'INTJ':
            suggested = profiles.filter(pers => pers.extrovert_introvert === "INTP" || pers.extrovert_introvert === "INFJ" || pers.extrovert_introvert === "INFP")
            break;
         case 'INTP':
            suggested = profiles.filter(pers => pers.extrovert_introvert === "ENTP" || pers.extrovert_introvert === "INFP" || pers.extrovert_introvert === "ENFP")
            break;
         case 'INFJ':
            suggested = profiles.filter(pers => pers.extrovert_introvert === "ISTJ" || pers.extrovert_introvert === "INFP" || pers.extrovert_introvert === "INTJ")
            break;
         case 'INFP':
            suggested = profiles.filter(pers => pers.extrovert_introvert === "INFJ" || pers.extrovert_introvert === "ISFJ" || pers.extrovert_introvert === "ENFJ")
            break;
         default:
            suggested = profiles
            break;
       }

            return (this.props.currentUser && suggested.map(profile => {
                return (
                    <div className="card">
                    <div className="image">
                    <img className="ui image" src={profile.avatar} alt="Try again later!" />
                    </div>
                    <div className="content">
                    <a className="header">{profile.name}</a>
                    <div className="meta">
                        <span className="date">Age {profile.age} 
                        </span>
                    </div>
                    <div className="description">
                        {profile.name} lives in {profile.city}, {profile.state}.
                    </div>
                    </div>
                    <div className="extra content">
                        <Link to={`/users/${profile.id}`}> <button 
                        onClick={() => this.props.viewProfile(profile)}
                            className="ui blue basic button">
                                View Profile!
                    </button></Link>
                    <div className="ui right floated">
                    {profile.gender !== "Female" ? <i className="mars icon" ></i>  :  <i className="venus icon"></i> }
                    </div>
                    </div> 
                </div>
                );
            })
        )
    }
        render() {
            return(
            <div>
            <div className="ui container">
                <div className="ui row">
                <Link to={`/users`}>
            <button className="ui basic blue button left floated">
                <i className="arrow alternate circle left blue icon"></i> Browse without filters
            </button>
            </Link>
            <br></br>
            <br></br>
            <br></br>
            <div className="ui link cards">
                    {this.renderList()}
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return  { profiles: state.profiles,
        currentUser: state.currentUser,
        preferences: state.preferences
    };
}
    
export default connect(mapStateToProps, {viewProfile, getPreferences, loggedIn})(PersonalityMatches);
    