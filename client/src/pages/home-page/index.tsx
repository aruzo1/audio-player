import Button from "components/button";
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
            <Button>Add Track</Button>
            <Tracks />
          </MainContainer>
        </Main>
        <ControlBar />
      </AudioProvider>
    </StyledHomePage>
  );
}

export default HomePage;
