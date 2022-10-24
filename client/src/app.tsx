import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStyle } from "styles/global";
import { AudioProvider } from "features/tracks/audio-context";
import ControlBar from "features/tracks/control-bar";
import HomePage from "pages/home-page";
import AddTrackPage from "pages/add-track-page";
import EditTrackPage from "pages/edit-track-page";
import SearchPage from "pages/search-page";
import { Layout, Main } from "styles/layout";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  {
    path: "/tracks",
    children: [
      { path: "add", element: <AddTrackPage /> },
      { path: "edit/:id", element: <EditTrackPage /> },
    ],
  },
  { path: "/search", element: <SearchPage /> },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <AudioProvider>
          <Main>
            <RouterProvider router={router} />
          </Main>
          <ControlBar />
        </AudioProvider>
      </Layout>
    </>
  );
}

export default App;
