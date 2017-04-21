const express = require('express');
const router = express.Router();
const Pusher = require('pusher');
const axios = require('axios');
const Message = require('./models/message');

const pusher = new Pusher({
    appId: process.env.UC_PUSHER_APPID,
    key: process.env.UC_PUSHER_KEY,
    secret: process.env.UC_PUSHER_SECRET
});

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

router.post('/api/v1/save_message', (req, res) => {
    console.log('POST to /save_message');
    const message = new Message(req.body.message)
    message.save((err, resp) => {
        if(err){
            console.log(err)
        }else{
            res.send(message);
        }
    })
})

router.get('/api/v1/get_messages', (req, res) => {
    console.log('POST to /get_messages');
    let messages = []
    Message.find({}, (err, messages) => {
        if(err){
            console.log(err)
        }else{
            res.send(messages);
        }
    })
})

module.exports = router;