import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          lang
          siteUrl
          locale
        }
      }
    }
  `)

  const metadata = data.site.siteMetadata
  const title = props.pagetitle
    ? `${props.pagetitle}|${metadata.title}`
    : metadata.title
  const description = props.pagedesc || metadata.description
  const url = props.pagepath
    ? `${metadata.siteUrl}${props.pagepath}`
    : metadata.siteUrl

  const imgurl = props.pageimg
    ? `${metadata.siteUrl}${props.pageimg}`
    : `${metadata.siteUrl}/thumb.jpg`
  const imgw = props.pageimgw || 1200
  const imgh = props.pageimgh || 640

  return (
    <Helmet>
      <html lang={metadata.lang} />
      <title>{title}</title>
      <meta name="description" content={description} />

      <link ref="canonical" href={url} />

      <meta name="viewport" content="width=device-width,initial-scale=1" />

      <meta property="og:site_name" content={metadata.title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={metadata.locale} />

      <meta property="og:image" content={imgurl} />
      <meta property="og:image:width" content={imgw} />
      <meta property="og:image:height" content={imgh} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        data-react-helmet="true"
        name="google-site-verification"
        content="google-site-verification=Ni4b6vLxTcWFSgTxA96asKaCt6EegliR-Px6zuaVBA4"
      />
    </Helmet>
  )
}
