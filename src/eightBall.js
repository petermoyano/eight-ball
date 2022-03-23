import React, { useState } from "react";
import "./eightBall.css";

function EightBall({ answers }) {
    console.log(answers);
    const randomNum = () => Math.floor(Math.random() * answers.length);
    const [answer, setAnswer] = useState("Think of a question")
    return (
        <>
            <button id="btn" className={`EightBall-button-${answer === "Think of a question" ? 'question' : answers[randomNum()].color}`}
                onClick={() => setAnswer(() => answers[randomNum()].msg)}><b>{answer}</b>
                
            </button>
        </>
    )
}


export default EightBall;