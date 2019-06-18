const mongoose = require('mongoose');
const redis = require('redis');
var connection = mongoose.connect(
    'mongodb://10.0.75.0:27017/test', { useNewUrlParser:true }
);
connection
    .then(result => console.log(result))
    .catch(err => console.log(err))

// var redisClient = redis.createClient(16379, '10.0.75.0');
// redisClient.set('REDIS_KEY', '0');