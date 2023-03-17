import React from "react";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import { ToastProvider, ToastViewport } from "../components/Toast";
import { useSectionInViewObserver } from "../utils/useSectionInViewObserver";

function MyApp({ Component, pageProps }: AppProps) {
  const [enableViewObserver, setEnableViewObserver] = React.useState(false);
  useSectionInViewObserver({ headerHeight: 72, enabled: enableViewObserver });

  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href={`/favicon.png`} />
        <title>Prompts Explorer by Raycast</title>

        <meta
          property="og:image"
          content="https://Promptss.ray.so/og-image.png"
          key="og-image"
        />

        <meta
          property="og:title"
          content="Prompts Explorer by Raycast"
          key="og-title"
        />
        <meta
          property="og:description"
          content="Prompts Explorer is a tool to easily browse and import
          AI Commands directly to Raycast."
          key="og-description"
        />
        <meta property="og:type" content="website" key="og-type" />
        <meta
          property="twitter:card"
          content="summary_large_image"
          key="twitter-card"
        />
        <meta property="twitter:site" content="@raycastapp" />
        <meta
          name="description"
          content="Prompts Explorer is a tool to easily browse and import
          AI Commands directly to Raycast."
        />
      </Head>
      <ToastProvider swipeDirection="down">
        <Component
          {...pageProps}
          onTouchReady={() => setEnableViewObserver(true)}
        />
        <ToastViewport />
      </ToastProvider>
      <Analytics />
    </>
  );
}

export default MyApp;
