// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Anukarsh from './components/Anukarsh';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      document.body.style.color='white'
      showAlert("Dark Mode has been enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color='black'
      showAlert("Light Mode has been enabled", "success")
    }
  }  
return (
    <>
    {/* <Router> */}
      <Navbar title ="TxtEdtrs" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Routes> */}
        {/* <Route path="/about" element={<About/>}/> */}
        {/* <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter your text here" mode={mode}/>}/> */}
      {/* </Routes> */}
      <TextForm showAlert={showAlert} heading="Enter your text here" mode={mode}/>
      <Anukarsh mode={mode}/>
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
