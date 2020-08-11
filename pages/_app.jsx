import "../style/bootstrap.min.css";
import Navbar from "../components/Nav";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Code The Universe</title>
        <link rel="stylesheet" href="/assets/css/Footer-Dark.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <Navbar />
      <br />
      <Component {...pageProps} /> <br />
      <script src="assets/js/identity.js"></script>
    </>
  );
}
