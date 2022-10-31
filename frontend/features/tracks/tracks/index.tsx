import Typography from "components/typography";
import VStack from "components/v-stack";
import { ITrack } from "../types";
import Track from "./track";
import { TracksList } from "./style";

interface Props {
  title?: string;
  tracks: ITrack[];
}

function Tracks({ title, tracks }: Props) {
  if (tracks?.length === 0 || tracks === null) return null;

  return (
    <VStack gap="1rem">
      <Typography as="h2" variant="h1" skeleton={Boolean(!tracks)}>
        {tracks && title}
      </Typography>

      <TracksList>
        {tracks.map((track) => (
          <Track key={track.id} track={track} />
        ))}
      </TracksList>
    </VStack>
  );
}

export default Tracks;
