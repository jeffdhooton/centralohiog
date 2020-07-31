import client from "../services/contentful";
import Link from "next/link";

import Layout from "../components/Layout";
import AreaCard from "../components/AreaCard";

export default function Home(props) {
  return (
    <Layout
      title="Central Ohio Guide"
      metaDescription="Your #1 resource for learning about Central Ohio cities and neighborhoods"
    >
      <div className="homefold">
        <div className="homefold__wrapper">
          <h1>Central Ohio Guide</h1>
          <span className="h2 opensans">
            Your #1 Guide to the Central Ohio Area
          </span>
          <div className="homefold__buttons">
            <Link href="/resources">
              <a className="button button-primary">Resources</a>
            </Link>
            <Link href="/contact">
              <a className="button button-tertiarylight">Call Now</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="homefoldcards">
        <div className="homefoldcards__header">
          <h2>Main Locations in Columbus, Ohio</h2>
          <p className="large">
            The main locations that make up the city of Columbus, Ohio are
            listed below. Each has their own character and makeup, so make sure
            you visit each page to find the area you're looking for information
            on.
          </p>
          <p className="large">
            Most of these areas are going to be made up of smaller
            neighborhoods, however there are some exceptions to this rule.
          </p>
        </div>
        <div className="homefoldcards__grid">
          {props.broadAreas.items.map((item) => {
            return <AreaCard fields={item.fields} key={item.sys.id}></AreaCard>;
          })}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const broadAreas = await client.getEntries({
    content_type: "broadArea",
  });

  return {
    props: { broadAreas },
  };
}
