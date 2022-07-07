import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';
import TextForm from './Components/TextForm';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("Enable Dark Mode");
  const [mode1, setMode1] = useState("light");
  const [mystyle, setmystyle] = useState("blue")
  const [mystyle2, setmystyle2] = useState({
    color: "black",
    backgroundColor: "white"
  })
  const [btnmode, setbtnmode] = useState("Enabal Dark Mode")
  const toggleMode = () => {
    setTimeout(() => {

      if (mode === "Enable Dark Mode") {
        setmystyle({
          backgroundColor: "green",
          color: "red"
        })
        setMode("Enable Light Mode");
        document.body.style.backgroundColor = "#021838"

        setMode1("dark")
      } else {
        setMode("Enable Dark Mode");
        setMode1("light");
        setmystyle({
          backgroundColor: "red",
          color: "green"
        })
        document.body.style.backgroundColor = "white"
      }

      if (mystyle2.color === 'black') {
        setbtnmode("Enabal Dark Mode")
        setmystyle2({
          color: "white",
          backgroundColor: "black",
          border: "2px solid white"
        })
      } else {
        setbtnmode("Enabal light Mode")

        setmystyle2({
          color: "black",
          backgroundColor: "white"
        })
      }

    }, 0);

  }







  return (
    <>

      <div>
        {/* A <Switch> looks through its children <Route>s and
           renders the first one that matches the current URL. */}
           
        {/* <BrowserRouter> */}
        <Navbar mode={mode} mode1={mode1} toggleMode={toggleMode} />
        <Textarea toggleMode={toggleMode} mystyle2={mystyle2} btnmode={btnmode} />} />
          {/* <Routes> */}
            {/* <Route exact path="/" element={<TextForm mystyle2={mystyle2} btnmode={btnmode} toggleMode={toggleMode} />} /> */}
            {/* <Route exact path="/about" element={<Textarea toggleMode={toggleMode} mystyle2={mystyle2} btnmode={btnmode} />} /> */}
          {/* </Routes> */}
        {/* </BrowserRouter> */}
      </div>

    </>
  );
}

export default App;
