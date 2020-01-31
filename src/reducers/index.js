//return list
//allows for selecting specific thing
import { combineReducers } from 'redux';

//static
const profilesReducer = (users = [], action) => {
    console.log("action", action)
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

const likeProfileReducer = (likedProfiles = [], action) => {
    if (action.type === 'LIKE_PROFILE') {
        return action.payload;
    }
    return likedProfiles;
}

export default combineReducers({
    profiles: profilesReducer,
    selectedProfile: selectProfileReducer,
    likeProfile: likeProfileReducer
})