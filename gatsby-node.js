// Navtive
const { resolve } = require('path')

// Package
const { createFilePath } = require('gatsby-source-filesystem')

// Condition
const isProd = process.env.NODE_ENV === 'production'

const createTagPages = (createPage, posts) => {
  // Create an empty object to store the posts.
  const postsByTags = {}
  // Loop through all nodes (our markdown posts) and add the tags to our post object.
  posts.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!postsByTags[tag]) {
          postsByTags[tag] = []
        }
        postsByTags[tag].push(node)
      })
    }
  })

  // Create the tags page with the list of tags from our posts object.
  createPage({
    path: '/tags',
    component: resolve(`src/templates/tags.js`),
    context: {
      tags: Object.entries(postsByTags)
    }
  })

  const tags = Object.keys(postsByTags)
  // For each of the tags in the post object, create a tag page.
  tags.forEach(term => {
    const taggedPosts = postsByTags[term]
    createPage({
      path: `/tags/${term}`,
      component: resolve(`src/templates/term.js`),
      context: {
        taggedPosts,
        tag: term
      }
    })
  })
}

// Look up params for dev vs prod.
const args = isProd
  ? 'filter: { frontmatter: { draft: { ne: true } } } sort: { order: ASC, fields: [frontmatter___date] }'
  : 'sort: { order: ASC, fields: [frontmatter___date] }'

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  return new Promise((_resolve, reject) => {
    // NOTE: order is ASC because of next/prev context of array of posts.
    graphql(`
      {
        allMarkdownRemark(${args}) {
          edges {
            node {
              excerpt(pruneLength: 250)
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                description
                draft
                keywords
                tags
                title
              }
            }
          }
        }
      }
    `).then(result => {
      // Handle error case.
      if (result.errors) return reject(result.errors)
      // Array of nodes(posts).
      const posts = result.data.allMarkdownRemark.edges
      // Create all corresponding tag pages.
      createTagPages(createPage, posts)
      // Create posts.
      posts.map(({ node: post }, i) =>
        createPage({
          path: post.fields.slug,
          component: resolve('src/templates/post.js'),
          context: {
            next: i === posts.length - 1 ? null : posts[i + 1].node,
            prev: i === 0 ? null : posts[i - 1].node,
            slug: post.fields.slug
          }
        })
      )
      _resolve()
    })
  })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({
      node,
      getNode
    })
    createNodeField({
      name: 'slug',
      node,
      value
    })
  }
}
