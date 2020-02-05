import { combineReducers } from 'redux';

const profilesReducer = (profiles = [], action) => {
    if (action.type === 'GET_ALL_USERS') {
        return action.payload;
    }
    return profiles;
}

const matchesReducer = (matches = [], action) => {
        console.log("action", action)
        // console.log("reducer state", matches)
    if (action.type === 'GET_MY_MATCHES') {
        return action.payload;
    }
    return matches;
}

const deleteMatchReducer = (state = [], action) => {
    if (action.type === 'DELETE_MATCH') {
        console.log("matches", state)
	return state.filter(match => match !== action.payload)
    }	
    return state
}

// same as above
// const deleteMatchReducer = (state = {matches: [],}, action) => {
//     if (action.type === 'DELETE_MATCH') {
//         console.log("matches", state)
//     return state.matches.filter(match => match.id !== action.payload)
//     }	
//     return state
// }


// const deleteMatchReducer  = (match = [], action) => {
//     console.log("reducer state", action)

//     if (action.type === 'DELETE_MATCH') {
//   return action.payload;
// //   {...match, match: [match.filter(matches => matches.id !== action.id)]}
//     }
//     return match
// }


const newUserReducer = (user = [], action) => {
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
    }
    return currentUser;
}

export default combineReducers({
    profiles: profilesReducer,
    selectedProfile: selectProfileReducer,
    likeProfile: likeProfileReducer,
    newUser: newUserReducer,
    currentUser: logInReducer,
    matches: matchesReducer,
    deleteMatch: deleteMatchReducer
})