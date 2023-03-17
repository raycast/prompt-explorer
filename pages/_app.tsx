import React from "react";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";

import { Inter, JetBrains_Mono } from "next/font/google";

import type { AppProps } from "next/app";
import { ToastProvider, ToastViewport } from "../components/Toast";
import { useSectionInViewObserver } from "../utils/useSectionInViewObserver";

const inter = Inter({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  const [enableViewObserver, setEnableViewObserver] = React.useState(false);
  useSectionInViewObserver({ headerHeight: 72, enabled: enableViewObserver });

  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href={`/favicon.png`} />
        <title>Prompt Explorer by Raycast</title>

        <meta
          property="og:image"
          content="https://prompts.ray.so/og-image.png"
          key="og-image"
        />
        <meta
          property="og:title"
          content="Prompt Explorer by Raycast"
          key="og-title"
        />
        <meta
          property="og:description"
          content="Prompt Explorer is a tool to easily browse and import AI Commands directly to Raycast."
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
          content="Prompt Explorer is a tool to easily browse and import AI Commands directly to Raycast."
        />
      </Head>
      <ToastProvider swipeDirection="down">
        <style jsx global>{`
          :root {
            --font-inter: ${inter.style.fontFamily};
            --font-jetbrains: ${jetbrainsMono.style.fontFamily};
          }
        `}</style>
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
