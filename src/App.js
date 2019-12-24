import React from 'react'
import './normalize.css'
import './App.css'
import TodoContainer from "./Todo/TodoContainer";

const App = (props) => {
    return (
        <div className='app'>
            <TodoContainer/>
        </div>
    )
}
export default App;