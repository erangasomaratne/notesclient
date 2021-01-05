import axios from "axios";

export const register = (email, password) => async(dispatch) => {
    try {
        dispatch({ type:"USER_REGISTER_REQUEST"});
        const { data } = await axios.post("https://notes-live.herokuapp.com/api/users", { email, password});
        dispatch({ type:"USER_REGISTER_SUCCESS", payload:data});
        dispatch({ type:"USER_LOGIN_SUCCESS", payload:data});
        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (err) {
        dispatch({ type:"USER_REGISTER_FAIL", payload: err.response && err.response.data.message ? err.response.data.message : err.message})
    }
}

export const login = (email,password) => async(dispatch) => {
    try {
        dispatch({ type:"USER_LOGIN_REQUEST"});
        const { data } = await axios.post("https://notes-live.herokuapp.com/api/login", { email, password});
        dispatch({ type:"USER_LOGIN_SUCCESS", payload:data});
        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (err) {
        dispatch({ type:"USER_LOGIN_FAIL", payload:err.response && err.response.data.message ? err.response.data.message : err.message})
    }
}