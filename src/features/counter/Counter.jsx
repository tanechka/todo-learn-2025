/* Code example for:
    Class component / functional component / useReducer
*/

import { useState, useReducer } from 'react';
import React, {Component} from 'react';
import reducerCounter from './counterReducer';
import { COUNTER_ACTION, INIT_COUNTER_STATE } from './counterActions';

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

function CounterReducer() {
    const [state, dispatch] = useReducer(reducerCounter, {
        count: INIT_COUNTER_STATE.COUNT
    });

    return (
        <div>
            <h2>useReducer()</h2>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: COUNTER_ACTION.INCREMENT })}>+1</button>
            <button onClick={() => dispatch({ type: COUNTER_ACTION.DECREMENT })}>-1</button>
            <button onClick={()=> dispatch({ type: COUNTER_ACTION.RESET })}>Reset</button>
        </div>
    )

}

export { CounterClass , CounterFunction, CounterReducer };

// OLD VERSION CODE EXAMPLE FOR CLASS

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