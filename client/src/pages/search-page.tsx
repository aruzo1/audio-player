import { useMemo } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import useQuery from "hooks/use-query";
import Container from "components/container";
import Tracks from "features/tracks/tracks";
import { ITrack } from "features/tracks/types";
import Typography from "components/typography";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const term = useMemo(() => searchParams.get("term"), [searchParams]);
  const [tracks] = useQuery<ITrack[]>(`tracks?term=${term}`);

  if (!term) return <Navigate to="/" />;

  return (
    <Container>
      <Typography as="h1" variant="h1">Results for </Typography>

      <Tracks title="Tracks" tracks={tracks} />
    </Container>
  );
}

export default SearchPage;
