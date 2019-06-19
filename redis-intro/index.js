const redis = require('redis');
var redisClient = redis.createClient(6379, '127.0.0.1');
//redisClient.set('student', 'Abdel');
//redisClient.flushall();

redisClient.get('student', (err, result) => {
    console.log(result);
});

var getAsync = (key) => {
    return new Promise((resolve, reject) => {
        redisClient.get(key, (err, result) => {
            if (err) reject(err);
            resolve(result)
        })
    })
}

getAsync('student').then(value => console.log(value));

(async function() {

 var student = await getAsync('student');
 console.log(student);

})()

// redisClient.zrange('players', 0, -1, (err, result) => {

// });




//zrange players 0 -1


