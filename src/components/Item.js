import React from 'react';

const Item = ({ onTodoClick, handleDelete, completed, text }) => (
    <li
        onClick={onTodoClick}
        style={{textDecoration: completed ? "line-through": "none"}}>
        {text}
        {" "}
        <a href="javascript:;" onClick={handleDelete}>删除</a>
    </li>
)

export default Item;