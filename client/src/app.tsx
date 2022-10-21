import { GlobalStyle } from "styles/global";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AudioProvider } from "features/track/audio-context";
import ControlBar from "features/track/control-bar";
import HomePage from "pages/home-page";
import AddTrackPage from "pages/add-track-page";
import { Layout, Main } from "styles/layout";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/tracks", children: [{ path: "add", element: <AddTrackPage /> }] },
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
