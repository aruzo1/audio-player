import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "styles/global";
import Navbar from "components/navbar";
import { AudioProvider } from "features/tracks/audio-context";
import ControlBar from "features/tracks/control-bar";
import HomePage from "pages/home-page";
import UploadTrackPage from "pages/upload-track-page";
import EditTrackPage from "pages/edit-track-page";
import SearchPage from "pages/search-page";
import { Layout, Main } from "styles/layout";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Layout>
        <AudioProvider>
          <Navbar />

          <Main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/tracks">
                <Route path="upload" element={<UploadTrackPage />} />
                <Route path="edit/:id" element={<EditTrackPage />} />
              </Route>
              <Route path="/search" element={<SearchPage />} />
            </Routes>
          </Main>

          <ControlBar />
        </AudioProvider>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
