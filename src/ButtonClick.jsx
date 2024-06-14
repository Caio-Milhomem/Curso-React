import { useState } from "react"

function ButtonClick() {

    /*
    let count = 0;

    const handleClick = (name) => {
        if (count < 3) {
            count++
            console.log(`Parabéns ${name} vc teve coragem e ganhou ${count} 🍭 como prémio 😁👍`)
        }
        else {
            console.log(`${name} acabou o 🍭 😭`)
        }
    }


    return (<button onClick={() => handleClick("Caio")}>Clica ai se tem coragem 😈</button>)
    */

    const [showParagraph, setShowParagraph] = useState(false);

    const handleClick = (e) => {
        e.target.textContent = "Clicou msm 😲";
        setShowParagraph(true);
    }

    return (
        <>
            <button onClick={(e) => handleClick(e)}>Clica ai se tem coragem 😈</button>
            {showParagraph && <p>Parágrafo exibido após o clique!</p>}
        </>
    )
}

export default ButtonClick