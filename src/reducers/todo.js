const todo = (state = {}, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case "TOGGLE_TODO":
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign({}, state, {
                completed: !state.completed
            })
        case "FETCH_LIST":
            return {
                id: state.id,
                text: state.title,
                completed: state.completed
            }
        default:
            return state;
    }
}

const todos = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                todo(undefined, action)
            ]
        case "TOGGLE_TODO":
            return state.map(item => {
                return todo(item, action)
            })
        case "DELETE_TODO":
            return state.filter((item) => {
                return item.id !== action.id
            })
        case "FETCH_LIST":
            return action.data.map(item => {
                return todo(item, action)
            })
        default:
            return state;
    }
}

export default todos;