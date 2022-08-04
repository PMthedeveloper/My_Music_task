import React from "react";
import "./App.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./Home";
// import Error from "./Error";


function App() {
  return(
<div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="*" element={<Error/>}/> */}
      </Routes>
    </BrowserRouter>
    </div>
  )
    
}

export default App;
