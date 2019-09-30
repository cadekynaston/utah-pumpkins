const path = require(`path`)
const sharp = require('sharp')

sharp.cache(false)
sharp.simd(false)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`./src/templates/blog-post-template.js`)
  const galleryTemplate = path.resolve(`./src/templates/image-gallery-template.js`)
  const IndividualImageTemplate = path.resolve(`./src/templates/individual-image-template.js`)

  const result = await graphql(
    `
      {
        allContentfulBlogPost {
          edges {
            node {
              slug
            }
          }
        }
        allContentfulPumpkinImage {
          edges {
            node {
              id
              slug
              tags
            }
          }
        }
        allContentfulGallery {
          edges {
            node {
              slug
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
  const posts = result.data.allContentfulBlogPost.edges
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.slug,
      component: blogPostTemplate,
      context: {
        slug: post.node.slug,
        previous,
        next,
      },
    })
  })

  // Create gallery pages.
  const galleries = result.data.allContentfulGallery.edges
  galleries.forEach(gallery => {
    createPage({
      path: `/gallery/${gallery.node.slug}`,
      component: galleryTemplate,
      context: {
        slug: gallery.node.slug,
      },
    })
  })

  // Create single image pages.
  const pumpkinImages = result.data.allContentfulPumpkinImage.edges
  pumpkinImages.forEach(item => {

    const { id, slug, tags } = item.node

    createPage({
      path: `/gallery/${slug}`,
      component: IndividualImageTemplate,
      context: {
        pumpkinsId: id,
        relatedImageTags: tags,
      },
    })

  })

  // // Create gallery pages by year.
  // const assets = result.data.allContentfulAsset.edges

  // const imagesByYear = assets.reduce((all, current) => {

  //   if (!current.node.file.contentType.includes('image')) return all
  //   if (current.node.description === undefined || !current.node.description.includes('year')) return all
  //   let year = current.node.description.split(',').filter(tag => tag.includes('year'))[0].split(':')[1].trim()

  //   all[year] = all[year] ? [...all[year], current] : [current]

  //   return all
  // }, {})

  // for (year in imagesByYear) {
  //   createPage({
  //     path: `/gallery/${year}`,
  //     component: imageGalleryTemplate,
  //     context: {
  //       yearImages: imagesByYear[year],
  //       year
  //     },
  //   })
  // }
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
