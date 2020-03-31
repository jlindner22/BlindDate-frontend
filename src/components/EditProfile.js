import React from 'react';
import { connect } from 'react-redux';
import { loggedIn } from '../actions';

class EditProfile extends React.Component {

    state = {
        profileInfo: this.props.currentUser
      }

    componentDidMount() {
        window.scrollTo(0, 0)
        if (this.props.currentUser){
          fetch(`http://localhost:3000/api/v1/users/${this.props.currentUser.id}`)
            .then(response => response.json())
            .then(response => this.setState({ profileInfo: response}))
        } else {return null}
    }

    render() {
        console.log("PROPS", this.props.currentUser)
        let user = this.props.currentUser
        if (user) {
            return (
            <div>
                <h1>Edit Your Account</h1>
                Jen is {user.name}
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

export default connect(mapStateToProps, {loggedIn})(EditProfile);
