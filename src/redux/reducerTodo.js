const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT';
const CHANGE_PRODUCT = 'CHANGE_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const CHANGE_COUNT = 'CHANGE_COUNT';
const CHANGE_PRICE = 'CHANGE_PRICE';
const CALCULATION_ALL_PRODUCT = 'CALCULATION_ALL_PRODUCT';

export const DELETE_PRODUCT_CREATOR = (recipe) => ({type: DELETE_PRODUCT, recipe: recipe});
export const ADD_NEW_PRODUCT_CREATOR = () => ({type: ADD_NEW_PRODUCT});
export const CHANGE_PRODUCT_CREATOR = (text) => ({type: CHANGE_PRODUCT, text: text});
export const CHANGE_COUNT_CREATOR = (count) => ({type: CHANGE_COUNT, count: count});
export const CHANGE_PRICE_CREATOR = (price) => ({type: CHANGE_PRICE, price: price});
export const CALCULATION_ALL_PRODUCT_CREATOR = () => ({type: CALCULATION_ALL_PRODUCT});

let initialState = {
    product: '',
    count: '',
    price: '',
    recipes: [],
    sum: 0,
    id: 1

}

const reducerTodo = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_PRODUCT:

            if(state.product && state.count && state.price){
                debugger
                return {
                    ...state,
                    recipes: [...state.recipes, {product: state.product, count: state.count, price: state.price , id: state.id + 1}],
                    sum:  +state.price + state.sum,
                    product: '',
                    count: '',
                    price: ''

                };
            }
            return state

        case CHANGE_PRODUCT:
            return {...state, product: action.text};
        case CHANGE_COUNT:
            return {...state, count: action.count};
        case CHANGE_PRICE:
            return {...state, price: action.price};
        case DELETE_PRODUCT:
            let newState = state.recipes.filter(currentRecipe => {
                return currentRecipe !== action.recipe
            });
            return {...state, recipes: newState, sum: state.sum - action.recipe.price};
        default:
            return state
    }
}
export default reducerTodo