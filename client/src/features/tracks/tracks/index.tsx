import Typography from "components/typography";
import VStack from "components/v-stack";
import { ITrack } from "../types";
import Track from "./track";
import TrackSkeleton from "./track-skeleton";
import { TracksList } from "./style";

interface Props {
  title?: string;
  tracks?: ITrack[] | null;
  loading: boolean;
}

function Tracks({ title, tracks, loading }: Props) {
  return (
    <VStack gap="1rem">
      <Typography as="h2" variant="h1" skeleton={loading}>
        {!loading && title}
      </Typography>

      <TracksList>
        {loading
          ? Array.from({ length: 6 }, (_, i) => <TrackSkeleton key={i} />)
          : tracks?.map((track) => <Track key={track.id} track={track} />)}
      </TracksList>
    </VStack>
  );
}

export default Tracks;
