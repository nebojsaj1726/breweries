import Link from "next/link";
import Head from "next/head";

const Layout = ({ children, title, description }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>

    <nav>
      <Link href="/">
        <a>
          <span className="main-title">Breweries in USA</span>
        </a>
      </Link>
    </nav>
    <div className="container">{children}</div>

    <style jsx>{`
      .container {
        max-width: 80%;
        margin: 0 auto;
        background: #f6f6ef;
      }
      nav {
        padding: 1em;
        text-align: center;
        margin-top: 2rem;
        margin-bottom: 3rem;
      }
      nav a {
        text-decoration: none;
        color: #3e3728;
      }
      nav .main-title {
        font-size: 1.8rem;
      }
    `}</style>
    <style global jsx>{`
      body {
        font-family: Georgia, sans-serif;
      }
    `}</style>
  </div>
);

export default Layout;
