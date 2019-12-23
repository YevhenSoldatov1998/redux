import React from 'react'
import Todo from "./Todo";
import {connect} from "react-redux";
import {ADD_NEW_PRODUCT_CREATOR ,CHANGE_PRODUCT_CREATOR ,CHANGE_COUNT_CREATOR,DELETE_PRODUCT_CREATOR} from "../redux/reducerTodo";

let mapStateToProps = (state) =>{
    return {
       product: state.todo.product,
       count: state.todo.count,
       recipes: state.todo.recipes
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        handleClick: () => {
            dispatch(ADD_NEW_PRODUCT_CREATOR())
        },
        handleChangeProduct: (text) => {
            dispatch(CHANGE_PRODUCT_CREATOR(text))
        },
        handleChangeCount: (count) => {
            dispatch(CHANGE_COUNT_CREATOR(count))
        },
        handleDeleteProduct: (recipe) =>{
            dispatch(DELETE_PRODUCT_CREATOR(recipe))
        }
    }

}
const TodoContainer = connect(mapStateToProps,mapDispatchToProps)(Todo)
export default TodoContainer