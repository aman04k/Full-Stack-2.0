import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Hooks for Redux
// import { increment, decrement } from './redux/actions'; // Import Actions
import { increment, decrement } from './redux/actions';


const Counter = () => {
    const count = useSelector((state) => state.count); // Access state
    const dispatch = useDispatch(); // Dispatch actions

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Redux Counter</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch(increment())}>+ Increment</button>
            <button onClick={() => dispatch(decrement())}>- Decrement</button>
        </div>
    );
};

export default Counter;
