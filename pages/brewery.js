import fetch from "isomorphic-fetch";
import Error from "next/error";
import Layout from "../components/Layout";

class Brewery extends React.Component {
  static async getInitialProps({ req, res, query }) {
    let brewery;
    try {
      const breweryId = query.id;
      const response = await fetch(
        `https://api.openbrewerydb.org/breweries/${breweryId}`
      );
      brewery = await response.json();
    } catch (err) {
      brewery = null;
    }

    return { brewery };
  }

  render() {
    const { brewery } = this.props;

    if (!brewery) {
      return <Error statusCode={503} />;
    }

    return (
      <Layout title={brewery.name}>
        <main>
          <h2 className="brewery-title">{brewery.name}</h2>
          <div className="brewery-details">
            <p>
              {brewery.city}, {brewery.state}
            </p>
            <p>{brewery.street}</p>
            <p>Phone: {brewery.phone}</p>
            <p>
              Website:{" "}
              <a href={brewery.website_url} target="_blank">
                {brewery.website_url}
              </a>
            </p>
          </div>
        </main>

        <style jsx>{`
          main {
            padding: 1em;
          }
          .brewery-title {
            font-size: 1.3rem;
            margin: 0;
            padding: 1rem 0;
            color: #3e3728;
            font-weight: 400;
          }

          .brewery-details {
            padding-bottom: 1em;
            color: #3e3728;
          }
          .brewery-details a {
            color: #f28e1c;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Brewery;
