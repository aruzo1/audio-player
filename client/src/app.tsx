import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { GlobalStyle, Page } from "styles/global";
import Navbar from "components/navbar";
import { AudioContext, AudioProvider } from "features/tracks/audio-context";
import ControlBar from "features/tracks/control-bar";
import HomePage from "pages/home-page";
import UploadTrackPage from "pages/upload-track-page";
import EditTrackPage from "pages/edit-track-page";
import SearchPage from "pages/search-page";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <AudioProvider>
        <Navbar />

        <AudioContext.Consumer>
          {(value) => (
            <Page playing={Boolean(value!.track)}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/tracks">
                  <Route path="upload" element={<UploadTrackPage />} />
                  <Route path="edit/:id" element={<EditTrackPage />} />
                </Route>
                <Route path="/search" element={<SearchPage />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </Page>
          )}
        </AudioContext.Consumer>

        <ControlBar />
      </AudioProvider>
    </BrowserRouter>
  );
}

export default App;
