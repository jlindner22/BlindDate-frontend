//Action creator

export const viewProfile = profile => {
    //return an action
    return {
        type: 'VIEW_PROFILE',
        payload: profile
    };
};

export const likeProfile = profile => {
    //return an action
    return {
        type: 'LIKE_PROFILE',
        payload: profile
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
                {type: 'GET_ALL_USERS',payload: users })
        })
    }
}
