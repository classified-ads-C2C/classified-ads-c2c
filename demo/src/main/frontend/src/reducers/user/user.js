const initialState = {
    user: []
};

const user = (state = initialState, {type, playload}) => {

    switch(type){
        case "ADD_USER":
            return{
                user:[...state.user, playload],
            };

            default:
                return state;
    }
};

export default user;

export const addUser = (user) => {

    return {
        type:"ADD_USER",
        playload: user,
    };
};