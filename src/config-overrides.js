const path = require('path');

module.exports = function override(config) {
  config.resolve.alias['~'] = path.join(config.paths.publicUrlOrPath, '/');
  return config;
};
