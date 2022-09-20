import { AudioProvider } from "features/track/audio-context";
import { TracksProvider } from "features/track/tracks-context";
import AddTrackForm from "features/track/add-track-form";
import ControlBar from "features/track/control-bar";
import Tracks from "features/track/tracks";

function App() {
  return (
    <AudioProvider>
      <TracksProvider>
        <AddTrackForm />
        <Tracks />
      </TracksProvider>
      <ControlBar />
    </AudioProvider>
  );
}

export default App;
