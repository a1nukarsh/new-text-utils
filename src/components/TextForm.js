import React, {useState} from 'react'



export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("UPPER CASE WAS CLICKED")
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to UPPER Case.", "success")
  }
  const handleLowClick = ()=>{
    console.log("LOWER CASE WAS CLICKED")
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to lower Case.", "success")
  }
  const handleCopyClick = ()=>{
    console.log("COPY WAS CLICKED")
    let text = document.getElementById("textArea")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text has been copied.", "success")
  }
  const handleRemoveExtraSpaceClick = ()=>{
    console.log("RES WAS CLICKED")
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra Spaces have been removed.", "success")
  }
  const handleClearClick = ()=>{
    console.log("CLEAR WAS CLICKED")
    let newText = ""
    setText(newText)
    props.showAlert("Text Area has been cleared.", "danger")
  }
  


  const handleOnChange = (event)=>{
    // console.log("ON CHANGE")
    setText(event.target.value)
  }
  const[text, setText] = useState('');
  //text="new"// wrong way toh change state
  //setText("New Text"); // correct way to change state
  return (
  <>
    <div className='container'>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value= {text} onChange={handleOnChange} style={{
          backgroundColor: props.mode==='light'?'white':'black',
          color: props.mode==='light'?'black':'white'
        }} 
        id="textArea" rows="8"></textarea>
    </div>
    <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to UPPER Case</button>
    <button className="btn btn-primary my-2 mx-2" onClick={handleLowClick}>Convert to lower Case</button>
    <button className="btn btn-primary my-2 mx-2" onClick={handleRemoveExtraSpaceClick}>Remove Extra Spaces</button>
    <button className="btn btn-primary my-2 mx-2" onClick={handleCopyClick}>Copy Text</button>


    <button className="btn btn-danger my-2 mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-5">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} Words & {text.length} Characters</p>
      <h3>Preview</h3>
      <p>{text.length>0?text: "Enter text to preview"}</p>
    </div>
  </>
  )
}
