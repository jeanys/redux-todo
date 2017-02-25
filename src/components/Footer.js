import React from 'react';
import FilterLink from '../containers/FilterLink';

const Footer = () => (
    <p className="todo-filter">
        筛选：
        <FilterLink filter="SHOW_ALL">
            全部
        </FilterLink>
        {" "}
        <FilterLink filter="SHOW_ACTIVE">
            活跃的
        </FilterLink>
        {" "}
        <FilterLink filter="SHOW_COMPLETE">
            已完成
        </FilterLink>
    </p>
)

export default Footer;