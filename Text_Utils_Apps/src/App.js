import React from "react";
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
  }

  const toggleMode = (cls) =>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been Enabled", "success");
     // document.title = 'TextUtils - Dark Mode';

      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing App';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "success");
      //document.title = 'TextUtils - Light Mode';
    }
  }


  return (
  <>
  <Router>
    <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} /><br />
    <Alert alert={alert} />

    <div className="container" my-3>
        <Switch>
          <Route exact path="/">
            <TextForm showAlert={showAlert} headings="Try TextUtils - Word Counter, Character Counter, Number Extracts, Speak Text" mode={mode} />
          </Route>

          <Route exact path="/about">
            <About mode={mode} />
          </Route>
        </Switch> 
    </div>

  </Router>
  </>
  );
}

export default App;
