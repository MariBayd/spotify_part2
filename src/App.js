import React from "react";
import SpotifyRouter from "./components/SpotifyRouter.jsx";
import { APP_ROUTES } from "./js/Constans.js";

function App() {
  return <SpotifyRouter routeConfig={APP_ROUTES} />;
}

export default App;
