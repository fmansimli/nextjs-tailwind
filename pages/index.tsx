import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id="hero" className="container flex flex-col gap-y-10">
        <textarea name="" id="" cols={10} rows={6}></textarea>
        <button>apply</button>
      </section>
    </div>
  );
};

export default Home;
