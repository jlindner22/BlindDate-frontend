export const viewProfile = profile => {
    return {
        type: 'VIEW_PROFILE',
        payload: profile
    };
};

export const loggedIn = (profile) => {
    return {
        type: 'LOG_IN',
        payload: profile
    };
};

export const matchProfile = (profile, currentUser) => {
    // console.log("USER MATCH", currentUser.id)
    // console.log("USER PROFILE", profile)
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/matches', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accepts": "application/json",
            },             
            body: JSON.stringify({ 
                user_id: currentUser.id,
                potential_match_id: profile
            })   
            })
            .then(response => response.json())
            .then(data => dispatch({type: 'LIKE_PROFILE', payload : data}))
    }
}

export const getMyMatches = () => {
    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/matches')
       .then(response => response.json())
        .then(matches => {dispatch({type: 'GET_MY_MATCHES', payload: matches })})
    }
}

export const getPreferences = () => {
    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/preferences')
       .then(response => response.json())
        .then(data => {dispatch({type: 'FILTER', payload: data })})
    }
}

export const getAllUsers = () => {
    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/users')
       .then(response => response.json())
        .then(users => {dispatch({type: 'GET_ALL_USERS', payload: users })})
    }
}

export const deleteMatch = (match) => {
    return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/matches/${match}`, {
          method: 'DELETE',
        }).then(response => response.json())
        .then(match => {dispatch({type: 'DELETE_MATCH', payload: match })
    })
    }
}

// export const deleteUser = (user) => {
//     return (dispatch) => {
//     fetch(`http://localhost:3000/api/v1/users/${user}`, {
//           method: 'DELETE',
//         }).then(response => response.json())
//         .then(user => {dispatch({type: 'DELETE_USER', payload: user })
//     })
//     }
// }
