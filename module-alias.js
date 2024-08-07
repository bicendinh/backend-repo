const path = require('path');
const moduleAlias = require('module-alias');

moduleAlias.addAliases({
  '@config': path.join(__dirname, 'dist/config'),
  '@controller': path.join(__dirname, 'dist/controller'),
  '@core': path.join(__dirname, 'dist/core'),
  '@entities': path.join(__dirname, 'dist/entities'),
  '@middleware': path.join(__dirname, 'dist/middleware'),
  '@repository': path.join(__dirname, 'dist/repository'),
  '@routes': path.join(__dirname, 'dist/routes'),
});
