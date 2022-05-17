import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import Head from "next/head";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>PokeNext</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
