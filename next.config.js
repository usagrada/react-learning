require('dotenv').config();

module.exports = {
  reactStrictMode: true,
  assetPrefix: process.env.GITHUB_PAGES ? '/react-learning' : '',
  images: {
    loader: 'imgix',
    path: '.',
  },
}
