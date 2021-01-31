
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import HomeReducer from './HomeReducer'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    homePage: HomeReducer,
    form: formReducer

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;


export default store;