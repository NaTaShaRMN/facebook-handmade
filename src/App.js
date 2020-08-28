import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import SideBar from './components/sidebar/SideBar'
function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      <div className="app__body">
        <SideBar/>
      </div>
      
    </div>
  );
}

export default App;
