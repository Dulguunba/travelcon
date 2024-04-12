import { Footer } from "@/components/supports/destinationPage/Footer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Head>
        <title>Mon Sky</title>
        <meta property="og:title" content="Travel to Mongolia" />
        <meta property="og:description" content="Explore our top destinations" />
        <meta property="og:image" content="https://travelcon-p0dtdjlkc-dulguuns-projects-946229cd.vercel.app//HomeBackground.jpg" />
        <meta property="og:url" content="https://travelcon-p0dtdjlkc-dulguuns-projects-946229cd.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="description" content="Travel to Mongolia" />
        <meta name="keywords" content="Travel,visit,best place,mongolia, best time, travel guide " />
        <link rel="canonical" href="https://travelcon-p0dtdjlkc-dulguuns-projects-946229cd.vercel.app/" />
      </Head>
      <Component {...pageProps} />
    </UserProvider>
  );
}
