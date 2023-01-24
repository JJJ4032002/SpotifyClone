import React, { useState } from "react";
import Searchbar from "./Searchbar";
import styled from "styled-components";
import useWindowSize from "../hooks/useWindowSize";
import MenuIcon from "@mui/icons-material/Menu";
import GridView from "./GridView";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectPopularity } from "../features/filter/filterSlice";
import Pagination from "@mui/material/Pagination";
import FilterByPopularity from "../helpers/FilterByPopularity";
import { useGetTracksQuery } from "../features/api/apiSlice";
import useDebounce from "../hooks/useDebounce";
import { selectQuery } from "../features/query/querySlice";
import { selectCountries } from "../features/filter/filterSlice";
import Error from "../assets/Error.svg";
import { selectView } from "../features/view/viewSlice";
import ListView from "./ListView";
import { setToken } from "../features/token/tokenSlice";
const PostsPerPage = 10;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 1em;
  width: 100%;
  @media (min-width: 600px) {
    width: calc(100% - ${(props) => props.width}px);
  }
`;
const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 2em;
`;
const TracksContainer = styled.div`
  flex: 1;
  padding: 1em 0em;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
const Image = styled.img`
  width: 70%;
`;

function TracksView({ drawerWidth, handleDrawerToggle }) {
  let query = useSelector(selectQuery);
  let Country = useSelector(selectCountries);
  let dispatch = useDispatch();
  const debouncedSearchTerm = useDebounce(query, 500);
  const SearchObj = { debouncedSearchTerm, Country };
  const {
    data: tracks,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTracksQuery(SearchObj, {
    skip: SearchObj.debouncedSearchTerm == "",
  });

  let [page, setPage] = useState(1);
  const LastPostIndex = page * PostsPerPage;
  const FirstPostIndex = LastPostIndex - PostsPerPage;
  let size = useWindowSize();
  let view = useSelector(selectView);
  let popularity = useSelector(selectPopularity);
  function handlePageChange(event, value) {
    setPage(value);
  }
  let tracksContent;
  if (isSuccess) {
    let PagedPosts = tracks.tracks.items.slice(FirstPostIndex, LastPostIndex);
    let filteredItems = FilterByPopularity(
      PagedPosts,
      popularity.maxRating,
      popularity.minRating
    );
    tracksContent = (
      <>
        {view === "Grid" ? (
          <GridView tracks={filteredItems}></GridView>
        ) : (
          <ListView tracks={filteredItems}></ListView>
        )}
      </>
    );
  } else if (isLoading) {
    tracksContent = <CircularProgress></CircularProgress>;
  } else if (isError) {
    if (error.data.error.message === "The access token expired") {
      window.localStorage.removeItem("token");
      dispatch(setToken(null));
    } else {
      tracksContent = (
        <>
          <Image src={Error} alt="Error"></Image>
          <p>{error.data.error.message}</p>
        </>
      );
    }
  }

  return (
    <Section width={drawerWidth}>
      <SearchBarContainer>
        {size[0] < 600 ? (
          <MenuIcon
            onClick={() => {
              handleDrawerToggle(true);
            }}
            sx={{ color: "white" }}
          ></MenuIcon>
        ) : (
          ""
        )}
        <Searchbar></Searchbar>
      </SearchBarContainer>
      <TracksContainer>{tracksContent}</TracksContainer>
      {isSuccess && (
        <Pagination
          sx={{ color: "white" }}
          count={tracks.tracks.items.length / PostsPerPage}
          page={page}
          onChange={handlePageChange}
        ></Pagination>
      )}
    </Section>
  );
}

export default TracksView;
