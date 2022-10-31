import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Container from "components/container";
import Tracks from "features/tracks/tracks";
import pagesPropsService from "services/pages-props-service";

type Props = Awaited<ReturnType<typeof pagesPropsService["getSearchProps"]>>;

const SearchPage: NextPage<Props> = ({ tracks, term }) => {
  return (
    <Container>
      <Head>
        <title>{term} - Audio Player</title>
      </Head>

      <Tracks title="Tracks" tracks={tracks} />
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const term = query.term;

  if (typeof term !== "string") {
    return { redirect: { destination: "/", permanent: false } };
  }

  return { props: await pagesPropsService.getSearchProps(term) };
};

export default SearchPage;
