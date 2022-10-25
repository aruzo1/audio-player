import { useEffect, useMemo } from "react";
import useQuery from "hooks/use-query";
import { ITrack } from "features/tracks/types";
import Tracks from "features/tracks/tracks";
import { IGenre } from "features/genres/types";

function GenreTracks({ genre }: { genre?: IGenre }) {
  const url = useMemo(() => genre && `tracks?genreId=${genre?.id}`, [genre]);
  const [tracks, { query: queryTracks }] = useQuery<ITrack[]>(url);

  useEffect(() => {
    if (url) queryTracks();
  }, [url, queryTracks]);

  return <Tracks title={genre?.name} tracks={tracks} />;
}

export default GenreTracks;
