import { Link } from "react-router-dom";
import useQuery from "hooks/use-query";
import Button from "components/button";
import Typography from "components/typography";
import VStack from "components/v-stack";
import Container from "components/container";
import { ITrack } from "features/tracks/types";
import Tracks from "features/tracks/tracks";

function HomePage() {
  const [randomTracks] = useQuery<ITrack[]>("tracks");

  return (
    <Container>
      <VStack gap="1rem">
        <Link to="/tracks/add">
          <Button variant="brand">Add Track</Button>
        </Link>

        <Typography as="h2" variant="h1">
          Latest Tracks
        </Typography>
        <Tracks tracks={randomTracks} />
      </VStack>
    </Container>
  );
}

export default HomePage;
