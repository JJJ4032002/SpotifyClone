import React from "react";
import styled from "styled-components/macro";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const List = styled(Container)`
  gap: 1em;
  width: 90%;
`;

const ListItem = styled(Container)`
  flex-direction: row;
`;
const TrackInfo = styled(Container)`
  flex-direction: row;
  gap: 1em;
`;
const Image = styled.img`
  height: 40px;
  width: 40px;
`;
const Text = styled.div``;
function ListView({ tracks }) {
  return (
    <Container>
      <List as="ol">
        {tracks.map((track) => {
          return (
            <ListItem as="li" key={track.id}>
              <TrackInfo>
                <Image src={track.album.images[2].url} alt={track.name}></Image>
                <Text>
                  <p>{track.name}</p>
                  <span>{track.artists[0].name}</span>
                </Text>
              </TrackInfo>
              <p></p>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
}

export default ListView;
