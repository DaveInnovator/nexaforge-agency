import Hero from "../components/Hero";
import Features from "../components/Features";
import Process from "../components/Process";
import Services from "../components/Services";
import Portfolio from "../components/portfolio";
import { Helmet } from 'react-helmet'
export default function Home() {
  return (
    <>
      <Helmet>
        <title>NexaForge – Build Bold. Craft Better.</title>
        <meta name="description" content="We help brands launch faster with custom websites powered by React, WordPress & Framer." />
        <meta property="og:title" content="NexaForge – Build Bold. Craft Better." />
        <meta property="og:description" content="Launch your online business with blazing-fast websites and bold design." />
        <meta property="og:image" content="https://nexaforge.pxxl.live/assets/nexa-DXdIke4O.png" />
      </Helmet>
      <Hero />
      <Process />
      <Features />
      <Services />
      <Portfolio />
    </>
  );
}
