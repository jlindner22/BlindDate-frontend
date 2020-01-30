import React from 'react';
import { connect } from 'react-redux';

const UserDetail = ({selectedProfile}) => {
    if (!selectedProfile) {
// console.log("new props", props)
    return <div> Select a profile </div> 
    } return <div> {selectedProfile.name} </div>
}

const mapStateToProps = state => {
  return { selectedProfile: state.selectedProfile }
}

export default connect(mapStateToProps)(UserDetail);