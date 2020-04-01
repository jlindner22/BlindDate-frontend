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
                <div class="ui top attached tabular menu">
            <a class="active item" onClick={this.editBasicInfo}>
              Basic Information
            </a>
            <a class="item" onClick={this.editAccountSettings}>
              Account Settings
            </a>
            </div>
            <br></br>
            {this.state.viewBasicInfo === true ? <EditBasicInfo/> : null}
            {this.state.viewAccountSettings === true ? <EditLogin/> : null}
            {/* <div class="right menu">
              <div class="item">
                <div class="ui transparent icon input">
              </div>
            </div>
          </div> */}
          {/* <div class="ui bottom attached segment">
            <p></p>
          </div> */}
               </div>
               </div>
            </div>
        )
    } else {
        return "Please log in to view your profile"
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


