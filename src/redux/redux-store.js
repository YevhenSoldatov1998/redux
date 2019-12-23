import {combineReducers, createStore} from "redux";
import reducerTodo from "./reducerTodo";

let reducer = combineReducers({
    todo: reducerTodo
})
let store = createStore(reducer)
export default store

window.store = store
