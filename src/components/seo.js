import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import siteSnapshot from "../images/site-snapshot.png"

function SEO({ description, lang, meta, title, ogImagePath = null }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  let ogImage = ogImagePath || siteSnapshot

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title itemProp="name" lang="en">
        {title}
      </title>
      <meta name="description" content={metaDescription} />
      <meta
        property="google-site-verification"
        content="QIjYtjBa0zi9jzr2UE-oduw8dA2uExOaK3NnicN9_Xk"
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={site.siteMetadata.siteUrl} />
      <meta property="og:site_name" content={title} />
      <meta
        property="og:image"
        content={ogImage}
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="600" />
      <meta property="og:image:type" content="image/png" />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={metaDescription} />
      <meta
        itemProp="image"
        content={ogImage}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={site.siteMetadata.siteUrl} />
      <meta name="twitter:site" content={site.siteMetadata.author} />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta
        name="twitter:image"
        content={ogImage}
      />
      <meta name="twitter:image:alt" content={title} />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
