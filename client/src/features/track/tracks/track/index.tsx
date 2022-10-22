import { ITrack } from "../../types";
import PlayButton from "components/play-button";
import Typography from "components/typography";
import { Disclosure } from "components/disclosure";
import {
  TrackCover,
  TrackImg,
  TrackOverlap,
  TrackInfo,
  TrackMenu,
  TrackMenuContent,
} from "./style";
import Button from "components/button";
import DotsIcon from "./dots-icon";
import useTrack from "./use-track";

function Track({ track }: { track: ITrack }) {
  const { playing, toggleTrack, menu, hovering, hoveringListener } =
    useTrack(track);

  return (
    <li>
      <TrackCover {...hoveringListener}>
        <TrackImg src={track.coverUrl} alt={`${track.title} cover`} />

        <TrackOverlap className="track-overlap" playing={playing}>
          <PlayButton variant="brand" playing={playing} onClick={toggleTrack} />
        </TrackOverlap>

        <TrackMenu ref={menu.ref} visible={menu.disclosure.visible || hovering}>
          <Disclosure disclosure={menu.disclosure}>
            <Disclosure.Button>
              <Button size="sm">
                <DotsIcon />
              </Button>
            </Disclosure.Button>

            <Disclosure.Content>
              <TrackMenuContent>
                <li>
                  <Button full={true}>Edit</Button>
                </li>
                <li>
                  <Button full={true}>Delete</Button>
                </li>
              </TrackMenuContent>
            </Disclosure.Content>
          </Disclosure>
        </TrackMenu>
      </TrackCover>

      <TrackInfo>
        <Typography as="h3" variant="h4" truncate={true}>
          {track.title}
        </Typography>

        <Typography as="span" truncate={true}>
          {track.author}
        </Typography>
      </TrackInfo>
    </li>
  );
}

export default Track;
