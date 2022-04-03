import Head from "next/head";
import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pathways Telematics </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Feature />
      <Pricing />
    </>
  );
}
