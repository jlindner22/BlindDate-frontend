//return state + action

import { combineReducers } from 'redux';

const profilesReducer = (profiles = [], action) => {
    if (action.type === 'GET_ALL_USERS') {
        return action.payload;
    }
    return profiles;
}

const matchesReducer = (matches = [], action) => {
        console.log("match action", action)
    if (action.type === 'GET_MY_MATCHES') {
        return action.payload;
        // return [...matches, action.payload]
    }
    return matches;
}

const newUserReducer = (user = [], action) => {
    // console.log("action", action)
    if (action.type === 'ADD_PROFILE') {
        return action.payload;
    }
    return user;
}

const selectProfileReducer = (profile = null, action) => {
    if (action.type === 'VIEW_PROFILE') {
        return action.payload;
    }
    return profile;
}

const likeProfileReducer = (likedProfiles = [], action) => {
    if (action.type === 'LIKE_PROFILE') {
        return [...likedProfiles, action.payload]
    }
    return likedProfiles;
}

const logInReducer = (currentUser = 5, action) => {
    if (action.type === 'LOG_IN') {
        return {...currentUser, [action.payload.id]: action.payload}
        // return action.payload
    }
    return currentUser;
}

export default combineReducers({
    profiles: profilesReducer,
    selectedProfile: selectProfileReducer,
    likeProfile: likeProfileReducer,
    newUser: newUserReducer,
    currentUser: logInReducer,
    matches: matchesReducer
})