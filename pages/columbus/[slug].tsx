import * as React from 'react';
import slugify from 'slugify';
import { useRouter } from 'next/router';

import client from '../../services/contentful';
import Layout from '../../components/Layout';

export default function Columbus(props: any) {
  const router = useRouter();
  const { slug } = router.query;

  console.log({ props });

  return <Layout></Layout>;
}

export async function getStaticPaths() {
  const entries = await client.getEntries({
    content_type: 'broadArea'
  });

  const paths = entries.items.map((item: any) => {
    return {
      params: {
        slug: item.fields.slug
          ? item.fields.slug
          : slugify(item.fields.title.toLowerCase())
      }
    };
  });

  return {
    paths: paths,
    fallback: false
  };
}

export async function getStaticProps(context: any) {
  const neighborhood = await client.getEntries({
    content_type: 'broadArea',
    'fields.slug': context.params.slug
  });

  return {
    props: { neighborhood }
  };
}
