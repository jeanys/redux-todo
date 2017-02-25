import React from 'react';
import Item from './Item';

const List = ({todos, onTodoClick, handleDelete}) => (
    <ul className="todo-list">
        {
            todos.map((item) => {
                return (
                    <Item
                        key={item.id}
                        {...item}
                        onTodoClick={() => onTodoClick(item.id)}
                        handleDelete={() => handleDelete(item.id)}
                    />
                )
            })
        }
    </ul>
)

export default List;