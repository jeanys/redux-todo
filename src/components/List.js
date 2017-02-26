import React from 'react';
import Item from './Item';

class List extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.fetchData();
    }
    render() {
        let {
            todos,
            onTodoClick,
            handleDelete
        } = this.props;
        return (
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
    }
}

export default List;