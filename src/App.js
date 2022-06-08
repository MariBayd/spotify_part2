import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Main from "./Components_react/pages/Main.jsx";
import Search from './Components_react/pages/Search.jsx'


function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main/>}>
        </Route>
        <Route path="/search" element={<Search/>}>
        </Route>
  </Routes>
  </Router>
   
  );
}

export default App;
