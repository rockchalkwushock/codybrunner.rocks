/* eslint-disable no-undef */
import React from 'react'

import { HomeView } from '../components'

const IndexPage = ({ data }) => (
  <HomeView
    meta={data.site.siteMetadata}
    posts={data.allMarkdownRemark.edges}
  />
)

export const pageQuery = graphql`
  query HomePageQuery {
    allMarkdownRemark(
      filter: { fields: { slug: { ne: "/about/" } } }
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            draft
            tags
            title
          }
        }
      }
    }
    site {
      siteMetadata {
        author
        business {
          className
          href
          label
        }
        contacts {
          className
          href
          label
        }
        copyright
        description
        googleVerify
        jobTitle
        keywords
        lang
        menu {
          id
          href
          text
        }
        title
        twitter
        url
      }
    }
  }
`

export default IndexPage
