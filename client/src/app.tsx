import { GlobalStyle } from "styles/global";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "pages/home-page";
import AddTrackPage from "pages/add-track-page";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/tracks", children: [{ path: "add", element: <AddTrackPage /> }] },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
