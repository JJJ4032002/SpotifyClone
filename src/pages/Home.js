import React, { useState } from "react";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import TracksView from "../components/TracksView";
import styled from "styled-components/macro";
const Main = styled.main`
  display: flex;
  min-height: 100vh;
  background-color: #121212;
`;
const drawerWidth = 240;
function Home() {
  const [openDrawer, setOpenDrawer] = useState(false);
  function handleDrawerToggle(state) {
    setOpenDrawer(state);
  }
  return (
    <Main>
      <ResponsiveDrawer
        drawerWidth={drawerWidth}
        openDrawer={openDrawer}
        handleDrawerToggle={handleDrawerToggle}
      ></ResponsiveDrawer>
      <TracksView
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      ></TracksView>
    </Main>
  );
}

export default Home;
