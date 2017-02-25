import React from 'react';

const Link = ({active, children, handleClick}) => {
    if (active) {
        return <span>{children}</span>
    }
    return (
        <a href="#"
            onClick={(e) => {
                e.preventDefault();
                handleClick();
            }}>
            {children}
        </a>
    )
}

export default Link;