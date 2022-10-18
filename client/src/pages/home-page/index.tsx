import { Link } from "react-router-dom";
import Button from "components/button";
import Typography from "components/typography";
import VStack from "components/v-stack";
import Container from "components/container";
import { AudioProvider } from "features/track/audio-context";
import ControlBar from "features/track/control-bar";
import Tracks from "features/track/tracks";
import { StyledHomePage, Main } from "./style";

function HomePage() {
  return (
    <StyledHomePage>
      <AudioProvider>
        <Main>
          <Container>
            <VStack gap="1rem">
              <Link to="/tracks/add">
                <Button variant="brand">Add Track</Button>
              </Link>
              <Typography as="h2" variant="h1">
                Latest Tracks
              </Typography>
              <Tracks />
            </VStack>
          </Container>
        </Main>
        <ControlBar />
      </AudioProvider>
    </StyledHomePage>
  );
}

export default HomePage;
