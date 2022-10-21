import { Link } from "react-router-dom";
import Button from "components/button";
import Typography from "components/typography";
import VStack from "components/v-stack";
import Container from "components/container";
import Tracks from "features/track/tracks";

function HomePage() {
  return (
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
  );
}

export default HomePage;
