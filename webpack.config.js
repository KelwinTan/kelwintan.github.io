const path = require('path');

module.exports = {
  // Other Webpack configuration options...
  mode: 'production',
  entry: {
    home: './src/app/page.tsx',
  },
  module: {
    rules: [
      // ...Other rules for handling different file types

      {
        test: /\.mdx$/,
        use: [
          'babel-loader', // Transpile JSX with Babel
          '@mdx-js/loader', // Process MDX files
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader', // Use file-loader to handle images
            options: {
              name: '[name].[ext]', // Output file name and extension
              outputPath: 'images', // Output directory for images (optional)
            },
          },
        ],
      },
    ],
  },

  // ...Other Webpack configuration options
};
