import { Link } from "react-router-dom";
import useQuery from "hooks/use-query";
import VStack from "components/v-stack";
import Container from "components/container";
import Button from "components/button";
import Tracks from "features/tracks/tracks";
import { ITrack } from "features/tracks/types";
import { IGenre } from "features/genres/types";
import GenreTracks from "features/genres/genre-tracks";

const numberOfTracks = 3;

function HomePage() {
  const [tracks] = useQuery<ITrack[]>("tracks");
  const [genres] = useQuery<IGenre[]>(`genres?take=${numberOfTracks}`);

  return (
    <Container>
      <VStack gap="1rem">
        <Link to="/tracks/upload">
          <Button variant="brand">Upload Track</Button>
        </Link>

        <Tracks title="Latest Tracks" tracks={tracks} />

        {genres
          ? genres.map((genre) => <GenreTracks genre={genre} />)
          : Array.from({ length: numberOfTracks }, (_, i) => (
              <GenreTracks key={i} genre={undefined} />
            ))}
      </VStack>
    </Container>
  );
}

export default HomePage;
