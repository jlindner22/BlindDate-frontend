import React from 'react';
import { connect } from 'react-redux';
import { loggedIn } from '../actions';
import EditBasicInfo from './EditBasicInfo';
import EditLogin from './EditLogin';
import EditHabitsPersonalInfo from './EditHabitsPersonalInfo';
import EditMoreAboutMe from './EditMoreAboutMe';

class EditProfilePage extends React.Component {

    state = {
        profileInfo: this.props.currentUser,
        profiles: this.props.profiles,
        viewBasicInfo: false,
        viewAccountSettings: false,
        viewHabitsAndPersonalInfo: false,
        viewMoreAboutMe: false
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
            viewMoreAboutMe: false,
            viewBasicInfo: true
            })
        }
    
    editAccountSettings = () => {
        this.setState({
            viewBasicInfo: false,
            viewHabitsAndPersonalInfo: false,
            viewMoreAboutMe: false,
            viewAccountSettings: true
        })
    }
    
    editHabits = () => {
        this.setState({
            viewBasicInfo: false,
            viewAccountSettings: false,
            viewMoreAboutMe: false,
            viewHabitsAndPersonalInfo: true
        })
    }

    editAboutMe = () => {
        this.setState({
            viewBasicInfo: false,
            viewAccountSettings: false,
            viewHabitsAndPersonalInfo: false,
            viewMoreAboutMe: true
        })
    }

    deleteUser = (user) => {
        alert("Are you sure?")
        this.props.history.push('/')
        fetch(`http://localhost:3000/api/v1/users/${user.id}`, {
            method: 'DELETE',
        })
        this.setState({
            profiles: [...this.state.profiles].filter(deleteUser => user !== deleteUser)
        })
        this.props.logout();
        window.location.reload();
    }

    render() {
        console.log("editprofileprops", this.props)
        let user = this.props.currentUser
        if (user) {
            return (
            <div>
                <div className="ui container grid">
                <div className="ui row">
                {this.state.viewBasicInfo === false && this.state.viewAccountSettings === false 
                && this.state.viewHabitsAndPersonalInfo === false && this.state.viewMoreAboutMe === false ?
                <div>
                    <br></br>
                <div className="ui top attached tabular menu">
            <a className="item" onClick={this.editBasicInfo}><i className="edit icon"></i>
              Basic Information
            </a>
            <a className="item" onClick={this.editAccountSettings}><i className="cog icon"></i>
              Account Settings
            </a>
            <a className="item" onClick={this.editHabits}><i className="clipboard outline icon"></i>
              Habits & Personal Information
            </a>
            <a className="item" onClick={this.editAboutMe}><i className="user icon"></i>
              More About Me
            </a>
            </div>
            <br></br>
            <br></br>
            <img src={user.avatar} className="ui fluid image" alt="Avatar"></img>
            <br></br>
            <br></br>
            </div> 
            : 
            <div>
                <br></br>
                <br></br>
            <h1 className="tealFont">Edit your account</h1>
            </div>
            }
            <br></br>
            {this.state.viewBasicInfo === true ? <EditBasicInfo viewBasicInfo={this.state.viewBasicInfo}/> : null}
            {this.state.viewAccountSettings === true ? <EditLogin deleteUser={this.deleteUser} viewAccountSettings={this.state.viewAccountSettings}/> : null }
            {this.state.viewHabitsAndPersonalInfo === true ? <EditHabitsPersonalInfo viewHabitsAndPersonalInfo={this.state.viewHabitsAndPersonalInfo}/> : null }
            {this.state.viewMoreAboutMe === true ? <EditMoreAboutMe viewMoreAboutMe={this.state.viewMoreAboutMe}/> : null }
            </div>
            </div> 
            </div>
        )
    } else {
        return (
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
        }
        // else if (this.state.deleted === true) {
        //     return ( </Home>
        //     )
        // }
    }
}

const mapStateToProps = state => {
    console.log("edit profile state", state)
    return { currentUser: state.currentUser,
             profiles: state.profiles
             };
  }

export default connect(mapStateToProps, {loggedIn})(EditProfilePage);

