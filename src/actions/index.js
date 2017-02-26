// let nextTodoId = 0;

export const addTodo = (id,text) => {
    return {
        type: "ADD_TODO",
        id,
        text
    }
}

export const setFilter = (filter) => {
    return {
        type: "SET_FILTER",
        filter
    }
}

export const toggleTodo = (id) => {
    return {
        type: "TOGGLE_TODO",
        id
    }
}

export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        id
    }
}

export const fetchList = (data) => {
    return {
        type: "FETCH_LIST",
        data
    }
}