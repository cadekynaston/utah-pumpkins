const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post-contentful.js`)
  const imageGalleryTemplate = path.resolve(`./src/templates/image-gallery-template.js`)
  const result = await graphql(
    `
      {
        contentfulBlogPosts: allContentfulBlogPost {
          edges {
            node {
              id
              author
              date
              title
              subtitle
              websiteUrl
              slug
              content {
                content
              }
              headerImage {
                fluid {
                  src
                }
              }
            }
          }
        }
        allContentfulAsset {
          edges {
            node {
              file {
                contentType
                url
              }
              title
              description
              id
              fluid(quality: 100, maxWidth: 800) {
                src
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.contentfulBlogPosts.edges
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.slug,
      component: blogPost,
      context: {
        slug: post.node.slug,
        previous,
        next,
      },
    })
  })

  // Create gallery pages by year.
  const assets = result.data.allContentfulAsset.edges

  const imagesByYear = assets.reduce((all, current) => {
    if (!current.node.file.contentType.includes('image')) return all
    let year = current.node.description.split(',').filter(tag => tag.includes('year'))[0].split(':')[1].trim()

    all[year] = all[year] ? [...all[year], current] : [current]

    return all
  }, {})

  for (year in imagesByYear) {
    createPage({
      path: `/gallery/${year}`,
      component: imageGalleryTemplate,
      context: {
        yearImages: imagesByYear[year],
        year
      },
    })
  }
  // posts.forEach((post, index) => {
  //   const previous = index === posts.length - 1 ? null : posts[index + 1].node
  //   const next = index === 0 ? null : posts[index - 1].node

  //   createPage({
  //     path: post.node.slug,
  //     component: blogPost,
  //     context: {
  //       slug: post.node.slug,
  //       previous,
  //       next,
  //     },
  //   })
  // })
}

