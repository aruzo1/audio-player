import type { AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyle, Page } from "styles/global";
import Navbar from "components/navbar";
import { AudioContext, AudioProvider } from "features/tracks/audio-context";
import ControlBar from "features/tracks/control-bar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Audio Player</title>
      </Head>

      <GlobalStyle />

      <AudioProvider>
        <Navbar />
        <AudioContext.Consumer>
          {(value) => (
            <Page playing={Boolean(value?.track)}>
              <Component {...pageProps} />
            </Page>
          )}
        </AudioContext.Consumer>
        <ControlBar />
      </AudioProvider>
    </>
  );
}
