import React from 'react';
import { connect } from 'react-redux';
import { loggedIn } from '../actions';

class EditLogin extends React.Component {

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

    reload = () => {
        window.location.reload();
    }

    render() {
        let props = this.props.currentUser

        return(
            <div>
                <br></br>
                <h1>Edit Your Personal Information</h1>
                <div className="ui container grid">
                <div className="ui row">
                <div className="stolenright">
              <img className="ui medium bordered image" src={props.avatar} alt="Oops, this image is broken!"/>
              </div>
                <form className="ui form" onSubmit={(e) => this.userBasicInfo(this.props.user, e)}>
                    <br></br>

                                <input type="text" name="age" placeholder="Age" value={props.age} onChange={this.handleText}></input>
                                <br></br>
                                <br></br>
                                <select className="ui fluid dropdown" name="gender" onChange={this.handleText} value={props.gender}>
                                <option value="">Gender</option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                                </select>
                                <br></br>
                        <div className="field">
                        <label>Current Location</label>
                            <div className="fields">
                            <div className="eight wide field">
                                <input type="text" name="city" placeholder="City" onChange={this.handleText} value={props.city}></input>
                            </div>
                                <select className="ui fluid dropdown" name="state" onChange={this.handleText} value={props.state}>
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
                            </div>
                    </div>
                <button className="ui basic blue button left floated" onClick={this.reload}>Go back</button>
                <input className="ui basic blue button right floated" type="submit" value="Save Changes" ></input>
                <br></br>
                </form>
                <br></br>
                </div>
                <button className="ui basic blue button">Change Avatar</button>
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

export default connect(mapStateToProps, {loggedIn})(EditLogin);
