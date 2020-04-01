import React from 'react';
import { connect } from 'react-redux';
import { loggedIn } from '../actions';
import EditBasicInfo from './EditBasicInfo';
import EditLogin from './EditLogin';
import EditHabitsPersonalInfo from './EditHabitsPersonalInfo';

class EditProfilePage extends React.Component {

    state = {
        profileInfo: this.props.currentUser,
        viewBasicInfo: false,
        viewAccountSettings: false,
        viewHabitsAndPersonalInfo: false
      }

    componentDidMount() {
        window.scrollTo(0, 0)
        if (this.props.currentUser){
          fetch(`http://localhost:3000/api/v1/users/${this.props.currentUser.id}`)
            .then(response => response.json())
            .then(response => this.setState({ profileInfo: response}))
        } else {return null}
    }

    editBasicInfo = () => {
        this.setState({
            viewAccountSettings: false,
            viewHabitsAndPersonalInfo: false,
            viewBasicInfo: true
            })
        }
    
    editAccountSettings = () => {
        this.setState({
            viewBasicInfo: false,
            viewHabitsAndPersonalInfo: false,
            viewAccountSettings: true
        })
    }
    
    editHabits = () => {
        this.setState({
            viewBasicInfo: false,
            viewAccountSettings: false,
            viewHabitsAndPersonalInfo: true
        })
    }

    render() {
        console.log("PROPS", this.props.currentUser)
        let user = this.props.currentUser
        if (user) {
            return (
            <div>
                <div className="ui container grid">
                <div className="ui row">
                {this.state.viewBasicInfo === false && this.state.viewAccountSettings === false 
                && this.state.viewHabitsAndPersonalInfo === false ?
                <div>
                <div className="ui top attached tabular menu">
            <a className="item" onClick={this.editBasicInfo}><i className="edit icon"></i>
              Basic Information
            </a>
            <a className="item" onClick={this.editAccountSettings}><i className="cog icon"></i>
              Account Settings
            </a>
            <a className="item" onClick={this.editHabits}><i className="cog icon"></i>
              Habits & Personal Information
            </a>
            </div>
            <br></br>
            <br></br>
            <img src={user.avatar} className="ui fluid image" alt="Avatar"></img>
            <br></br>
            <br></br>
     
            </div> 
            
            : <h1>Edit Your Account</h1>
            }
            <br></br>
            {this.state.viewBasicInfo === true ? <EditBasicInfo viewBasicInfo={this.state.viewBasicInfo}/> : null}
            {this.state.viewAccountSettings === true ? <EditLogin viewAccountSettings={this.state.viewAccountSettings}/> : null }
            {this.state.viewHabitsAndPersonalInfo === true ? <EditHabitsPersonalInfo viewHabitsAndPersonalInfo={this.state.viewHabitsAndPersonalInfo}/> : null }
            </div>
            </div> 
            </div>
        )
    } else {
        return (
            // move .loader lower
            <div className="loader">
            <div className="ui segment">
                <div className="ui active dimmer">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                    <div className="ui large text loader">Loading</div>
                <p></p>
                <p></p>
                <p></p>
                </div>
                </div>
            </div>
        )
        // "Please log in to view your profile"
        }
    }

}

const mapStateToProps = state => {
    console.log("edit profile state", state)
    return { currentUser: state.currentUser,
             profiles: state.profiles
             };
  }

export default connect(mapStateToProps, {loggedIn})(EditProfilePage);

/* <h1>Edit Your Account</h1>
Name: {user.name} */


