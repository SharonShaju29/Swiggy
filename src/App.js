import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage.js";
import NavigationBar from "./Components/NavigationBar.js";
import NavigationBarMobile from "./Components/NavigationBarMobile.js";
import SearchPage from "./Pages/SearchPage.js";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { isMobile } from "./Store/reducer.js";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);
  const dispatch = useDispatch();

  const media = window.matchMedia(query);

  if (media.matches !== matches) {
    setMatches(media.matches);
  }

  const listener = () => {
    setMatches(media.matches);
    dispatch(isMobile(window.matchMedia(query).matches));
  };

  media.addEventListener("change", listener);
  dispatch(isMobile(window.matchMedia(query).matches));
};

function App() {
  // useEffect(()=>{
  useMediaQuery("(max-width: 768px)");
  // },[])

  return (
    <div className="App font-proxima">
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
