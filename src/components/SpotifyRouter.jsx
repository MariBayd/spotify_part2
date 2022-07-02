import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";

const SpotifyRouter = ({ routeConfig }) => {
  return (
    <Router>
      <Routes>
        {routeConfig.length ? (
          routeConfig.map((item) => (
            <Route key={item.path} path={item.path} element={item.page}></Route>
          ))
        ) : (
          <Route key={"/"} path={"/"} element={<Error />}></Route>
        )}
      </Routes>
    </Router>
  );
};

export default SpotifyRouter;
