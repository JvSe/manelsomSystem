import React from 'react';
import { useDispatch, useSelector } from 'react-redux';



export default function TodoList() {
    const lisTodos = useSelector(state => state);
    const dispatch = useDispatch();

    return(
        <>
            <button
                onClick={()=> dispatch({type:'Car'})}
            >
                Car
            </button>
            <h1> {lisTodos.vehicle} </h1>
            <button
                onClick={()=> dispatch({type:'Bike'})}
            >
                Car
            </button>
        </>
    )
}