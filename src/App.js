import "./App.css";
import React from "react";
import {Nav ,Home,Moviepage} from './components'
import {Route,Routes, BrowserRouter as Router, Link,} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/Moviepage/:movieid" element={<Moviepage />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
