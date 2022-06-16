import React from "react";
import {Route, Routes} from "react-router-dom";
import {TimelinePage} from "../pages/TimelinePage/TimelinePage";
import {ProfilePage} from "../pages/ProfilePage/ProfilePage";
import {AuthPage } from "../pages/AuthPage/AuthPage";
import {MainPage} from "../pages/MainPage/MainPage";
import {Layout} from "../layouts/Layout/Layout";

export const Router = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <Layout disableHeader>
            <MainPage />
          </Layout>
        }
      />
      <Route
        path={'timeline'}
        element={
          <Layout>
            <TimelinePage />
          </Layout>
        }
      />
      <Route
        path={'/profile'}
        element={
          <Layout>
            <ProfilePage />
          </Layout>
        }
      />
      <Route
          path={'/auth'}
          element = {
            <Layout disableHeader>
              <AuthPage />
            </Layout>
          }
      />
    </Routes>
  )
}
