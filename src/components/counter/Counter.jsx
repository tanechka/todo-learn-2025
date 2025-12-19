/* Code example for:
    Class component / functional component / useReducer
*/

import { useState, useReducer } from 'react';
import React, {Component} from 'react';

class CounterClass extends Component {
    state = {
        count: 0,
    }
    increment = () => {
        this.setState((prev) => {
            return {
                count: prev.count + 1
            }
        })
    }

    render() {
        return <div>
            <h2>Class component react </h2>
            <p>Count: {this.state.count}</p>
            <button onClick={this.increment}>+1</button>
        </div>
    }
}

function CounterFunction() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);

    return (
        <div>
            <h2>Functional component react </h2>
            <p>Count: {count}</p>
            <button onClick={increment}>+1</button>
        </div>
    );
}

// 3. Функциональный с useReducer
const INIT_STATE = { COUNT: 0 };
const ACTION = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET',
}

function reducer(state, action) {
    switch (action.type) {
        case ACTION.INCREMENT:
            return { ...state, count: state.count + 1}
        case ACTION.DECREMENT:
            return  { ...state, count: Math.max(0, state.count - 1) }
        case ACTION.RESET:
            return  { ...state, count: INIT_STATE.COUNT }
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

function CounterReducer() {
    const [state, dispatch] = useReducer(reducer, {count: INIT_STATE.COUNT});

    return (
        <div>
            <h2>useReducer()</h2>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: ACTION.INCREMENT })}>+1</button>
            <button onClick={() => dispatch({ type: ACTION.DECREMENT })}>-1</button>
            <button onClick={()=> dispatch({ type: ACTION.RESET })}>Reset</button>
        </div>
    )

}

export { CounterClass , CounterFunction, CounterReducer };

// OLD VERSION CODE FOR CLASS

// constructor(props) {
//     super(props);
//
//     this.state = {
//         count: INIT_COUNT,
//     }
//     this.increment = this.increment.bind(this);
// }
//
// increment() {
//     this.setState((prevState) => {
//         return { count: prevState.count + 1 }
//     })
// }