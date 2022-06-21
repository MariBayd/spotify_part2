import React from "react";
import Main from "./components/pages/Main.jsx";
import Search from './components/pages/Search.jsx'
import SpotifyRouter from "./components/SpotifyRouter.jsx";


function App() {

  return (
    <SpotifyRouter props={[
      {path:"/", page:<Main/>},
      {path:"search", page:<Search/>}
    ]}/>
  );
}

export default App;
