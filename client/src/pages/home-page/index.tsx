import Button from "components/button";
import Typography from "components/typography";
import { AudioProvider } from "features/track/audio-context";
import ControlBar from "features/track/control-bar";
import Tracks from "features/track/tracks";
import { StyledHomePage, Main, MainContainer } from "./style";

function HomePage() {
  return (
    <StyledHomePage>
      <AudioProvider>
        <Main>
          <MainContainer>
            <Button variant="brand">Add Track</Button>
            <Typography as="h2" variant="h1">
              Latest Tracks
            </Typography>
            <Tracks />
          </MainContainer>
        </Main>
        <ControlBar />
      </AudioProvider>
    </StyledHomePage>
  );
}

export default HomePage;
