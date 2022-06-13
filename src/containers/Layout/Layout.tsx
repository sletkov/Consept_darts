import React from 'react';
import './Layout.scss';
import {Router} from "../../router/Router";
import {Header} from "../../component/Header/Header";

export const Layout = () => {
  return (
    <div className={'layout'}>
      <div className="layout__header">
        <Header/>
      </div>
      <div className="layout__content">
        <Router />
      </div>
    </div>
  )
}
