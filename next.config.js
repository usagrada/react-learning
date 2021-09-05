
const withTM = require("next-transpile-modules")(["gsap"]);
require('dotenv').config();

module.exports = withTM({
  reactStrictMode: true,
  assetPrefix: process.env.GITHUB_PAGES ? '/react-learning' : '',
  images: {
    loader: 'imgix',
    path: '.',
  },
})
