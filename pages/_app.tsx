import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  <Layout>
    <Component {...pageProps} />
  </Layout>;
}

export default MyApp;
