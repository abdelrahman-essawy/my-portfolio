import "../styles/globals.css";
import Loading from "./loading";

function MyApp({ Component, pageProps }) {
  return <Component fallback={<Loading />} {...pageProps} />;
}

export default MyApp;
