import React from 'react'

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
    return (
        <div>
            <h1 className="title">Рецепт</h1>
            <form onSubmit={callParentClick.bind(this)} action="">
                <input type="text" onChange={callParentChange.bind(this)} value={props.product} placeholder="Продукт"/>
                <input type="text"
                       onChange={callHandleChangeCount.bind(this)}
                       value={props.count}
                       placeholder="Количество"
                />
                <button type={"submit"}>Добавить</button>
            </form>
            <div className="recipes">
                {props.recipes.map(recipe => {
                    return <div>
                        <span style={{marginRight: '20px'}}>{recipe.product}</span>
                        <small style={{marginRight: '20px'}}>{recipe.count}</small>
                        <span
                            onClick={callHandleDeleteProduct.bind(this, recipe)}>&times;</span>
                    </div>
                })
                }
            </div>
        </div>
    )
}
export default Todo