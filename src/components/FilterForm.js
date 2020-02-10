import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class FilterForm extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }

      render() {
        console.log("filter form props", this.props)
        
        return (
            <div className="ui container grid">
                <div className="ui row">
                <div className="column eight wide">
                   <h1>FILTER FORM</h1> 
              <br></br>
              <select className="ui fluid dropdown" name="gender" onChange={this.genderChange} value={this.state.gender}>
                                <option value="">Gender</option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                                </select>
            </div>
            </div>
            </div>
        )
      }

    }

    const mapStateToProps = state => {
        console.log("filters state", state)
        return  { currentUser: state.currentUser,
                  preferences: state.preferences
                };
    }

    export default connect(mapStateToProps)(FilterForm);
