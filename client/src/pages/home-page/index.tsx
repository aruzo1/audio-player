import { Link } from "react-router-dom";
import useQuery from "hooks/use-query";
import Button from "components/button";
import VStack from "components/v-stack";
import Container from "components/container";
import SearchBar from "pages/home-page/search-bar";
import Tracks from "features/tracks/tracks";
import { ITrack } from "features/tracks/types";

function HomePage() {
  const [tracks] = useQuery<ITrack[]>("tracks");

  return (
    <Container>
      <VStack gap="1rem">
        <Link to="/tracks/add">
          <Button variant="brand">Add Track</Button>
        </Link>
        <SearchBar />

        <Tracks title="Latest Tracks" tracks={tracks} />
      </VStack>
    </Container>
  );
}

export default HomePage;
