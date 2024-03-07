/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  // Add basePath
  basePath: '/github-pages',
  distDir: 'out',
}

// const withMDX = nextMDX({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [rehypePrism],
//   },
// })

export default nextConfig