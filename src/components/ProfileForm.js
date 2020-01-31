import React from 'react';

class ProfileForm extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }
    
      state = {
        name: '',
        firstPartComplete: false,
        secondPartComplete: false,
        thirdPartComplete: false,

    }

    goToSecondPage = () => {
        this.setState({
            firstPartComplete: true
        })
      }

      goToThirdPage = () => {
        this.setState({
            secondPartComplete: true
        })
      }

      goToFourthPage = () => {
        this.setState({
            thirdPartComplete: true
        })
      }

      handleText = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        // , ()=>console.log("button clicked", this.state.clickedInfoButton))
      }

  render() {
      console.log(this.state.firstPartComplete)
      if (this.state.firstPartComplete == false) {
    return (
      <div className="ui container grid">
          <div className="ui row">
    <form className="ui form">
  <h4 className="ui dividing header">Basic Information</h4>
  <div className="field">
    <div className="two fields">
      <div className="field">
        <input type="text" name="name" placeholder="First Name"></input>
      </div>
      <div className="field">
        <input type="text" name="age" placeholder="Age"></input>
      </div>
      <select className="ui fluid dropdown">
    <option value="">Gender</option>
    <option value="Female">Female</option>
    <option value="Male">Male</option>
    </select>
    </div>
  </div>
  <div className="field">
    <label>Contact Information</label>
    <div className="fields">
      <div className="ten wide field">
        <input type="text" name="email" placeholder="Email"></input>
      </div>
      <div className="ten wide field">
        <input type="text" name="phone_number" placeholder="Phone Number (no spaces or symbols)"></input>
      </div>
    </div>
  </div>
  <div className="field">
      <label>Current Location</label>
      <div className="fields">
    <div className="eight wide field">
      <input type="text" name="city" placeholder="City"></input>
        </div>
      <select className="ui fluid dropdown">
    <option value="">State</option>
    <option value="AL">Alabama</option>
    <option value="AK">Alaska</option>
    <option value="AZ">Arizona</option>
    <option value="AR">Arkansas</option>
    <option value="CA">California</option>
    <option value="CO">Colorado</option>
    <option value="CT">Connecticut</option>
    <option value="DE">Delaware</option>
    <option value="DC">District Of Columbia</option>
    <option value="FL">Florida</option>
    <option value="GA">Georgia</option>
    <option value="HI">Hawaii</option>
    <option value="ID">Idaho</option>
    <option value="IL">Illinois</option>
    <option value="IN">Indiana</option>
    <option value="IA">Iowa</option>
    <option value="KS">Kansas</option>
    <option value="KY">Kentucky</option>
    <option value="LA">Louisiana</option>
    <option value="ME">Maine</option>
    <option value="MD">Maryland</option>
    <option value="MA">Massachusetts</option>
    <option value="MI">Michigan</option>
    <option value="MN">Minnesota</option>
    <option value="MS">Mississippi</option>
    <option value="MO">Missouri</option>
    <option value="MT">Montana</option>
    <option value="NE">Nebraska</option>
    <option value="NV">Nevada</option>
    <option value="NH">New Hampshire</option>
    <option value="NJ">New Jersey</option>
    <option value="NM">New Mexico</option>
    <option value="NY">New York</option>
    <option value="NC">North Carolina</option>
    <option value="ND">North Dakota</option>
    <option value="OH">Ohio</option>
    <option value="OK">Oklahoma</option>
    <option value="OR">Oregon</option>
    <option value="PA">Pennsylvania</option>
    <option value="RI">Rhode Island</option>
    <option value="SC">South Carolina</option>
    <option value="SD">South Dakota</option>
    <option value="TN">Tennessee</option>
    <option value="TX">Texas</option>
    <option value="UT">Utah</option>
    <option value="VT">Vermont</option>
    <option value="VA">Virginia</option>
    <option value="WA">Washington</option>
    <option value="WV">West Virginia</option>
    <option value="WI">Wisconsin</option>
    <option value="WY">Wyoming</option>
      </select>
    </div>
  </div>
    <button className="ui basic button right floated" onClick={this.goToSecondPage}>
        Next Page
    </button>
</form>
</div>
      </div>
    )
    } else if (this.state.firstPartComplete == true) 
    //second page starts here
        { return (
            <div className="ui container grid">
            <div className="ui row">
      <form className="ui form">
            <h4 className="ui dividing header">About Me</h4>
  <div className="field">
    <label>What I'm Looking For: </label>
    <div className="fields">
      <div className="field">
        <select className="ui fluid dropdown">
    <option value=""></option>
    <option value="Business/Networking">Business/Networking</option>
    <option value="Companion">Companion</option>
    <option value="Dating">Dating</option>
    <option value="Friendship">Friendship</option>
    <option value="Hookups">Hookups</option>
    <option value="Long-Term Relationshp">Long-Term Relationshp</option>
    <option value="Marriage">Marriage</option>
    <option value="Not Sure">Not Sure</option>
    <option value="Unspecified">Unspecified</option>
        </select>
    </div>
    </div>
    </div>

    <div className="field">
    <label>The religion I most strongly identify with: </label>
    <div className="fields">
      <div className="field">
        <select className="ui fluid dropdown">
    <option value=""></option>
    <option value="Agnostic">Agnostic</option>
    <option value="Atheist">Atheist</option>
    <option value="Buddhist">Buddhist</option>
    <option value="Catholic">Catholic</option>
    <option value="Christian">Christian</option>
    <option value="Hindu">Hindu</option>
    <option value="Jewish">Jewish</option>
    <option value="Other">Other</option>
    <option value="Spiritual">Spiritual</option>
    <option value="Prefer Not to Say">Prefer Not to Say</option>
        </select>
    </div>
    </div>
    </div>

    <div className="field">
    <label>Politically, my views are: </label>
    <div className="fields">
      <div className="field">
        <select className="ui fluid dropdown">
    <option value=""></option>
    <option value="Conservative">Conservative</option>
    <option value="Liberal">Liberal</option>
    <option value="Moderate">Moderate</option>
    <option value="Other">Other</option>
    <option value="Prefer Not to Say">Prefer Not to Say</option>
        </select>
    </div>
    </div>
    </div>

    <div className="field">
    <label>My highest level of education attained is: </label>
    <div className="fields">
      <div className="field">
        <select className="ui fluid dropdown">
    <option value=""></option>
    <option value="Some High School">Some High School</option>
    <option value="High School Diploma/GED">High School Diploma/GED</option>
    <option value="Some College">Some College</option>
    <option value="Associate's Degree">Associate's Degree</option>
    <option value="Bachelor's Degree">Bachelor's Degree</option>
    <option value="Master's Degree or Higher">Master's Degree or Higher</option>
        </select>
    </div>
    </div>
    </div>




            
        <button className="ui basic button right floated" onClick={this.goToThirdPage}>
        Next Page
        </button>
        </form>
        </div>
        </div>



        )}

//second page ends here




    // else if (this.state.firstPartComplete === true && this.state.secondPartComplete === true) 
    // { return (
    // <div>ho </div>
    // )}  
    
    

  }
}

// const mapStateToProps = state => {
//     console.log("detail state", state)
//   return { selectedProfile: state.selectedProfile }
// }

export default ProfileForm;
// connect(mapStateToProps)(ProfileForm);  

//submit button, to be used eventually
{/* <div className="ui submit button">Submit</div>  */}
