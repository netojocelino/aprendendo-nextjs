import Head from 'next/head';

export default function Home({ title = 'Boilerplate React' }) {
  return (
    <div>
      <Head>
        <title>{title} </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{title}</h1>
      </main>
    </div>
  );
}
