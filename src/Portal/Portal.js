import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../Shared/SideBar'
import TopBar from '../Shared/TopBar'

function Portal() {
  return (
    <>
    <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <TopBar />
            <div id="container-fluid">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
    </div>
    </>
  );
}

export default Portal