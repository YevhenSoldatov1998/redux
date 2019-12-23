
const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT';
const CHANGE_PRODUCT = 'CHANGE_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const CHANGE_COUNT = 'CHANGE_COUNT';

export const DELETE_PRODUCT_CREATOR = (recipe) => ({type: DELETE_PRODUCT , recipe: recipe})
export const ADD_NEW_PRODUCT_CREATOR = () => ({type: ADD_NEW_PRODUCT})
export const CHANGE_PRODUCT_CREATOR = (text) => ({type: CHANGE_PRODUCT , text: text})
export const CHANGE_COUNT_CREATOR = (count) => ({type: CHANGE_COUNT , count: count})

let initialState = {
    product: '',
    count: '',
    recipes: []
}
const reducerTodo = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_NEW_PRODUCT:
            return {...state , recipes: [...state.recipes ,{ product: state.product , count: state.count}]};
            break;
        case CHANGE_PRODUCT:
            return { ...state , product: action.text};
            break;
        case CHANGE_COUNT:
            return {...state, count: action.count};
        case DELETE_PRODUCT:
            let newState = state.recipes.filter( currentRecipe =>{
                    return currentRecipe !== action.recipe
            });
            return {...state , recipes: newState}
        default:
            return state
    }
}
export default reducerTodo