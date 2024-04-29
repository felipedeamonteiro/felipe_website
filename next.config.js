const withImages = require('next-images');
module.exports = withImages({
  inlineImageLimit: false,
  esModule: true,
  fileExtensions: ['jpg', 'jpeg', 'png', 'gif'],
  webpack(config, options) {
    return config;
  },
});
