import React from 'react';
import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import { deleteTodo } from "../actions";
import List from "../components/List";

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case "SHOW_ALL":
            return todos;
        case "SHOW_COMPLETE":
            return todos.filter((item) => item.completed);
        case "SHOW_ACTIVE":
            return todos.filter((item) => !item.completed);
    }
}

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.visibility)
})

const  mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id));
        },
        handleDelete: (id) => {
            dispatch(deleteTodo(id))
        }
    }
}

const TodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(List);

export default TodoList;