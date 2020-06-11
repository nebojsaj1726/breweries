import fetch from "isomorphic-fetch";
import Error from "next/error";
import BrwList from "../components/BrwList";
import Layout from "../components/Layout";
import Link from "next/link";

class Index extends React.Component {
  static async getInitialProps({ req, res, query }) {
    let breweries;
    let page;

    try {
      page = Number(query.page) || 1;
      const response = await fetch(
        `https://api.openbrewerydb.org/breweries?page=${page}`
      );
      breweries = await response.json();
    } catch (err) {
      breweries = [];
    }

    return { page, breweries };
  }

  render() {
    const { breweries, page } = this.props;

    if (breweries.length === 0) {
      return <Error statusCode={503} />;
    }

    return (
      <Layout title="Breweries" description="Next.js project">
        <BrwList breweries={breweries} />

        <footer>
          <Link href={`?page=${page + 1}`}>
            <a>Next Page ({page + 1})</a>
          </Link>
        </footer>

        <style jsx>{`
          footer {
            padding: 1em;
          }
          footer a {
            font-weight: bold;
            color: #3e3728;
            text-decoration: none;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Index;
