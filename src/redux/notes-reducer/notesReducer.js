const INITIAL_STATE = {    
        users :[]    
};


export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "USER_LIST_REQUEST":
            return {
                loading:true,
                users:[]
            }
        case "USER_LIST_SUCCESS":   
            return {
                loading:false,
                users:action.payload
            }

        case "USER_LIST_FAIL":
            return {
                loading:false,
                error:action.payload
            }
           
    
        default:
            return state;
    }
}

export const reviewReducer = (state = {}, action) => {
    switch (action.type) {
        case "REVIEW_CREATE_REQUEST":
            return {
                loading:true
            }

        case "REVIEW_CREATE_SUCCESS":
            return {
                loading:false,
                success:true,
                movieReview:action.payload
            }
        case "REVIEW_CREATE_FAIL":
            return {
                loading:false,
                error:action.payload
            }
            
    
        default:
            return state;
    }
};

export const deleteReducer = (state = {}, action ) => {
    switch (action.type) {
        case "MOVIE_DELETE_REQUEST":
            return {
                loading:true
            }
            
        case "MOVIE_DELETE_SUCCESS":
            return {
                loading:false,
                success:true
            }

        case "MOVIE_DELETE_FAIL":
            return {
                loading:false,
                error:action.payload
            }
    
        default:
            return state;
    }
};

export const updateReducer = (state = { movie : {}}, action ) => {
    switch (action.type) {
        case "MOVIE_UPDATE_REQUEST":
            return {
                loading:true
            }

        case "MOVIE_UPDATE_SUCCESS":
            return {
                loading:false,
                success:true,
                movie:action.payload
            }

        case "MOVIE_UPDATE_FAIL":
            return {
                loading:false,
                error:action.payload
            }           
    
        default:
            return state;
    }
}