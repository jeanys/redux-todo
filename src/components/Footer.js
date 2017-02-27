import React from 'react';
import FilterLink from '../containers/FilterLink';
import { Link } from 'react-router';

const Footer = () => (
    <p className="todo-filter">
        筛选：
        <Link to="/">
            全部
        </Link>
        {" "}
        <Link to="/active">
            活跃的
        </Link>
        {" "}
        <Link to="/complete">
            已完成
        </Link>
    </p>
)

export default Footer;