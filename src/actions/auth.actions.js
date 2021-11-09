import { authConstants } from './constants';
import axios from '../helpers/axios';

export const login = (user) => {
    console.log(user);

    return async (dispatch) => {

        dispatch({ type: authConstants.LOGIN_REQUEST });
        const res = await axios.post(`/admin/signin`, {
            ...user
        })

        if (res.status === 200) {
            const { token, user } = res.data;
            localStorage.setItem('token', token);
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