import React from 'react';
import { connect } from "react-redux";
import { addTodo } from "../actions";

let AddTodo = ({dispatch}) => {
    let input;
    return (
        <div className="todo-add">
            <form onSubmit={(e)=>{
                e.preventDefault();
                if (!input.value.trim()) {
                    return;
                }
                dispatch(dispatch => {
                    fetch('http://rap.taobao.org/mockjsdata/14394/postList.json?title='+input.value, {
                        method: "GET"
                        // method: "POST",
                        // body: JSON.stringify({
                        //     title: input.value
                        // })
                    })
                    .then(res => {
                        return res.json();
                    })
                    .then(data => {
                        if (data.status) {
                            dispatch(addTodo(data.id,data.title));
                        }
                    })
                });
                input.value = "";
            }}>
                <input ref={(node) => input = node} />
                <button type="submit">+</button>
            </form>
        </div>
    )
}

AddTodo = connect()(AddTodo);

export default AddTodo;