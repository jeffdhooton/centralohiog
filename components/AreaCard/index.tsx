import * as React from 'react';
import slugify from 'slugify';
import Link from 'next/link';

type AreaCardFields = {
  title?: string;
  metaDescription?: string;
  featuredImage?: any;
  content?: any;
};

type AreaCardProps = {
  parentArea?: string;
  fields: AreaCardFields;
};

export default function AreaCard(props: AreaCardProps) {
  const { title, metaDescription, featuredImage, content } = props.fields;

  return (
    <div className="areacard">
      <div className="areacard__wrapper">
        <Link href={`/${props.parentArea}/${slugify(title.toLowerCase())}`}>
          <a>
            <img
              src={featuredImage.fields.file.url}
              alt={featuredImage.fields.title}
            />
            <div className="areacard__copy">
              <span className="h3 opensans">{title}</span>
              <p>{metaDescription}</p>
              <span className="primary bold large link">Learn More</span>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
