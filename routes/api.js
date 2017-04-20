const express = require('express');
const router = express.Router();
const Pusher = require('pusher');

const pusher = new Pusher({
    appId: process.env.UC_PUSHER_APPID,
    key: process.env.UC_PUSHER_KEY,
    secret: process.env.UC_PUSHER_SECRET
});

let messages = [];

router.get('/', (req, res) => {
    res.send('all good!');
})

// Version 1 routes
router.post('/api/v1/pusher/auth', (req, res) => {
    console.log('POST to /pusher/auth');
    const socketId = req.body.socket_id;
    const channel = req.body.channel_name;
    const auth = pusher.authenticate(socketId, channel);
    res.send(auth);
})

module.exports = router;