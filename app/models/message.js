const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    username: { type: String, required: true },
    text: { type: String, required: true }
})

const Message = mongoose.model('Message', messageSchema)

module.exports = Message;