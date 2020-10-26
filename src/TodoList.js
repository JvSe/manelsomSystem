import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';



export default function TodoList() {
    const [text, setText] = useState('');
    const lisTodos = useSelector(state => state);
    const dispatch = useDispatch();

    return(
        <>
            <ul>
                {lisTodos.map((todo) => {
                    <li key={todo.id}>{todo.text}</li>
                })}
                
            </ul>

            <input 
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button
                onClick={() => dispatch({type: 'ADD_TODO', todo: text})}
            >Novo todo</button>
        </>
    )
}