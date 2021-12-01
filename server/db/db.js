const { MongoClient } = require('mongodb')

// Connection URL
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

// Database Name
const dbName = 'Prueba'

client.connect()
const db = client.db(dbName)

module.exports = db