import { useEffect, useState } from "react";

function UseEffect() {

    const [count, setCount] = useState(0)
    const [color, setColor] = useState("green")
    const [width, setWidth] = useState(window.innerWidth)
    const [heigth, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        console.log("EVENT LISTENER ADDED")

        return () => {
            window.removeEventListener("resize", handleResize)
            console.log("EVENT LISTENER REMOVED")
        }
    }, [])

    useEffect(() => {
        document.title = `Count: ${count} ${color}` // muda o título do documento na aba do navegador
    }, [count, color])  // colocando as dependencias [] só att uma vez, se vc colocar um elemento nas dependencias ele vai att 
    //quando houver mudanças no elemento selecionado

    function handleResize() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    function addCount() {
        setCount(c => c + 1)
    }

    function subCount() {
        setCount(c => c - 1)
    }

    function changeColor() {
        setColor(c => c === "green" ? "red" : "green")
    }

    return (
        <>
            <p style={{ color: color }}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subCount}>Sub</button><br />
            <button onClick={changeColor}>Change color</button>
            <p>Window Width: {width}</p>
            <p>Window Height: {heigth}</p>
        </>
    )
}

export default UseEffect