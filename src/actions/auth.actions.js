import { authConstants } from './constants';
import axios from '../helpers/axios';

export const login = (user) => {
    console.log(user);

    return async (dispatch) => {

        dispatch({ type: authConstants.LOGIN_REQUEST });
        const res = await axios.post(`/signin`, {
            ...user
        })

        if (res.status === 200) {
            const { token, user } = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            });
        }
        else {
            if (res.status === 400) {
                dispatch({
                    type: authConstants.LOGIN_FAILURE,
                    payload: { error: res.data.error }
                })
            }
        }


    }
}
export const signup = (user) => {
    console.log(user);

    return async (dispatch) => {

        dispatch({ type: authConstants.LOGIN_REQUEST });
        const res = await axios.post(`/signup`, {
            ...user,
            
        })
        

        if (res.status === 201) {
            const {  token , message} = res.data;
            console.log(user, message)
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, message,  user
                }
            });
        }
        else {
            console.log('else',user);
            if (res.status === 400) {
                dispatch({
                    type: authConstants.LOGIN_FAILURE,
                    payload: { error: res.data.error }
                })
            }
        }


    }
}

 export const isUserLoggedIn = () =>{
    return async dispatch  => {
        const token = localStorage.getItem('token');
        if(token){
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            });
        }else{
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: { error: 'Failet to login ' }
            })
        }
    }
}

export const signout = () =>{
    return async dispatch =>{
        localStorage.clear();
        dispatch({
            type: authConstants.LOGOUT_REQUEST
        });
    }
}