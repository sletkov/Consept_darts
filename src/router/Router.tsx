import React from "react";
import {Route, Routes} from "react-router-dom";
import {TimelinePage} from "../pages/TimelinePage/TimelinePage";
import {ProfilePage} from "../pages/ProfilePage/ProfilePage";
import {LogIn} from "../pages/LogIn/LogIn";

export const Router = () => {
  return (
    <Routes>
      <Route
        index
        element={<TimelinePage />}
      />
      <Route
        path={'/profile'}
        element={<ProfilePage />}
      />
      <Route
          path={'/auth'}
          element = {<LogIn />}
      />
    </Routes>
  )
}
