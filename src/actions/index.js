//Action creators

export const viewProfile = profile => {
    return {
        type: 'VIEW_PROFILE',
        payload: profile
    };
};

export const matchProfile = profile => {
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
            .then( response => response.json())
            .then( data => dispatch({type : 'ADD_PROFILE', payload : data}))
    }
}




// name: this.state.name,
// email: this.state.email,
// avatar: this.state.avatar,
// gender: this.state.gender,
// age: this.state.age,
// phone_number: this.state.phone_number,
// city: this.state.city,
// state: this.state.state, 
// smokes: this.state.smokes,
// drinks: this.state.drinks,
// weed: this.state.weed,
// drugs: this.state.drugs,
// religion: this.state.religion,
// occupation: this.state.occupation,
// college: this.state.college,
// education_level: this.state.education_level,
// kids: this.state.kids,
// relationship_type: this.state.relationship_type,
// politics: this.state.politics,
// have_pets: this.state.have_pets,
// morning_night: this.state.morning_night,
// dress_style: this.state.dress_style,
// messy_neat: this.state.messy_neat,
// general_planning: this.state.general_planning,
// vacation_planning: this.state.vacation_planning,
// vacation_type: this.state.vacation_type,
// cat_dog: this.state.cat_dog,
// coffee_tea: this.state.coffee_tea,
// summer_winter: this.state.summer_winter,
// city_country_suburbs: this.state.city_country_suburbs,
// beach_mountain: this.state.beach_mountain,
// night_out_in: this.state.night_out_in,
// diet: this.state.diet,
// extrovert_introvert: this.state.extrovert_introvert,
// love_language: this.state.love_language,
// music: this.state.music,
// play_instrument: this.state.play_instrument,
// ideal_friday: this.state.ideal_friday