import React from "react"
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export default props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          lang
          siteUrl
        }
      }
    }
  `);

  const metadata = data.site.siteMetadata
  const title = props.pagetitle ? `${props.pagetitle}|${metadata.title}` : metadata.title
  const description = props.pagedesc || metadata.description

  return (
    <Helmet>
      <html lang={metadata.lang} />
      <title>{title}</title>
      <meta name="description" content={description} />

      <link ref="canonical" href={metadata.siteUrl} />
    </Helmet>
  )
};