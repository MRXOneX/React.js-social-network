import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer";
import navReducer from "./nav-reducer";
import messageReducer from "./message-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer} from 'redux-form';


let reducers = combineReducers({
    profilePage: profileReducer,
    nav: navReducer,
    usersPage: usersReducer,
    messagePage: messageReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))


export default store;