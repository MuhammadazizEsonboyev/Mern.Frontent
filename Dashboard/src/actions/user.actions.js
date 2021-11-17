import { authConstants, userContants } from './constants';
import axios from '../helpers/axios';

export const signup = (user) => {
    console.log(user);

    return async (dispatch) => {

        dispatch({ type: userContants.USER_REGISTER_REQUEST});
        const res = await axios.post(`/signup`, {
            ...user
        })

        if (res.status === 201) {
            const { message } = res.data;
            dispatch({
                type: userContants.USER_REGISTER_SUCCESS,
                payload: {message}
            });
        }
        else {
            if (res.status === 400) {
                dispatch({
                    type: userContants.USER_REGISTER_FAILURE,
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