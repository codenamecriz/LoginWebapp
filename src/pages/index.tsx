import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Exercise</title>
      </Head>
      <h1>Hello, Bing Bing Bing.</h1>
      <Link href="/register">Register</Link>
    </div>
  );
};

export default Home;
