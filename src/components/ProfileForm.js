import React from 'react';

class ProfileForm extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }
    
      state = {
        name: '',
        firstPartComplete: false,

    }

    goToSecondPage = () => {
        this.setState({
            firstPartComplete: !this.state.firstPartComplete
        })
        // , ()=>console.log("button clicked", this.state.clickedInfoButton))
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


    {/* <div>

  <h4 className="ui dividing header">About Me</h4>
  <div className="field">
    <label>Card Type</label>
    <div className="ui selection dropdown">
      <input type="hidden" name="card[type]"></input>
      <div className="default text">Type</div>
      <i className="dropdown icon"></i>
      <div className="menu">
        <div className="item" data-value="visa">
          <i className="visa icon"></i>
          Visa
        </div>
        <div className="item" data-value="amex">
          <i className="amex icon"></i>
          American Express
        </div>
        <div className="item" data-value="discover">
          <i className="discover icon"></i>
          Discover
        </div>
      </div>
    </div>
  </div>
  <div className="fields">
    <div className="seven wide field">
      <label>Card Number</label>
      <input type="text" name="card[number]" maxlength="16" placeholder="Card #"></input>
    </div>
    <div className="three wide field">
      <label>CVC</label>
      <input type="text" name="card[cvc]" maxlength="3" placeholder="CVC"></input>
    </div>
    <div className="six wide field">
      <label>Expiration</label>
      <div className="two fields">
        <div className="field">
          <select className="ui fluid search dropdown" name="card[expire-month]">
            <option value="">Month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <div className="field">
          <input type="text" name="card[expire-year]" maxlength="4" placeholder="Year"></input>
        </div>
      </div>
    </div>
  </div>
  <div className="ui submit button">Submit</div> */}
    {/* </div> */}
</form>
</div>
      </div>
    )
    } 
    else { return (
    <div>hi </div>
    )}  
    
    
    
  }
}

// const mapStateToProps = state => {
//     console.log("detail state", state)
//   return { selectedProfile: state.selectedProfile }
// }

export default ProfileForm;
// connect(mapStateToProps)(ProfileForm);