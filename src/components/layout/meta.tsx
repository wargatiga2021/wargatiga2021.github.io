import Head from "next/head";

const Meta = () => {
  return (
    <Head>
      <title>Halo | Warga Tiga 2021</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Warga Tiga 2021's website."
      />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="RSS feed for Warga Tiga 21's blog posts"
        href="https://2021.wargati.ga/rss.xml"
      />
    </Head>
  );
};

export default Meta;
