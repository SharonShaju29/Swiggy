import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage.js";
import NavigationBar from "./Components/NavigationBar.js";
import NavigationBarMobile from "./Components/NavigationBarMobile.js";
import SearchPage from "./Pages/SearchPage.js";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="mt-[80px]">
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/search" Component={SearchPage} />
        </Routes>
      </div>
      <NavigationBarMobile />
    </div>
  );
}

export default App;
