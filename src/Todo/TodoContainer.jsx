import Todo from "./Todo";
import {connect} from "react-redux";
import {
    ADD_NEW_PRODUCT_CREATOR,
    CHANGE_COUNT_CREATOR,
    CHANGE_PRICE_CREATOR,
    CHANGE_PRODUCT_CREATOR,
    DELETE_PRODUCT_CREATOR,
    CALCULATION_ALL_PRODUCT_CREATOR
} from "../redux/reducerTodo";

let mapStateToProps = (state) => {
    return {
        product: state.todo.product,
        count: state.todo.count,
        price: state.todo.price,
        recipes: state.todo.recipes,
        sum: state.todo.sum

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => {
            dispatch(ADD_NEW_PRODUCT_CREATOR())
        },
        handleChangeProduct: (text) => {
            dispatch(CHANGE_PRODUCT_CREATOR(text))
        },
        handleChangeCount: (count) => {
            dispatch(CHANGE_COUNT_CREATOR(count))
        },
        handleDeleteProduct: (recipe) => {
            dispatch(DELETE_PRODUCT_CREATOR(recipe))
        },
        handleChangePrice: (price) => {
            dispatch(CHANGE_PRICE_CREATOR(price))
        },
        handleCalculateAllProduct: () => {
            dispatch(CALCULATION_ALL_PRODUCT_CREATOR())
        }
    }

}
const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todo)
export default TodoContainer