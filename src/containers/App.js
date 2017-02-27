import React, { Component } from 'react';
import { connect } from "react-redux";
import { setFilter } from "../actions";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Footer from "../components/Footer";

class App extends Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(nextProps) {
        const {
            dispatch,
            routeParams
        } = nextProps;
        let filter;
        switch (routeParams.filter) {
            case "active":
                filter = "SHOW_ACTIVE";
                break;
            case "complete":
                filter = "SHOW_COMPLETE";
                break;
            default:
                filter = "SHOW_ALL";
                break;
        }
        dispatch(setFilter(filter));
    }
    render() {
        return (
            <div className="todo-app">
                <h1>Redux-todo</h1>
                <div className="todo-main">
                    <AddTodo />
                    <TodoList />
                </div>
                <Footer />
            </div>
        )
    }
}

App = connect()(App);

export default App;