import { AudioProvider } from "features/track/audio-context";
import { GlobalStyle } from "styles/global";
import { AppLayout, Main } from "styles/app-layout";
import ControlBar from "features/track/control-bar";
import Tracks from "features/track/tracks";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppLayout>
        <AudioProvider>
          <Main>
            <Tracks />
          </Main>
          <ControlBar />
        </AudioProvider>
      </AppLayout>
    </>
  );
}

export default App;
