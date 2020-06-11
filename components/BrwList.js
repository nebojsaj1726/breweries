import Link from "next/link";

const BrwList = ({ breweries }) => (
  <div className="breweries-list">
    {breweries.map((brewery) => (
      <div className="breweries" key={brewery.id}>
        <h2 className="breweries-title">{brewery.name}</h2>
        <div className="brewery-details">
          <p>{brewery.state}</p>
          <p>{brewery.street}</p>
          <p>Type: {brewery.brewery_type}</p>
          <Link href={`/brewery?id=${brewery.id}`}>
            <a>More...</a>
          </Link>
        </div>

        <hr />
      </div>
    ))}

    <style jsx>{`
      .breweries-list {
        padding: 1em;
      }
      .breweries {
        padding: 1em 0;
      }
      .breweries-title {
        font-size: 1.5rem;
        font-weight: 400;
        margin: 0;
        position: relative;
        color: #3e3728;
      }
      .breweries-title:after {
        content: "";
        display: block;
        width: 3rem;
        height: 0.2rem;
        background-color: #f28e1c;
        position: absolute;
        bottom: -0.5rem;
        left: 0;
      }
      .brewery-details {
        margin: 1.5rem 0;
        color: #3e3728;
      }
      .breweries a {
        color: #3e3728;
        text-decoration: none;
        font-weight: bold;
      }
      .breweries a:hover {
        text-decoration: underline;
      }
    `}</style>
  </div>
);

export default BrwList;
