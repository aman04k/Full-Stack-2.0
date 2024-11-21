import { combineReducers, createStore } from "redux";
import counterReducer from "./counterReducer";

const Reducers = combineReducers({
    counterReducer:counterReducer
})

let store = createStore(Reducers)

export default store