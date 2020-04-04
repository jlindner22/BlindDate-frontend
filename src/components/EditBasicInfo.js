import React from 'react';
import { connect } from 'react-redux';
import { loggedIn } from '../actions';
import EditAvatar from './EditAvatar';

class EditBasicInfo extends React.Component {

    state = {
        profileInfo: this.props.currentUser,
        avatarClicked: false,
        age: this.props.currentUser.age,
        gender: this.props.currentUser.gender,
        city: this.props.currentUser.city,
        state: this.props.currentUser.state
      }

    componentDidMount() {
        window.scrollTo(0, 0)
        if (this.props.currentUser){
          fetch(`http://localhost:3000/api/v1/users/${this.props.currentUser.id}`)
            .then(response => response.json())
            .then(response => this.setState({ profileInfo: response}))
        } else {return null}
    }
    
    reload = () => {
        window.location.reload();
    }

    handleBackClick = () => {
        this.setState({
            viewBasicInfo: false
        })
    }

    avatarClicked = () => {
        this.setState({
            avatarClicked: !this.state.avatarClicked
        })
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
            gender: this.state.gender,
            age: this.state.age,
            city: this.state.city,
            state: this.state.state,
            })
        }) .then(response => response.json())
        .then(response => console.log(response))
        alert("Your changes have been submitted!")
    }

    handleText = e => {
        this.setState({
            [e.target.name]: e.target.value
          }, console.log(e.target.value)
          )
    }

    render() {
        let props = this.props.currentUser
        return (
            <div>
                <br></br>
                <h2 className="centerText grayFont"> Personal Information</h2>
                <div className="ui container grid">
                <div className="ui row">
                <div className="stolenright">
              <img className="ui medium bordered image" src={props.avatar} alt="Oops, this image is broken!"/>
              <br></br>
              <br></br>
              {this.state.avatarClicked === false ? <button className="ui blue button" onClick={this.avatarClicked}>Change Avatar</button>
              : <button className="ui blue button" onClick={this.avatarClicked}>Go Back</button>}
              </div>
                {this.state.avatarClicked === true ? <EditAvatar/> :
                <form className="ui form" onSubmit={(e) => this.handleSubmit(props.id, e)}>
                    <br></br>
                    <b>Age</b> <input type="text" name="age" placeholder="Age" onChange={this.handleText} value={this.state.age}></input>
                    <br></br>
                    <br></br>
                    <b>Gender</b>
                    <select className="ui fluid dropdown" name="gender" onChange={this.handleText} value={this.state.gender}>
                    <option value="">Gender</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    </select>
                    <br></br>
                    <b>City</b>
                    <br></br>
                    <input type="text" name="city" placeholder="City" onChange={this.handleText} value={this.state.city}></input>
                    <br></br>
                    <br></br>
                    <b>State</b>
                    <select className="ui fluid dropdown" name="state" onChange={this.handleText} value={this.state.state}>
                                <option value="">State</option>
                                <option value="Alabama">Alabama</option>
                                <option value="Alaska">Alaska</option>
                                <option value="Arizona">Arizona</option>
                                <option value="Arkansas">Arkansas</option>
                                <option value="California">California</option>
                                <option value="Colorado">Colorado</option>
                                <option value="Connecticut">Connecticut</option>
                                <option value="Delaware">Delaware</option>
                                <option value="District Of Columbia">District Of Columbia</option>
                                <option value="Florida">Florida</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Hawaii">Hawaii</option>
                                <option value="Idaho">Idaho</option>
                                <option value="Illinois">Illinois</option>
                                <option value="Indiana">Indiana</option>
                                <option value="Iowa">Iowa</option>
                                <option value="Kansas">Kansas</option>
                                <option value="Kentucky">Kentucky</option>
                                <option value="Louisiana">Louisiana</option>
                                <option value="Maine">Maine</option>
                                <option value="Maryland">Maryland</option>
                                <option value="Massachusetts">Massachusetts</option>
                                <option value="Michigan">Michigan</option>
                                <option value="Minnesota">Minnesota</option>
                                <option value="Mississippi">Mississippi</option>
                                <option value="Missouri">Missouri</option>
                                <option value="Montana">Montana</option>
                                <option value="Nebraska">Nebraska</option>
                                <option value="Nevada">Nevada</option>
                                <option value="New Hampshire">New Hampshire</option>
                                <option value="New Jersey">New Jersey</option>
                                <option value="New Mexico">New Mexico</option>
                                <option value="New York">New York</option>
                                <option value="North Carolina">North Carolina</option>
                                <option value="orth Dakota">North Dakota</option>
                                <option value="Ohio">Ohio</option>
                                <option value="Oklahoma">Oklahoma</option>
                                <option value="Oregon">Oregon</option>
                                <option value="Pennsylvania">Pennsylvania</option>
                                <option value="hode Island">Rhode Island</option>
                                <option value="South Carolina">South Carolina</option>
                                <option value="South Dakota">South Dakota</option>
                                <option value="Tennessee">Tennessee</option>
                                <option value="Texas">Texas</option>
                                <option value="Utah">Utah</option>
                                <option value="Vermont">Vermont</option>
                                <option value="Virginia">Virginia</option>
                                <option value="Washington">Washington</option>
                                <option value="West Virginia">West Virginia</option>
                                <option value="Wisconsin">Wisconsin</option>
                                <option value="Wyoming">Wyoming</option>
                                </select>
                <br></br>
                <br></br>
                <input className="ui basic teal button left floated" type="button" value="Go Back" onClick={this.reload}/>
                <input className="ui teal button right floated" type="submit" value="Save Changes" onClick={this.reload}/>
                <br></br>
                </form> }
                </div>
                {/* <button className="ui green button">Change Avatar</button> */}
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
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

export default connect(mapStateToProps, {loggedIn})(EditBasicInfo);
