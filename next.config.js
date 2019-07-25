const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withFonts = require('next-fonts');

module.exports = withFonts(
  withImages(
    withSass({
      distDir: 'build',
      pageExtensions: ['jsx', 'js'],
      cssModules: true,
      webpack: config => config,
      cssLoaderOptions: {
        getLocalIdent: (context, localIdentName, localName, options) =>
            localName,
      }
    })
  )
);
