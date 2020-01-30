//return list
//allows for selecting specific thing

import { combineReducers } from 'redux';


//static
const profilesReducer = (users = [], action) => {
    // console.log("ARE WE IN REDUCER")
    // console.log("action", action)
    if (action.type === 'GET_ALL_USERS') {
        return action.payload;
    }
    return users;
}

//dynamic
const selectProfileReducer = (profile = null, action) => {
    if (action.type === 'VIEW_PROFILE') {
        return action.payload;
    }
    return profile;
}

const likeProfileReducer = (profile = [], action) => {
    if (action.type === 'LIKE_PROFILE') {
        return action.payload;
    }
    return profile;
}

export default combineReducers({
    profiles: profilesReducer,
    selectedProfile: selectProfileReducer,
    likeProfile: likeProfileReducer
})