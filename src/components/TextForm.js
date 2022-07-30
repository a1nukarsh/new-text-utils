import React, {useState} from 'react'



export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("UPPER CASE WAS CLICKED")
    let newText = text.toUpperCase()
    setText(newText)
  }
  const handleOnChange = (event)=>{
    // console.log("ON CHANGE")
    setText(event.target.value)
  }
  const[text, setText] = useState('Enter text here2');
  //text="new"// wrong way toh change state
  //setText("New Text"); // correct way to change state
  return (
  <>
    <div className='container'>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value= {text} onChange={handleOnChange} id="textArea" rows="8"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert to UPPER Case</button>
    </div>
    <div className="container">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words & {text.length} characters</p>
    </div>
  </>
  )
}
