import type { AppProps } from "next/app";
import { GlobalStyle, Page } from "styles/global";
import { AudioContext, AudioProvider } from "features/tracks/audio-context";
import Navbar from "components/navbar";
import Head from "next/head";

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
            <Page playing={Boolean(value!.track)}>
              <Component {...pageProps} />
            </Page>
          )}
        </AudioContext.Consumer>
      </AudioProvider>
    </>
  );
}
