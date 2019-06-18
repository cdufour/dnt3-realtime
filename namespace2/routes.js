const router = require('express').Router();

router.get('/football', (req, res) => {
    res.sendFile(__dirname + '/static/football.html');
})
router.get('/tennis', (req, res) => {
    res.sendFile(__dirname + '/static/tennis.html');
})

module.exports = router;