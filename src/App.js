import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Home from "./pages/Home";
import SpotifyLogo from "./assets/Spotify_Logo.png";
import styled from "styled-components";
import { selectToken, setToken } from "./features/token/tokenSlice";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const CLIENT_ID = "cc28a8f065324d06b2b26c2a03c7e1c2";
const REDIRECT_URI = "https://jjj4032002.github.io/SpotifyClone";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";
const Main = styled.main`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: #121212;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;
const LoginLink = styled.a`
  text-decoration: none;
  color: black;
  background-color: #1ed760;
  padding: 0.7em 1.2em;
  border-radius: 10em;
`;
const Image = styled.img`
  width: 25%;
`;

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
function App() {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    dispatch(setToken(token));
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      {token === null ? (
        <Main>
          <Image src={SpotifyLogo}></Image>
          <LoginLink
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Login
          </LoginLink>
        </Main>
      ) : (
        <Home></Home>
      )}
    </ThemeProvider>
  );
}

export default App;
