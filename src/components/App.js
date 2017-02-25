import React from 'react';
import AddTodo from "../containers/AddTodo";
import TodoList from "../containers/TodoList";
import Footer from "./Footer";

const App = () => (
    <div className="todo-app">
        <h1>Redux-todo</h1>
        <div className="todo-main">
            <AddTodo />
            <TodoList />
        </div>
        <Footer />
    </div>
)

export default App;