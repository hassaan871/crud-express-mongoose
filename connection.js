const mongoose = require('mongoose')

const connectMongoDB = async (url) => {
    const connect = await mongoose.connect(url)
    return connect;
}

module.exports = {
    connectMongoDB
} 