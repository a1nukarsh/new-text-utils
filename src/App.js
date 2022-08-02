// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
    }
    else{
      setMode('light')
    }
  }  
return (
    <>
      <Navbar title ="TxtEdtrs" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
      <TextForm heading="Enter your text here"/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
