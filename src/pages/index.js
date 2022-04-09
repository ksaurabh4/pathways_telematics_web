import Feature from "@components/Feature";
import Pricing from "@components/Pricing";
import Hero from "@components/Hero";
import Seo from "@components/Seo";

export default function Home() {
  return (
    <>
      <Seo />
      <Hero />
      <Feature />
      <Pricing />
    </>
  );
}
