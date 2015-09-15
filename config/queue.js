var redis = require('redis');
var kue = require('kue');
var url = require('url');


var redisURL = url.parse(process.env.REDIS_URL);
var q = kue.createQueue({
  redis: {
    port: redisURL.port,
    host: redisURL.hostname,
    auth: redisURL.auth.split(":")[1]
  }
});

// export keu
module.exports = q;