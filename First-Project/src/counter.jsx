import { useState } from "react";

const CounterApp = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>{ count }</h1>
            <button onClick={increment}>+ increment</button>
            <button onClick={decrement}>- decrement</button>
            <button onClick={reset}>reset</button>
        </>
    )

    function increment(){
        setCount(count+1);
    }
    function decrement(){
        setCount(count-1);
    }
    function reset(){
        setCount(count == 0);
    }
}

export default CounterApp;