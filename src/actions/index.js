//Action creator

export const viewProfile = profile => {
    //return an action
    return {
        type: 'VIEW_PROFILE',
        payload: profile
    };
};
 