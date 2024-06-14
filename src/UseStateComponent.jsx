import { useState } from "react"

function UseStateComponent() {

    const [name, setName] = useState("Fulano")
    const [age, setAge] = useState(0)
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Caio")
    }

    const incrementAge = () => {
        setAge(age + 1)
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed)
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is employed: {isEmployed ? "yes" : "no"}</p>
            <button onClick={toggleEmployedStatus}>toggle employed status</button>

        </div>
    )
}

export default UseStateComponent