/* eslint-disable no-unused-vars */

import { useState } from "react";

import "./App.css";
import { MainFile, Sidebar } from "./components/index";
import { InputSetsProvider } from "./Context/InputSetsContext";

const App = () => {
  // const [inputSets, setInputSets] = useState([]);
  
  return (
    <InputSetsProvider>
    <div className="app-container">
      <div className="main-container">
        <MainFile 
        // inputSets={inputSets} 
        />
      </div>
      <div className="vertical-line"></div>
      <div className="sidebar-container">
        <Sidebar
          // inputSets={inputSets}
          // setInputSets={setInputSets}
          // onAddBox={handleAddBox}
          // onDeleteBox={handleDeleteBox}
          // onAnimateBox={handleAnimateBox}
          // onStopAnimation={handleStopAnimation}
        />
      </div>
    </div>
    </InputSetsProvider>
  );
};

export default App;
