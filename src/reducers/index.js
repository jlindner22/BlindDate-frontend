import { combineReducers } from 'redux';

const profilesReducer = (profiles = [], action) => {
    if (action.type === 'GET_ALL_USERS') {
        return action.payload;
    }
    return profiles;
}

const matchesReducer = (matches = [], action) => {
        console.log("action", action)
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

// const deleteUserReducer = (state = [], action) => {
//     if (action.type === 'DELETE_USER') {
//         console.log("users", state)
// 	return state.filter(user => user !== action.payload)
//     }	
//     return state
// }

// const userBasicInfoReducer = (user = [], action) => {
//     if (action.type === 'ADD_PROFILE') {
//         return action.payload;
//     }
//     return user;
// }

const selectProfileReducer = (profile = null, action) => {
    if (action.type === 'VIEW_PROFILE') {
        return action.payload;
    }
    return profile;
}

const filterReducer = (filters = [], action) => {
    if (action.type === 'FILTER') {
        return action.payload;
    }
    return filters;
}

const likeProfileReducer = (likedProfiles = [], action) => {
    if (action.type === 'LIKE_PROFILE') {
        return [...likedProfiles, action.payload]
    }
    return likedProfiles;
}

const logInReducer = (currentUser = null, action) => {
    // console.log("current user", currentUser)
    if (action.type === 'LOG_IN') {
        return action.payload
    }
    return currentUser;
}

export default combineReducers({
    profiles: profilesReducer,
    selectedProfile: selectProfileReducer,
    likeProfile: likeProfileReducer,
    // userBasicInfo: userBasicInfoReducer,
    currentUser: logInReducer,
    matches: matchesReducer,
    deleteMatch: deleteMatchReducer,
    preferences: filterReducer,
    // deleteUser: deleteUserReducer
})