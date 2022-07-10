import React from "react";
import SpotifyRouter from "./components/SpotifyRouter.jsx";
import { appRoutes } from "./js/Constans.js";

function App() {
  return <SpotifyRouter routeConfig={appRoutes} />;
}

export default App;
