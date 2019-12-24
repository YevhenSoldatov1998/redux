import React from 'react'
import './Todo.scss'

const Todo = (props) => {
    const callParentClick = (e) => {
        e.preventDefault()
        props.handleClick()
    }
    const callParentChange = (e) => {
        let text = e.target.value
        props.handleChangeProduct(text)
    }
    const callHandleChangeCount = (el) => {
        let count = el.target.value;
        props.handleChangeCount(count)
    }
    const callHandleDeleteProduct = (recipe) => {
        props.handleDeleteProduct(recipe)
    }
    const callHandleChangePrice = (e) => {
        let price = e.target.value;
        props.handleChangePrice(price)
    }

    return (
        <div className="todo-wrap">
            <div className="christmas"></div>
            <h1 className="title">Продукты на НОВОГОДНИЕ ПРАЗНИКИ</h1>
            <form onSubmit={callParentClick.bind(this)} action="">
                <input type="text"
                       onChange={callParentChange.bind(this)}
                       value={props.product}
                       placeholder="Продукт"/>

                <input type="text"
                       onChange={callHandleChangeCount.bind(this)}
                       value={props.count}
                       placeholder="Количество"

                />
                <input type="number"
                       className={"input-price"}
                       placeholder="Цена"
                       value={props.price}
                       onChange={callHandleChangePrice.bind(this)}
                />
                <button type={"submit"}>Добавить</button>
                <div>Сума: {props.sum} </div>
            </form>
            <div className="recipes">
                {props.recipes.map(recipe => {
                    return <div key={recipe.id} className={"recipes-item"}>
                        <span className={"recipes-item__product"}>{recipe.product}</span>
                        <span className={"recipes-item__count"}>{recipe.count}</span>
                        <span className={"recipes-item__count"}>{recipe.price}</span>
                        <span className={"close"}
                              onClick={callHandleDeleteProduct.bind(this, recipe)}>&times;</span>
                    </div>
                })
                }
            </div>
        </div>
    )
}
export default Todo