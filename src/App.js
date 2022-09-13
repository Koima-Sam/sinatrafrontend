import { useState, useEffect } from "react";

import React from "react";

//navbar

import {  Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Assigned from './components/Assigned';
import NewEmployeeForm from './components/NewEmployeeForm';

//navbarS
function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("https://nameless-thicket-02202.herokuapp.com/employees")
      .then((response) => response.json())
      .then((employees) => setEmployees(employees));
  }, []);

  

  function upDateEmployees(employee) {
    setEmployees([...employees, employee]);
  }


 
  return (
    
    <div className="app">
      
      
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
         <Route exact path="/assigned" element={<Assigned  employees={employees} setEmployees={setEmployees}/>} />
         <Route exact path="/new" element={<NewEmployeeForm updateEmployees={upDateEmployees}/>} />
      </Routes>
   
     
   </div>
  );
}

export default App;
