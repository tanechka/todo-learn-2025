import { useState } from 'react';
import { CounterClass, CounterFunction, CounterReducer } from './counter';

const SHOWED = false;

const CounterApp = () => {
    const [toggle, setToggle] = useState(SHOWED);


    return <div>
        <button onClick={() => {
            setToggle(!toggle)
        }}>
            Toggler
        </button>
        {toggle && <>
            <CounterClass />
            <CounterFunction />
            <CounterReducer />
        </>}
    </div>

}
export default CounterApp