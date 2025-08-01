import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorkoutTimer from "./components/Counter";

function App(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path = "/" element ={<WorkoutTimer/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App