import React from "react";
import Drawer from "@mui/material/Drawer";
import styled from "styled-components";
import SpotifyLogo from "../assets/Spotify_Logo.png";
import FilterList from "./FilterList";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useDispatch, useSelector } from "react-redux";
import { selectView, setView } from "../features/view/viewSlice";
import ListAltIcon from "@mui/icons-material/ListAlt";
import GridOnIcon from "@mui/icons-material/GridOn";
const Image = styled.img`
  width: 65%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

function ResponsiveDrawer({ drawerWidth, handleDrawerToggle, openDrawer }) {
  let view = useSelector(selectView);
  let dispatch = useDispatch();
  function handleViewChange(event, newView) {
    dispatch(setView(newView));
  }
  const drawer = (
    <Container>
      <Image src={SpotifyLogo} alt="Spotify Logo"></Image>
      <FilterList></FilterList>
      <ToggleButtonGroup
        color="success"
        value={view}
        exclusive
        onChange={handleViewChange}
        aria-label="Platform"
      >
        <ToggleButton value="Grid">
          <GridOnIcon></GridOnIcon>
        </ToggleButton>
        <ToggleButton value="List">
          <ListAltIcon></ListAltIcon>
        </ToggleButton>
      </ToggleButtonGroup>
    </Container>
  );
  return (
    <>
      <Drawer
        variant="temporary"
        open={openDrawer}
        onClose={() => {
          handleDrawerToggle(false);
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            padding: "1.5em",
            backgroundColor: "black",
            width: drawerWidth,
            color: "white",
          },
        }}
      >
        {drawer}
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            backgroundColor: "black",
            width: drawerWidth,
            padding: "1.5em",
            color: "white",
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default ResponsiveDrawer;
