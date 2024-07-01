import { useState, useEffect, useRef } from "react"

function UseRef() {

    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)

    useEffect(() => {
        console.log("rendered")
    })

    function handleClick1() {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow"
        inputRef2.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = ""
    }

    function handleClick2() {
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "yellow"
        inputRef1.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = ""
    }

    function handleClick3() {
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "yellow"
        inputRef1.current.style.backgroundColor = ""
        inputRef2.current.style.backgroundColor = ""
    }

    return (
        <div>
            <button onClick={handleClick1}>
                Clica ai 1
            </button>
            <input ref={inputRef1} />

            <button onClick={handleClick2}>
                Clica ai 2
            </button>
            <input ref={inputRef2} />

            <button onClick={handleClick3}>
                Clica ai 3
            </button>
            <input ref={inputRef3} />
        </div>

    )
}

export default UseRef
