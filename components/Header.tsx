import * as React from 'react';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="header__grid max-width">
        <div className="header__brand">
          <Link href="/">
            <a className="opensans brand">Central Ohio Guide</a>
          </Link>
        </div>
        <nav className="header__menu">
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/columbus-neighborhoods">
            <a>Columbus Neighborhoods</a>
          </Link>
          <Link href="/columbus-metro-area">
            <a>Columbus Metro Cities</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <Link href="/resources">
            <a>Resources</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
