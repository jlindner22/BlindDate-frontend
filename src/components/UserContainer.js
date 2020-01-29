import React from 'react';
import { connect } from 'react-redux';
import {viewProfile } from '../actions';

class UserContainer extends React.Component {
  
    renderList() {
      return this.props.profiles.map(profile => {
        return (
          <div className="item" key={profile.name}>
            <div className="right floated content">
                <button onClick={() => this.props.viewProfile(profile)}
                className="ui button primary">
                  Select
                </button>
              </div>
             <div className="content"> Name: {profile.name}</div>
          </div>
        );
      });
    };

    render() {
      console.log("props", this.props.profiles[0].name)
      console.log("props 2", this.props)
      return (
        <div className="ui divided list"> Profiles
        <br></br>
        <br></br>
        <br></br>
        <br></br>

          {/* <br></br>
          {this.props.profiles[0].name}
          <br></br>
          {this.props.profiles[1].name} */}
          {this.renderList()}

        </div>
      )
    }
  }

  const mapStateToProps = state => {
    console.log("state", state)
    return  { profiles: state.profiles};
  }
  

  
  export default connect(mapStateToProps, {viewProfile})(UserContainer);