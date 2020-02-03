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

// export const newUser = () => {
//     return (dispatch) => {
//         fetch('http://localhost:3000/api/v1/users', {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//               "Accepts": "application/json",
//             },             
//             body: JSON.stringify({ 
//                 name: this.props.name,
// email: this.props.email,
// avatar: this.props.avatar,
// gender: this.props.gender,
// age: this.props.age,
// phone_number: this.props.phone_number,
// city: this.props.city,
// state: this.props.state, 
// smokes: this.props.smokes,
// drinks: this.props.drinks,
// weed: this.props.weed,
// drugs: this.props.drugs,
// religion: this.props.religion,
// occupation: this.props.occupation,
// college: this.props.college,
// education_level: this.props.education_level,
// kids: this.props.kids,
// relationship_type: this.props.relationship_type,
// politics: this.props.politics,
// have_pets: this.props.have_pets,
// morning_night: this.props.morning_night,
// dress_style: this.props.dress_style,
// messy_neat: this.props.messy_neat,
// general_planning: this.props.general_planning,
// vacation_planning: this.props.vacation_planning,
// vacation_type: this.props.vacation_type,
// cat_dog: this.props.cat_dog,
// coffee_tea: this.props.coffee_tea,
// summer_winter: this.props.summer_winter,
// city_country_suburbs: this.props.city_country_suburbs,
// beach_mountain: this.props.beach_mountain,
// night_out_in: this.props.night_out_in,
// diet: this.props.diet,
// extrovert_introvert: this.props.extrovert_introvert,
// love_language: this.props.love_language,
// music: this.props.music,
// play_instrument: this.props.play_instrument,
// ideal_friday: this.props.ideal_friday
//              })
//             .then(
//                 response => dispatch({type : 'ADD_PROFILE', payload : response}),
//             )  
//         })
//     }
// }



// .then(res => res.json())
// .then(data => {
    //       this.setState ({
        //           myProfile: [...this.state.myProfile, data]
        //       })
        //           this.props.history.push('/myprofile');
        //   }
        // )}


// export const newProfile = (someValue) => {
//     return (dispatch, getState) => {
//         dispatch({type : "REQUEST_STARTED"});

//         myAjaxLib.post("/someEndpoint", {data : someValue})
//             .then(
//                 response => dispatch({type : "REQUEST_SUCCEEDED", payload : response}),
//             );    
//     };
// }




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