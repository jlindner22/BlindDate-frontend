import React from 'react';
import { connect } from 'react-redux';
import { loggedIn } from '../actions';
import EditBasicInfo from './EditBasicInfo';
import EditLogin from './EditLogin';

class EditProfilePage extends React.Component {

    state = {
        profileInfo: this.props.currentUser,
        viewBasicInfo: false,
        viewAccountSettings: false
      }

    componentDidMount() {
        window.scrollTo(0, 0)
        if (this.props.currentUser){
          fetch(`http://localhost:3000/api/v1/users/${this.props.currentUser.id}`)
            .then(response => response.json())
            .then(response => this.setState({ profileInfo: response}))
        } else {return null}
    }

    editBasicInfo = e => {
        this.setState({
            viewAccountSettings: false,
            viewBasicInfo: true
            })
        }
    
    editAccountSettings = e => {
        this.setState({
            viewBasicInfo: false,
            viewAccountSettings: true
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
                {this.state.viewBasicInfo === false && this.state.viewAccountSettings === false ?
                <div className="ui top attached tabular menu">
            <a className="item" onClick={this.editBasicInfo}>
              Basic Information
            </a>
            <a className="item" onClick={this.editAccountSettings}>
              Account Settings
            </a>
            </div> : <h1>Edit Your Account</h1>}
            <br></br>
            {this.state.viewBasicInfo === true ? <EditBasicInfo viewBasicInfo={this.state.viewBasicInfo}/> : null}
            {this.state.viewAccountSettings === true ? <EditLogin viewAccountSettings={this.state.viewAccountSettings}/> : null}
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


