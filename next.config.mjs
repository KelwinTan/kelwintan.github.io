const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  // Add basePath
  basePath: '/github-pages',
}

// const withMDX = nextMDX({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [rehypePrism],
//   },
// })

module.exports = nextConfig
