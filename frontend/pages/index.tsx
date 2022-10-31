import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import pagesPropsService from "services/pages-props-service";
import Button from "components/button";
import Container from "components/container";
import Typography from "components/typography";
import VStack from "components/v-stack";
import Tracks from "features/tracks/tracks";

type Props = Awaited<ReturnType<typeof pagesPropsService["getHomeProps"]>>;

const HomePage: NextPage<Props> = ({ latestTracks, genres, genresTracks }) => {
  return (
    <Container>
      <VStack gap="1.5rem">
        <Link href="/tracks/upload">
          <Button variant="brand">Upload Track</Button>
        </Link>

        <Tracks title="Latest Tracks" tracks={latestTracks} />

        {genres.map(({ name }, i) => (
          <Tracks key={i} title={name} tracks={genresTracks[i]} />
        ))}

        <Typography>Contact e-mail: aruzo@aruzo.it</Typography>
      </VStack>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: await pagesPropsService.getHomeProps() };
};

export default HomePage;
