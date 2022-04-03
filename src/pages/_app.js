import "@styles/tailwind.css";
import "@styles/slick.css";
import Layout from "../components/Layout/Layout";


function MyApp({ Component, pageProps }) {
  return <Layout> <div className="h-24"></div><Component {...pageProps} /></Layout>;
}

export default MyApp;
