import React from 'react';
import { connect } from 'react-redux';
import { loggedIn } from '../actions';

class EditHabitsPersonalInfo extends React.Component {

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

        return(
            <div>Edit Habits</div>
            // Add form to change avatar
        )
    }


}
    const mapStateToProps = state => {
    console.log("edit profile state", state)
    return { currentUser: state.currentUser,
             profiles: state.profiles
             };
  }

export default connect(mapStateToProps, {loggedIn})(EditHabitsPersonalInfo);
