import HomePage from "../pages/home";
import Head from "next/head";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <ToastContainer />
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.jpg" />
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        />
      </Head>
      <HomePage />
      <ToastContainer />
    </>
  );
}
