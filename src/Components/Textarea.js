import React, { useState } from "react";

export default function Textarea(props) {
    const [text, setText] = useState("Enter Text Here....");

    const handleUpperClick = () => {
        let newText = text.toLocaleUpperCase();
        setText(newText);
    };
    const handleLowerClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
    };
    const handleClearClick = () => {
        let newText = text.toLocaleLowerCase();
        setText("");
    };
    const handleChange = (e) => {
        let text = e.target.value;
        setText(text);
    };
    const firLetterUp = () => {
        let newText = text.split(" ");
        let finalArr = [];
        newText.forEach((element) => {
            let afterUp = element[0].toUpperCase();
            afterUp = afterUp.concat(element.substring(1));
            finalArr.push(afterUp);
        });
        setText(finalArr.join(" "));
    };
    const calc = () => {
        let check = /^[^\sa-z_]+$/i;
        if (check.test(text)) {
            setText(String(eval(text))); // string since trim will give error in case if text not string. eval returns a Number
        } else {
            alert("Plz enter valid character");
        }
    };
    const onAlternatingCase = () => {
        let newtext = "";
        for (let index = 0; index < text.length; index++) {
            if (index % 2 === 0) {
                newtext += text[index].toLowerCase();
            } else {
                newtext += text[index].toUpperCase();
            }
        }
        setText(newtext);
    };

    const sentCase = () => {
        console.log(text);
        setText(text.toProperCase());
    };

    const randomText = () => {
        let newText = text;
        newText = newText + text;
        setText(newText);
    };
    const copyText = () => {
        var copyText = document.getElementById("mybox");

        /* Select the text field */
        copyText.select();

        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);

        /* Alert the copied text */
    };
    const speak = () => {
        let speak = new SpeechSynthesisUtterance();
        speak.text = text;
        window.speechSynthesis.speak(speak)
    };
    const replaceString = () => {
        let repval = prompt("Enter the word to be replaced:")
        let tobereplaced = new RegExp(repval, 'g');

        let toreplace = prompt("Enter the text that you want to replace with:");

        let newText = text.replace(tobereplaced, toreplace);
        setText(newText);
    }
    const handleReverse = (event) => {
        /* Convert string to array*/
        let strArr = text.split("");
        console.log(strArr)
        /* Reverse array*/
        strArr = strArr.reverse();
        /* Convert array to string*/
        let newText = strArr.join("");
        console.log(newText)
        setText(newText);
    };
    return (
        <>
            <div className=" container my-4 mb-3 " style={props.mystyle2}>
                <label htmlFor="exampleFormControlTextarea1" class={`form-label `}>
                    <h1>About Your Text</h1>
                </label>
                <textarea
                    class="form-control"
                    value={text}
                    style={props.mystyle2}
                    onChange={handleChange}
                    id="mybox"
                    rows="10"
                ></textarea>
                <button
                    className="my-3 text-white bg-primary"
                    onClick={handleUpperClick}
                >
                    Convert to upper Case
                </button>
                <button
                    className="my-3 mx-2 text-white bg-dark"
                    onClick={handleLowerClick}
                >
                    Convert to lower Case
                </button>
                <button
                    className="my-3 mx-2 text-white bg-dark"
                    onClick={handleClearClick}
                >
                    Convert to clear Case
                </button>
                <button className="my-3 mx-2 text-white bg-dark" onClick={firLetterUp}>
                    FirLetterUp
                </button>
                <button className="my-3 mx-2 text-white bg-dark" onClick={calc}>
                    calc
                </button>
                <button
                    className="my-3 mx-2 text-white bg-dark"
                    onClick={onAlternatingCase}
                >
                    onAlternatingCase
                </button>
                <button className="my-3 mx-2 text-white bg-dark" onClick={sentCase}>
                    sentCase
                </button>
                <button className="my-3 mx-2 text-white bg-dark" onClick={randomText}>
                    RandomText
                </button>
                <button className="my-3 mx-2 text-white bg-dark" onClick={copyText}>
                    CopyText
                </button>
                <button
                    type="submit"
                    onClick={speak}
                    className="btn btn-warning mx-2 my-2"
                >
                    Speak
                </button>
                <button
                    type="submit"
                    onClick={replaceString}
                    className="btn btn-warning mx-2 my-2"
                >
                    replaceString
                </button>
                <button
                    type="submit"
                    onClick={handleReverse}
                    className="btn btn-warning mx-2 my-2"
                >
                    handleReverse
                </button>
                <div style={props.mystyle2}>
                    <h1>Your Text summary</h1>
                    <p>
                        {text.split(" ").length - 1} && {text.length} Characters
                    </p>
                    <p>{0.008 * text.split(" ").length - 0.008} Mintus Read</p>
                    <h2>Preview</h2>
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
}
