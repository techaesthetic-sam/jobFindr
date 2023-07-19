import React from "react";
import { Outlet } from "react-router-dom";
import { BigSideBar, SmallSideBar, Navbar } from "../../components";
import Wrapper from "../../wrappers/SharedLayout";
export default function SharedLayout() {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSideBar />
        <BigSideBar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
}
