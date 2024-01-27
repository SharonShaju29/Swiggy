import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage.js";
import NavigationBar from './Components/NavigationBar.js'

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <div className="mt-[80px]">
      <Routes>
        <Route path="/" Component={HomePage} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
