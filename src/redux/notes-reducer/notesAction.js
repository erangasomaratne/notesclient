import axios from 'axios';

export const listUsers = () => async (dispatch) => {
    try {
        dispatch({ type:"USER_LIST_REQUEST"})
        const { data } = await axios.get("https://notes-live.herokuapp.com/api/movies");
        
        dispatch({ type:"USER_LIST_SUCCESS", payload: data });
    } catch (err) {
        dispatch({ type:"USER_LIST_FAIL", payload:err.response && err.data.message ? err.response.message : err.message });
    }
};

export const addReview = (movieName, review) => async(dispatch) => {
    try {
        dispatch({ type:"REVIEW_CREATE_REQUEST"});
        const { data } = await axios.post("https://notes-live.herokuapp.com/api/moviereviews", {movieName, review});
        dispatch({ type:"REVIEW_CREATE_SUCCESS", payload: data });
    } catch (err) {
        dispatch({ type:"REVIEW_CREATE_FAIL", payload:err.response && err.data.message ? err.response.message : err.message })
    }
}

export const deleteMovie = id => async(dispatch) => {
    try {
        dispatch({ type:"MOVIE_DELETE_REQUEST"});
        await axios.delete(`https://notes-live.herokuapp.com/api/movies/${id}`);
        dispatch({ type:"MOVIE_DELETE_SUCCESS"});
        
    } catch (err) {
        dispatch({
            type:"MOVIE_DELETE_FAIL",
            payload:err.response && err.data.message ? err.response.message : err.message
        })
    }
}

export const updateMovie = movie => async(dispatch) => {
    try {
        dispatch({ type:"MOVIE_UPDATE_REQUEST"});
        const { data } = await axios.put(`https://notes-live.herokuapp.com/api/movies/${movie.id}`, movie);
        dispatch({ type:"MOVIE_UPDATE_SUCCESS", payload:data});
        
    } catch (err) {
        dispatch({type:"MOVIE_UPDATE_FAIL", payload:err.response && err.data.message ? err.response.message : err.message})
    }
}


