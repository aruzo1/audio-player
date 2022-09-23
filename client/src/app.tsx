import { AudioProvider } from "features/track/audio-context";
import { GlobalStyle } from "styles/global";
import { AppLayout, Main } from "styles/app-layout";
import { TracksProvider } from "features/track/tracks-context";
import ControlBar from "features/track/control-bar";
import Tracks from "features/track/tracks";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppLayout>
        <AudioProvider>
          <Main>
            <TracksProvider>
              <Tracks />
            </TracksProvider>
          </Main>
          <ControlBar />
        </AudioProvider>
      </AppLayout>
    </>
  );
}

export default App;
