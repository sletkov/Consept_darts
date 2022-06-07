import React from 'react';
import './Layout.scss';
import {Router} from "../../router/Router";

export const Layout = () => {
  return (
    <div className={'layout'}>
      <div className="layout__header">
        {/* TODO: make header component here */}
        header
      </div>
      <div className="layout__content">
        <Router />
      </div>
    </div>
  )
}