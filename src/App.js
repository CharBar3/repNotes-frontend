import { Routes, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import './App.css';

import Home from "./pages/Home"
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import Workout from "./pages/Workout";

function App() {

  const URL = 'http://localhost:4000/repnotes'
  
  const getUserWorkouts = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setUserWorkouts(data)
  }
  const [userWorkouts, setUserWorkouts] = useState([])

  useEffect(() => {
    getUserWorkouts()
}, []);

useEffect(() => {
    console.log({userWorkouts})
}, [userWorkouts]);

  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/repnotes" element={<Home />}/>
        <Route path="/repnotes/dashboard" element={<Dashboard 
          getUserWorkouts={getUserWorkouts}
          userWorkouts={userWorkouts}
          setUserWorkouts={setUserWorkouts}
        />}/>
        <Route path="/repnotes/:id" element={<Workout 
          getUserWorkouts={getUserWorkouts}
          userWorkouts={userWorkouts}
        />}/>
      </Routes>
    </div>
  );
}

export default App;
