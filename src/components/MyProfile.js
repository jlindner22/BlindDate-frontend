import React from 'react';
// import { newUser } from '../actions';
// import { connect } from 'react-redux';

class MyProfile extends React.Component {

    render() {
        // console.log("my profile props", this.props)
        // console.log("new user", this.props.newUser)
        return (
            <div>My Profile!!! Yay!!</div>
        )
    }
}

// const mapStateToProps = state => {
//     console.log("state", state)
//     return  { newUser: state.newUser};
//   }

  export default MyProfile
// export default connect(mapStateToProps, newUser)(MyProfile);