import * as React from 'react';
import slugify from 'slugify';
import Link from 'next/link';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import client from '../../../services/contentful';
import Layout from '../../../components/Layout';

export default function Columbus(props: any) {
  const {
    featuredImage,
    content,
    metaDescription,
    title,
    slug
  } = props.neighborhood.items[0].fields;

  return (
    <Layout
      title={`${title} - Columbus | Central Ohio Guide`}
      metaDescription={metaDescription}
    >
      <div
        className="columbusfold"
        style={{
          backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${featuredImage.fields.file.url}')`
        }}
      >
        <div className="columbusfold__wrapper">
          <h1 className="white">{title} - Columbus</h1>
          <div className="columbusfold__breadcrumbs">
            <p className="white large">
              You are here:{' '}
              <Link href="/">
                <a>Home</a>
              </Link>{' '}
              {'>'}{' '}
              <Link href="/columbus">
                <a>Columbus Neighborhoods</a>
              </Link>{' '}
              {'>'} {title}
            </p>
          </div>
          <div className="columbusfold__buttons">
            <a href="#content" className="button button-primary">
              About {title}
            </a>
            <a href="/contact" className="button button-tertiarylight">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <div className="columbuscontent">
        <div className="columbuscontent__wrapper max-width">
          <div
            dangerouslySetInnerHTML={{ __html: documentToHtmlString(content) }}
          ></div>
        </div>
      </div>
    </Layout>
  );
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
