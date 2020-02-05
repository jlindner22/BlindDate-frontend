import React from 'react';
import { connect } from 'react-redux';
import { viewProfile, loggedIn, getMyMatches, deleteMatch } from '../actions';
import { Link } from 'react-router-dom';

class MatchesContainer extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.getMyMatches()
    }

    state = {
      allMatches: this.props.matches.map(match => match.id)
    }

  //   deleteMatch = (match) => {
  //     fetch(`http://localhost:3000/matches/${match.id}`, {
  //       method: 'DELETE',
  //     })
  //         this.setState({
  //             allMatches: [...this.props.matches].filter(deleteMatch => match.id !== deleteMatch)
  //         })
  //         // console.log("state of matches", this.state.allMatches)
  // }


    deleteMatch = (match) => {
        let matches = this.props.matches.map(match => match)
        let matchIDs = this.props.matches.map(match => match.id)
        let potentialMatchIDs = this.props.matches.map(profile => profile.potential_match_id)
        let profileIDs = this.props.profiles.map(profile => profile.id)
        console.log("MATCHES", matches)
        // console.log("working?", this.props.matches.includes(match.id && matchIDs))
        // console.log("profile IDs", profileIDs)
        // console.log("potential match IDs", potentialMatchIDs)
        // console.log("match IDs", matchIDs)
        // console.log("MATCH", match.id)
        // debugger

        // console.log("HI JEN", matchIDs.filter(profile => matchIDs.includes(profile.id)))
        // return match.filter(profile => matchIDs.includes(profile.id))
    }

   renderMatches = (profiles) => {
      let matches = this.props.matches.filter(match => match.user_id.id === this.props.currentUser)
      
      console.log("matches",matches)
      let matchIDs = matches.map(match => match.potential_match.id)
    //   console.log("matches IDs",matchIDs)
    //   console.log("profiles", profiles)
    //   console.log("match profiles", profiles.filter(profile => matchIDs.includes(profile.id)))
      // return profiles.filter(profile => matchIDs.includes(profile.id))
      return matches
   }

    renderList() {
      return (this.props.matches && this.renderMatches(this.props.profiles).map(profile => { 
        console.log("profile in renderList", profile)
        console.log("profile match id",profile.match_id)
      //  let matchId = this.props.matches.map(match => match.id)
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
            <Link to={`/users/${profile.id}`}> 
          <button 
          onClick={() => this.props.viewProfile(profile)}
                  className="ui pink basic button">
                    View Profile!
          </button></Link>
          <div className="ui right floated">
            <button 
            onClick={() => this.props.deleteMatch(profile.match_id)}
                    className="ui pink basic button">
                        Delete Match
            </button>
          {/* {profile.gender !== "Female" ? <a><i className="mars icon" ></i> </a> :  <i className="venus icon"></i> } */}
          </div> 
        </div> 
      </div>
        );
      }))
    };

    render() {
      console.log("HI JEN, THESE ARE MATCHES", this.props.matches)
      // console.log("MATCHES???", this.state.allMatches)
      console.log("matches container props", this.props)
      console.log("matches profiles props", this.props.profiles)
      console.log("LOOK HERE JEN", this.props.matches.map(match => match.id))    
    //   console.log("matches match props", this.props.matches.map(match => match.potential_match_id))
    //   console.log("potential match ids", this.props.likeProfile.map( match => match.potential_match_id))
    //   console.log("get matches", this.props.getMyMatches)
      return (
        <div>
            <div className="ui container grid">
            <div className="ui row">
            <div className="ui link cards">
            {this.props.matches === false ? "You currently have no matches." :
          this.renderList()}
            </div>
            <br></br>
            <br></br>
            </div>
            </div>
            <br></br>
            <br></br>

        <Link to={`/users`}>
            <button className="ui basic pink button left floated">
                <a><i className="arrow alternate circle left pink icon"></i></a> Browse
            </button>
          </Link>
          <br></br>
          <br></br> <br></br>
          <br></br> <br></br>
          <br></br>
        </div>

      )
    }
  }

  const mapStateToProps = state => {
    console.log("matches state", state)
    return  { profiles: state.profiles,
              selectedProfile: state.selectedProfile,
              likeProfile: state.likeProfile,
              currentUser: state.currentUser,
              matches: state.matches,
              deleteMatch: state.deleteMatch
            };
  }

export default connect(mapStateToProps, {viewProfile, loggedIn, getMyMatches, deleteMatch})(MatchesContainer);
