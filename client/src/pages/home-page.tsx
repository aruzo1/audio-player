import { Link } from "react-router-dom";
import useQuery from "hooks/use-query";
import VStack from "components/v-stack";
import Container from "components/container";
import Button from "components/button";
import Typography from "components/typography";
import Tracks from "features/tracks/tracks";
import { ITrack } from "features/tracks/types";
import { IGenre } from "features/genres/types";
import GenreTracks from "features/genres/genre-tracks";

const numberOfTracks = 3;

function HomePage() {
  const [tracks] = useQuery<ITrack[]>("tracks?sort=createdAt&order=DESC");
  const [genres] = useQuery<IGenre[]>(`genres?take=${numberOfTracks}`);

  return (
    <Container>
      <VStack gap="1.5rem">
        <Link to="/tracks/upload">
          <Button variant="brand">Upload Track</Button>
        </Link>

        <Tracks title="Latest Tracks" tracks={tracks} />

        {genres === undefined &&
          Array.from({ length: numberOfTracks }, (_, i) => (
            <GenreTracks key={i} genre={undefined} />
          ))}

        {genres &&
          genres.map((genre) => <GenreTracks key={genre.id} genre={genre} />)}

        <Typography>
          Contact e-mail: aruzo@aruzo.it
        </Typography>
      </VStack>
    </Container>
  );
}

export default HomePage;
