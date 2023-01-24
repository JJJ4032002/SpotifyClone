import React from "react";
import styled from "styled-components/macro";
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: auto;
  gap: 1em;
  width: 100%;
`;
const GridItem = styled.div`
  padding: 0.3em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

const ImageContainer = styled.div`
  width: 100%;
`;
const Image = styled.img`
  width: 100%;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;
function GridView({ tracks }) {
  return (
    <Container>
      {tracks.map((track) => {
        return (
          <GridItem key={track.id} className="gridItem">
            <ImageContainer>
              <Image src={track.album.images[1].url} alt={track.name}></Image>
            </ImageContainer>
            <TextContainer>
              <p>{track.name}</p>
              <span>{track.artists[0].name}</span>
            </TextContainer>
          </GridItem>
        );
      })}
    </Container>
  );
}

export default GridView;
