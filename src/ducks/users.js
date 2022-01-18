import {user} from '../data/users';
// actions
const USER_LOGIN = 'user/Login';
const USER_LOGOUT = 'user/Logout';


// reducer
const initialState = {
    users: {
        user: '',
        rol: ''
    }, // array of product ids
    rol: 'MEX'
};

export default function cart(state = initialState, action = {}) {
    switch (action.type) {
        case USER_LOGIN:
            return loginuser(state, action.payload);
        case USER_LOGOUT:
            return logoutuser(state, action.payload);
        default:
            return state;
    }
}

function loginuser(state, payload) {
    return {
        ...state,
        users: { user: payload.user, rol: payload.rol }
    };
}

function logoutuser(state, payload) {
    return {
        ...state,
        users: { user: '', rol: '' }
    };
}

export function getUsers(state, props) {
    return state;
}

export function logIn(userName, password) {
    console.log(user, password);
    console.log(user);
    let dataUser;
    if (user && password) {
       dataUser = user.find(user => user.password === password && user.username === userName);
    }
    console.log(dataUser);
    return {
        type: USER_LOGIN,
        payload: {
            user: dataUser.username,
            rol: dataUser.role
        }
    }
}

export function logOut(state, props) {
    return {
        type: USER_LOGOUT,
        payload: {
            user: '',
            rol: ''
        }
    }
}