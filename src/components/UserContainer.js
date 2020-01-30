import React from 'react';
import { connect } from 'react-redux';
import { viewProfile } from '../actions';


class UserContainer extends React.Component {
  
    renderList() {
      return this.props.profiles.map(profile => {
        return (
          <div class="card">
        <div className="image">
          <img src={profile.avatar} alt="Try again later!" />
        </div>
        <div className="content">
          <a className="header">{profile.name}</a>
          <div className="meta">
            <span className="date">Age {profile.age} {profile.gender}
      </span>
          </div>
          <div className="description">
            {profile.name} lives in {profile.city}, {profile.state}.
          </div>
        </div>
        <div className="extra content">
          <button onClick={() => this.props.viewProfile(profile)}
                  className="ui button primary">
                    View Profile!
          </button>
          {profile.gender !== "Female" ? <a><i className="mars icon" ></i> </a> :  <i className="venus icon"></i> }
        </div>
      </div>
        );
      });
    };

    render() {
      console.log("props 2", this.props)
      return (
        <div>
           Profiles
        <div className="ui cards">
          {this.renderList()}
        </div>
        </div>
      )
    }
  }

  const mapStateToProps = state => {
    console.log("state", state)
    return  { profiles: state.profiles};
  }
  
  export default connect(mapStateToProps, {viewProfile})(UserContainer);

  //  {/* <div className="item" key={profile.name}>
  //           <div className="right floated content">
  //               <button onClick={() => this.props.viewProfile(profile)}
  //               className="ui button primary">
  //                 Select
  //               </button>
  //             </div>
  //            <div className="content"> Name: {profile.name}
  //            <br/>
  //             Age: {profile.age}
  //             <br/>
  //             Current City: {profile.city}, {profile.state}
  //            </div>
  //         </div> */}