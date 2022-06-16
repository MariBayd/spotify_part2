import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Main from "./components/pages/Main.jsx";
import Search from './components/pages/Search.jsx'


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
