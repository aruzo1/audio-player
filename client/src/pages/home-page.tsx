import { Link } from "react-router-dom";
import useQuery from "hooks/use-query";
import VStack from "components/v-stack";
import Container from "components/container";
import Button from "components/button";
import Tracks from "features/tracks/tracks";
import { ITrack } from "features/tracks/types";

function HomePage() {
  const [tracks] = useQuery<ITrack[]>("tracks");

  return (
    <Container>
      <VStack gap="1rem">
        <Link to="/tracks/upload">
          <Button variant="brand">Upload Track</Button>
        </Link>

        <Tracks title="Latest Tracks" tracks={tracks} />
      </VStack>
    </Container>
  );
}

export default HomePage;
