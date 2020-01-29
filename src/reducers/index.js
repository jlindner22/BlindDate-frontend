//return list
//allows for selecting specific thing

import { combineReducers } from 'redux';

//static
const profilesReducer = () => {
    return [
        { name: 'adf', city: "isf"},
        { name: 'sddfb', city: "sdf"}
    ]
}

//dynamic
const selectProfileReducer = (profile = null, action) => {
    if (action.type == 'VIEW_PROFILE') {
        return action.payload;
    
    }
    return profile;
}

export default combineReducers({
    profiles: profilesReducer,
    selectedProfile: selectProfileReducer
})