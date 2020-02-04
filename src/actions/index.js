//Action creators

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
    console.log("USER MATCH", currentUser)
    console.log("USER PROFILE", profile)
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/matches', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accepts": "application/json",
            },             
            body: JSON.stringify({ 
                user_id: currentUser,
                potential_match_id: profile
            })   
            })
            .then(response => response.json())
            .then(data => dispatch({type : 'LIKE_PROFILE', payload : data}))
    }
}

export const getMyMatches = () => {
    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/matches')
       .then(response => response.json())
        .then(matches => {dispatch({type: 'GET_MY_MATCHES', payload: matches })})
    }
}

export const getAllUsers = () => {
    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/users')
       .then(response => response.json())
        .then(users => {dispatch({type: 'GET_ALL_USERS', payload: users })})
    }
}

export const newUser = (user) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/users', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accepts": "application/json",
            },             
            body: JSON.stringify({ 
                name: user.name,
                email: user.email,
                avatar: user.avatar,
                gender: user.gender,
                age: user.age,
                phone_number: user.phone_number,
                city: user.city,
                state: user.state, 
                smokes: user.smokes,
                drinks: user.drinks,
                weed: user.weed,
                drugs: user.drugs,
                religion: user.religion,
                occupation: user.occupation,
                college: user.college,
                education_level: user.education_level,
                kids: user.kids,
                relationship_type: user.relationship_type,
                politics: user.politics,
                have_pets: user.have_pets,
                morning_night: user.morning_night,
                dress_style: user.dress_style,
                messy_neat: user.messy_neat,
                general_planning: user.general_planning,
                vacation_planning: user.vacation_planning,
                vacation_type: user.vacation_type,
                cat_dog: user.cat_dog,
                coffee_tea: user.coffee_tea,
                summer_winter: user.summer_winter,
                city_country_suburbs: user.city_country_suburbs,
                beach_mountain: user.beach_mountain,
                night_out_in: user.night_out_in,
                diet: user.diet,
                extrovert_introvert: user.extrovert_introvert,
                love_language: user.love_language,
                music: user.music,
                play_instrument: user.play_instrument,
                ideal_friday: user.ideal_friday
            })   
            })
            .then(response => response.json())
            .then(data => dispatch({type : 'ADD_PROFILE', payload : data}))
    }
}
