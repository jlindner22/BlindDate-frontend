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

// let defaultState = {
//     profile: null,
//     likedProfiles: [],
//     users: [],
//   }

// let reducers = (prevState=defaultState, action) => {
//     switch(action.type){
//         case 'GET_ALL_USERS': 
//           return {...prevState, users: action.payload}
//         case 'VIEW_PROFILE': 
//           return {...prevState, profile: action.payload}
//         case 'LIKE_PROFILE': 
//           return {...prevState, likedProfiles: action.payload }
//         // case 'HANDLE_CHANGE': 
//           // return {...prevState, ...action.payload }
//           // DO YOUR CALCULATIONS HERE
//         //   return {...prevState, text: action.payload.text }
//         default: 
//           return {...prevState}
//     }
// }

// export default reducers;