import React from 'react';
import { connect } from 'react-redux';
import { loggedIn } from '../actions';

class EditAvatar extends React.Component {

    state = {
        profileInfo: this.props.currentUser,
        avatar: this.props.currentUser.avatar
      }

    componentDidMount() {
        window.scrollTo(0, 0)
        if (this.props.currentUser){
          fetch(`http://localhost:3000/api/v1/users/${this.props.currentUser.id}`)
            .then(response => response.json())
            .then(response => this.setState({ profileInfo: response}))
        } else {return null}
    }

    handleSubmit = (user, e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/api/v1/users/${user}`,{
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            },
            body: JSON.stringify({
            avatar: this.state.avatar,
            })
        }) .then(response => response.json())
        .then(response => console.log(response))
        alert("Your changes have been submitted!")
        window.location.reload();
    }

    handleText = e => {
        this.setState({
            [e.target.name]: e.target.value
          }, console.log(e.target.value)
          )
    }

    render() {

        return (
            <div>
                <br></br>
                <div className="ui row"> 
                <div className="ui form">
                <b>Choose your avatar</b> <input type="text" name="avatar" placeholder="Avatar" onChange={this.handleText} value={this.state.age}></input>        
                <br></br>
                <br></br>
                </div>
                <input className="ui teal button right floated" type="submit" value="Save Changes" onClick={(e) => this.handleSubmit(this.props.currentUser.id, e)}/>
                 </div>
                 </div>
        )
    }


}
    const mapStateToProps = state => {
    console.log("edit profile state", state)
    return { currentUser: state.currentUser,
             profiles: state.profiles
             };
  }

export default connect(mapStateToProps, {loggedIn})(EditAvatar);
