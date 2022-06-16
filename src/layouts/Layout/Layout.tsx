import React from 'react';
import './Layout.scss';
import {Header} from "../../component/Header/Header";

type LayoutProps = {
  disableHeader?: boolean,
  children: React.ReactNode
}

export const Layout = ({
 disableHeader,
 children
}: LayoutProps) => {
  return (
    <div className={'layout'}>
      {!disableHeader &&
        <div className="layout__header">
            <Header/>
        </div>
      }
      <div className="layout__content">
        {children}
      </div>
    </div>
  )
}
