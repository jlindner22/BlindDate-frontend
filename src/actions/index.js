//Action creator

export const viewProfile = profile => {
    return {
        type: 'VIEW_PROFILE',
        payload: profile
    };
};

export const likeProfile = profile => {
    return {
        type: 'LIKE_PROFILE',
        payload: profile
    };
};

export const seeMoreInfo = () => {
    return {
        type: 'SEE_MORE_INFO',
    };
};

// export const getAllUsers = (users) => {
//     console.log('ARE WE HERE', users)
//     console.log("users", users)
//     return {
//         type: 'GET_ALL_USERS',
//         payload: users
//     };
// };

export const getAllUsers = () => {
return (dispatch) => {
    fetch('http://localhost:3000/api/v1/users')
       .then(response => response.json())
        .then(users => {
            dispatch(
                {type: 'GET_ALL_USERS', payload: users })
        })
    }
}

// const LIKE = "LIKE";
// const DISLIKE = "DISLIKE";
// const TOGGLE = "TOGGLE";
// const HANDLE_CHANGE = "HANDLE_CHANGE";
// const ADD_TEXT = "ADD_TEXT";
// const RAINBOW = "RAINBOW";

// const likeCreator = () => ({type: LIKE})
// const dislikeCreator = () => ({type: DISLIKE})
// const toggleCreator = () => ({type: TOGGLE})
// const handleChangeCreator = (text) =>({type: HANDLE_CHANGE, payload: { text }})
// const addTextCreator = () => ({type: ADD_TEXT})
// const rainbowCreator = () => ({type: RAINBOW})

// export {
//     likeCreator, 
//     dislikeCreator,
//     toggleCreator,
//     handleChangeCreator,
//     addTextCreator,
//     rainbowCreator
// }