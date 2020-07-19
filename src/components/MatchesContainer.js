import React from 'react';
import { connect } from 'react-redux';
import { viewProfile, loggedIn, getMyMatches, deleteMatch } from '../actions';
import { Link } from 'react-router-dom';
import PersonalityMatches from './PersonalityMatches';
import heartIcon from '../assets/heart_icon.png'

class MatchesContainer extends React.Component {

  state = {
    oldMatchesLength: this.props.matches.length,
    heart: false,
    matchesPresent: false
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.getMyMatches()
    // let matches = this.props.matches.filter(match => match.user_id.id === this.props.currentUser.id)
    // let matchedMe = this.props.matches.filter(match => match.potential_match.id === this.props.currentUser.id)

    // if (matchedMe.length > 0 || matches.length > 0) {
    //   this.setState({
    //     matchesPresent: true
    //   })
    // }
  }

  componentDidUpdate() {
    this.props.getMyMatches()
  }

  heartClicked = () => {
    this.setState({
      heart: true
    })
  }

  renderMatches = () => {
    console.log("MATCHES", this.props.matches)
    if (this.props.matches) {
      let matches = this.props.matches.filter(match => match.user_id.id === this.props.currentUser.id)
      return matches
      } else {
        return "Log in to view your matches"}
  }

  renderMatchedMe = () => {
    if (this.props.matches) {
      let matches = this.props.matches.filter(match => match.potential_match.id === this.props.currentUser.id)
      return matches
      } else {
        return "Log in to view your matches"}
  }

  renderList() {
    return (this.props.matches && this.renderMatches(this.props.profiles).map(profile => { 
      console.log("profile in renderList", profile.potential_match)
      console.log("profile match id", profile.match_id)
      return (
        <div className="card">
      <div className="image">
        <img className="ui image" src={profile.potential_match.avatar} alt="Avatar" />
      </div>
      <div className="content">
        <div className="header">{profile.potential_match.name}</div>
        <div className="meta">
          <span className="date">Age {profile.potential_match.age} 
          </span>
        </div>
        <div className="description">
          {profile.potential_match.name} lives in {profile.potential_match.city}, {profile.potential_match.state}.
        </div>
      </div>
      <div className="extra content">
          <Link to={`/users/${profile.potential_match.id}`}> <button 
            onClick={() => this.props.viewProfile(profile.potential_match)}
                className="ui blue button">
                  View Profile!
          </button></Link>
        <div className="ui right floated">
          <button 
          onClick={() => this.props.deleteMatch(profile.match_id)}
              className="ui red button"> Delete Match
          </button>
        </div> 
      </div> 
    </div>
      );
    }))
  };

  renderListOfMatchedMe() {
    return (this.props.matches && this.renderMatchedMe(this.props.profiles).map(profile => { 
      console.log("profile in new renderlist", profile.user_id)
      console.log("profile match id",profile.match_id)
      return (
        <div className="card">
      <div className="image">
        <img className="ui image" src={profile.user_id.avatar} alt="Avatar" />
      </div>
      <div className="content">
        <div className="header">{profile.user_id.name}</div>
        <div className="meta">
          <span className="date">Age {profile.user_id.age} 
          </span>
        </div>
        <div className="description">
          {profile.user_id.name} lives in {profile.user_id.city}, {profile.user_id.state}.
        </div>
      </div>
      <div className="extra content">
          <Link to={`/users/${profile.user_id.id}`}> <button 
            onClick={() => this.props.viewProfile(profile.user_id)}
                className="ui blue button">
                  View Profile!
          </button></Link>
        <div className="ui right floated">
          <button 
          onClick={() => this.props.deleteMatch(profile.match_id)}
                  className="ui red button"> Delete Match
          </button>
        </div> 
      </div> 
    </div>
      );
    }))
  };

  render() {
  //   let matchedMe = this.props.matches.filter(match => match.potential_match.id === this.props.currentUser.id)
  // console.log("MATCHES", this.props.matches)
    if (this.props.matches){
    let myMatches = this.props.matches.filter(match => match.user_id.id === this.props.currentUser.id || match.potential_match.id === this.props.currentUser.id)
    return (
      <div className="centerContainer">
        <div className="ui container grid">
        <div> 
          <br></br>
        <h1 className="filterContainerTitle">Matches</h1> 
        </div> 
          <div className="ui row">
          {/* <div className="centerText centerUsers"> */}
           {/* {this.state.heart === false && this.state.matchesPresent === false ? <Link to={`/users`}>
          <button className="ui basic blue button left floated">
              <i className="arrow alternate circle left blue icon"></i> Keep browsing
          </button>
        </Link> : null} */}
        {/* </div> */}
        <br></br>
            <div className="ui blue link cards centerUsers">
          {myMatches < 1 ? 
            <div className="ui container grid">
              <br></br>
            {this.state.heart === true ? <PersonalityMatches/> :
          <div className="centerText halfDown">
          <h2 className="tealFont centerMatchesContainer"> You currently have no matches</h2> 
           <h4 className="centerMatchesContainer"> In the meantime, click on the heart to view the 
           <br></br>
            profiles that best match your personality type.</h4>
           <br></br>
           <img className="ui medium centered image centerMatchesContainer" onClick={this.heartClicked} src={heartIcon} alt="heart"></img>
           <br></br>
            <br></br> 
            </div> }
           </div> 
           :
           <React.Fragment>  
        {this.renderList()}
        {this.renderListOfMatchedMe()}
        </React.Fragment>  
          }
          </div>
          <br></br>
          <br></br>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br> 
          <br></br>
          </div>
      </div>
    )
    } else {return "Log in to view your matches"}
  }
}

const mapStateToProps = state => {
  return { profiles: state.profiles,
            selectedProfile: state.selectedProfile,
            likeProfile: state.likeProfile,
            currentUser: state.currentUser,
            matches: state.matches,
            deleteMatch: state.deleteMatch };
}

export default connect(mapStateToProps, {viewProfile, loggedIn, getMyMatches, deleteMatch})(MatchesContainer);
