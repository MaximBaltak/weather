import {applyMiddleware, combineReducers, createStore} from "redux";
import mainPageReducer from "./reducers/mainPageReducer";
import thunk from "redux-thunk";

const reducers=combineReducers({
    mainPage: mainPageReducer
})
const store=createStore(reducers,applyMiddleware(thunk))
export default store
