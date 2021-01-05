import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';
import { deleteReducer, reviewReducer, updateReducer, userReducer } from './notes-reducer/notesReducer';
import { userLoginReducer, userRegisterReducer } from './user-reducer/userReducer';

const reducer = combineReducers({
    users: userReducer,
    reviews:reviewReducer,
    movieDelete:deleteReducer,
    movieUpdate:updateReducer,
    register:userRegisterReducer,
    login:userLoginReducer
});

const initialState = { };

const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;