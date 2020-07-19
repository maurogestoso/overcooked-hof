import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://fonts.xz.style/serve/inter.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css"
        />
      </Head>
      <header>
        <h1>👨🏽‍🍳👩🏿‍🍳🏆 Overcooked Hall of Fame</h1>
      </header>
      {children}
    </div>
  );
}
