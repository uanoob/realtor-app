// config.js - figure out what set of credentials to return
module.exports = process.env.NODE_ENV === 'production' ? require('./prod.config') : require('./dev.config');
