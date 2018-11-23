import React from 'react';

const TodoList = ({list}) => (
    <ul>
    {
        list.map((item, index) => {
            return (
                <li key={index}>{item.title}</li>
            )
        })
    }
    </ul>
)

export default TodoList;