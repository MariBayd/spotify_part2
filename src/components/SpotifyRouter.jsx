import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

const SpotifyRouter = ({props}) => {

    return (
        <Router>
            <Routes>
                {props.map((item) =>
                    <Route key={item.path} exact path={item.path} element={item.page}>
                    </Route>
                )}
        </Routes>
        </Router>
    )

}

export default SpotifyRouter;