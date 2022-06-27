import React from "react";
import {Route, Routes} from "react-router-dom";
import {TimelinePage} from "../pages/TimelinePage/TimelinePage";
import {ProfilePage} from "../pages/ProfilePage/ProfilePage";
import {AuthPage } from "../pages/AuthPage/AuthPage";
import {MainPage} from "../pages/MainPage/MainPage";
import {Layout} from "../layouts/Layout/Layout";
import {EditProfilePage} from "../pages/EditProfilePage/EditProfilePage";
import {Publication} from "../pages/Publication/Publication";
import {World} from "../pages/World/World";
import {Location} from "../pages/Location/Location";

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
        <Route
            path={'/editProfile'}
            element={
                <Layout disableHeader>
                    <EditProfilePage />
                </Layout>
            }
        />
        <Route
            path={'/publication'}
            element={
                <Layout disableHeader>
                    <Publication />
                </Layout>
            }
        />

        <Route
            path={'/world/:id'}
            element={
                <Layout >
                    <World />
                </Layout>
            }
        >
        </Route>
        <Route
            path={'/world/:id/locations'}
            element={
                <Layout >
                    <Location />
                </Layout>
            }
        />
    </Routes>
  )
}
