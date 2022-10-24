import Typography from "components/typography";
import VStack from "components/v-stack";
import { ITrack } from "../types";
import Track from "./track";
import TrackSkeleton from "./track-skeleton";
import { TracksList } from "./style";

interface Props {
  title?: string;
  tracks?: ITrack[] | null;
}

function Tracks({ title, tracks }: Props) {
  if (tracks?.length === 0 || tracks === null) return null;

  return (
    <VStack gap="1rem">
      <Typography as="h2" variant="h1" skeleton={Boolean(!tracks)}>
        {tracks && title}
      </Typography>

      <TracksList>
        {tracks
          ? tracks.map((track) => <Track key={track.id} track={track} />)
          : Array.from({ length: 6 }, (_, i) => <TrackSkeleton key={i} />)}
      </TracksList>
    </VStack>
  );
}

export default Tracks;
