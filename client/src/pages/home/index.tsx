import Button from "components/button";
import { AudioProvider } from "features/track/audio-context";
import ControlBar from "features/track/control-bar";
import Tracks from "features/track/tracks";
import { StyledHome, Main, MainContainer } from "./style";

function Home() {
  return (
    <StyledHome>
      <AudioProvider>
        <Main>
          <MainContainer>
            <Button>Add Track</Button>
            <Tracks />
          </MainContainer>
        </Main>
        <ControlBar />
      </AudioProvider>
    </StyledHome>
  );
}

export default Home;
