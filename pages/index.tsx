import client from "../services/contentful";

import Layout from "../components/Layout";

export default function Home({ props }) {
  return (
    <Layout
      title="Central Ohio Guide"
      metaDescription="Your #1 resource for learning about Central Ohio cities and neighborhoods"
    >
      <h1>Home Page</h1>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await client.getEntries();

  return {
    props: { data },
  };
}
