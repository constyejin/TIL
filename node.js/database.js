const { MongoClient } = require('mongodb');

const url = process.env.DB_URL
let connectData = new MongoClient(url).connect()

module.exports = connectData
