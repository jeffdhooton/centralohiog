import * as React from "react";
import Head from "next/head";

import Header from "./Header";

import "../styles/styles.global.scss";

type LayoutProps = {
  title?: string;
  metaDescription?: string;
};

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  title,
  metaDescription,
}) => {
  return (
    <div>
      {title && (
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0" />
          <meta name="description" content={metaDescription} />
        </Head>
      )}
      <Header />
      {children}
    </div>
  );
};

export default Layout;
