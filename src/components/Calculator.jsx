import React, { useState } from "react";
import "../index.css";
import Button from "./Button";
import Display from "./Display";

function Calculator() {
const [answer, setAnswer] = useState("");
const [input, setInput] = useState("");

  //input
const inputHandler = (event) => {
    if (answer === "Invalid Input!!") return;
    let val = event.target.name;

    let str = input + val;
    if (str.length > 10) return;

    if (answer !== "") {
    setInput(answer + val);
    setAnswer("");
    } else setInput(str);
    // setInput(str);
};

const clear = (e) => {
    setInput("");
    setAnswer("");
};

  // calculate final answer
const calculate = () => {
    if (input === "") return;
    let result = 0;
    let finalexpression = input;
    //  finalexpression = input.replaceAll("^", "**");  //for eval()
    finalexpression = finalexpression.replaceAll("x", "*");
    finalexpression = finalexpression.replaceAll("÷", "/");
    // eslint-disable-next-line no-eval
    result = eval(finalexpression);

    isNaN(result) ? setAnswer(result) : setAnswer(result);
};

  // remove last character
const backspace = () => {
    if (answer !== "") {
    setInput(answer.toString().slice(0, -1));
    setAnswer("");
    } else setInput((prev) => prev.slice(0, -1));
};

return (
    <div>
    <div className="container">
        <Display input={input} setInput={setInput} answer={answer}/>
        <div className="keypad">
        <button className="btn-highlight" onClick={clear} id="clear">
            Clear
        </button>
        <button className="btn-highlight" onClick={backspace} id="backspace">
            C
        </button>
        <button
            className="btn-highlight"
            id="divide"
            name="/"
            onClick={inputHandler}
        >
            &divide;
        </button>
        {[7, 8, 9, 4, 5, 6, 1, 2, 3].map((value) => {
            return (
            <Button key={value} name={value} clickedNum={inputHandler} />
            );
        })}

        <button
            className="btn-highlight"
            id="times"
            name="*"
            onClick={inputHandler}
        >
            &times;
        </button>

        <button
            className="btn-highlight"
            id="substract"
            name="-"
            onClick={inputHandler}
        >
        &ndash;
        </button>

        <button
            className="btn-highlight"
            id="addition"
            name="+"
            onClick={inputHandler}
        >
        +
        </button>
        <Button name="0" id="zero" clickedNum={inputHandler} />
        <button name="." id="decimal" onClick={inputHandler}>
            .
        </button>
        <button className="btn-highlight" onClick={calculate} id="result">
            =
        </button>
        </div>
    </div>
    </div>
);
}
export default Calculator;
