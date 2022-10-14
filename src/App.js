import "./App.css";
import React from "react";
import {Nav ,Home,Moviepage,Api} from './components'
import {Route,Routes, BrowserRouter as Router, Link,} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Nav/>
      <Api/>
      
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/Moviepage" element={<Moviepage />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
