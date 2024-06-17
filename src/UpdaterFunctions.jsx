import { useState } from "react";

function UpdaterFunctions() {

    const [count, setCount] = useState(0)

    function increment() {
        setCount(c => c + 1) // boa pratica utilizar a primeira letra da var para representar seu estado pendente
    }

    function decrement() {
        setCount(count - 1)
        setCount(count - 1)
        setCount(count - 1) // aqui n atualiza o estado de "count" pq não saiu da função ainda  
    }

    function reset() {
        setCount(0)
    }

    return (
        <div>
            <p>Contador: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default UpdaterFunctions