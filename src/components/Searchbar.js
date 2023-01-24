import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { setQuery } from "../features/query/querySlice";
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6em;
  padding: 0.5em 0.7em 0.5em 0.7em;
  width: 100%;
  border-radius: 10em;
  background-color: white;
  @media (min-width: 420px) {
    max-width: 325px;
  }
`;
const SearchInput = styled.input`
  width: 100%;
  border: 1px solid transparent;
  font-family: "Gotham", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 0.9rem;
  &:focus {
    outline: none;
  }
`;
function Searchbar() {
  let dispatch = useDispatch();
  const [artist, setArtist] = useState("");
  function handleOnChange(event) {
    setArtist(event.target.value);
    if (event.target.value) {
      dispatch(setQuery(event.target.value));
    } else {
      dispatch(setQuery("rock"));
    }
  }
  return (
    <Container>
      <SearchIcon></SearchIcon>
      <SearchInput
        value={artist}
        onChange={handleOnChange}
        placeholder="What do you want to listen to?"
      ></SearchInput>
    </Container>
  );
}

export default Searchbar;
