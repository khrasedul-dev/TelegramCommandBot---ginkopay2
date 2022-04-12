const mongoose = require('mongoose')

const s = new mongoose.Schema({
    userId : {
        type: Number
    },
    username: {
        type: String
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    crypto: {
        type: String
    },
    wallet: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    }
},{versionKey: false})


module.exports = mongoose.model('withdrawl_request_list', s)