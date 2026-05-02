import { useState } from "react"

const Counter = () => {
    const [count, setcount] = useState(0)
    
    function increment(){

        if(count<10){
            setcount(count + 1)

        }

    }

    function decrement() {

        if(count>0){
            setcount(count-1)

        }

    }

    return(
        <>
            <h1>count {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )

}

export default Counter