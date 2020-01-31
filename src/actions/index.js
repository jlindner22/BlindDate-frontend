//Action creators

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
