import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleOnchange = (event)=>{
        setText(event.target.value);
    }
    const handleUpperCaseClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("CONVERTED TO UPPERCASE", "success")
    }
    const handleLowerCaseClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase", "success")

    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared", "success")

    }
    const speak = () => {
        let newText = new SpeechSynthesisUtterance();
        newText.text = text;
        window.speechSynthesis.speak(newText);
        props.showAlert("Speaking!", "success")
    }

    //to extract only the numbers in the text:
    const handleNumExtract =()=> {
        const num = /[0-9/ /]/g;

        const digits = text.match(num);
        const res = digits.join('');
        setText(res)
        props.showAlert("Only Numbers has been Extracted ", "success")
    }

    //remove all the symbols
    const handleTextExtract =()=>{
        const regex = /[0-9/A-Z/a-z/ /]/g;

        const letters = text.match(regex);
        const res1 = letters.join('');
        setText(res1)
        props.showAlert("Only Text has been Extracted !", "success")
    }

    //Function to reverse text:
    const handleReverse = (event) => {
    /* Convert string to array*/
    let strArr = text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
    props.showAlert("Text revers!", "success")
    }

    //Into "Capitalized form" or you can call it "Title Case" 
    const handleTitleCase = () => {
        let newText = text.split(" ").map((currentValue) => {
            let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
            return newText;
        });
        setText(newText.join(" "));
        props.showAlert("Title Case!", "success")
    }

    // const handleCopy = () => {
    //     var text = document.getElementById("myBox");
    //     text.select();
    //     // text.setSelectionRange(0, 9999);
    //     navigator.clipboard.writeText(text.value);
    // }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces are neglected!", "success")
    } 

    
    //text = "New Text is";     // wrong way to change to state
    //setText("New text ");
    return (
    <>
    <div className="container" style={{color: props.mode==='light'?'black':'white' }} >
        <h1 className='mb-2'>{props.headings} </h1>
        <div className="mb-3">
            <label form="textBox" className="form-label"></label>
            <textarea className="form-control" value={text}  style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white' }}  onChange={handleOnchange} id="textBox" placeholder='Enter Your text here' rows="10"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my=1" onClick={handleUpperCaseClick}>Convert to UPPERCASE</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my=1" onClick={handleLowerCaseClick}>Convert to lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my=1" onClick={handleTitleCase}>Title Case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my=1" onClick={handleReverse}>Text Reverse</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my=1" onClick={handleNumExtract}>Number Extract</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my=1" onClick={handleTextExtract}>Text Extract</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my=1" onClick={handleExtraSpace}>Remove Extra Spaces</button> 
        {/* <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button> */}
        <button disabled={text.length===0} className="btn btn-primary mx-1 my=1" onClick={speak}>Speak</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>

    </div>

    <div className="container" my-3 style={{color: props.mode==='light'?'black':'white' }} >
        <br />
        <h1>Your Text Summery</h1>
        <p>{text.split(/\s+/).filter( (element)=>{return element.length!==0 } ).length} words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").filter( (element)=>{return element.length!==0 } ).length } Minutes Read</p>

        <h2>Preview</h2>
        <p>{text.length>0 ? text:"Nothing Here to Preview"}</p>
    </div>
    </>
  )
}
